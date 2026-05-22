import { useEffect } from "react";

const APP_STORE_URL = "https://apps.apple.com/us/app/bitcoin-vitals/id6762464023";
const APP_STORE_DEEP_LINK_URL = "itms-apps://itunes.apple.com/app/id6762464023";
const ANDROID_PACKAGE_NAME = "com.bitcoinvitals.app";
const APP_SCHEME = "bitcoinvitals";
const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE_NAME}`;
const STORE_FALLBACK_DELAY_MS = 1500;

type DeepLinkPageProps = {
  label: string;
  value?: string;
};

type MobilePlatform = "android" | "ios" | null;

function getMobilePlatform(): MobilePlatform {
  const ua = navigator.userAgent.toLowerCase();

  if (/android/.test(ua)) {
    return "android";
  }

  if (/iphone|ipad|ipod/.test(ua)) {
    return "ios";
  }

  return null;
}

function getCurrentDeepLinkPath() {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

function getWebDeepLink(path: string) {
  return `${window.location.origin}${path}`;
}

function getCustomSchemeDeepLink(path: string) {
  return `${APP_SCHEME}://${path.startsWith("/") ? path : `/${path}`}`;
}

function getPlayStoreUrl(webDeepLink: string) {
  const playStoreUrl = new URL(PLAY_STORE_URL);

  playStoreUrl.searchParams.set("referrer", `deep_link=${encodeURIComponent(webDeepLink)}`);

  return playStoreUrl.toString();
}

function getAndroidIntentUrl(webDeepLink: string) {
  const url = new URL(webDeepLink);
  const fallbackUrl = getPlayStoreUrl(webDeepLink);

  return `intent://${url.host}${url.pathname}${url.search}#Intent;scheme=${url.protocol.replace(
    ":",
    "",
  )};package=${ANDROID_PACKAGE_NAME};S.browser_fallback_url=${encodeURIComponent(fallbackUrl)};end`;
}

export default function DeepLinkPage({ label, value }: DeepLinkPageProps) {
  const deepLinkPath = getCurrentDeepLinkPath();
  const webDeepLink = getWebDeepLink(deepLinkPath);
  const appDeepLink = getCustomSchemeDeepLink(deepLinkPath);
  const androidIntentUrl = getAndroidIntentUrl(webDeepLink);
  const playStoreUrl = getPlayStoreUrl(webDeepLink);

  useEffect(() => {
    const platform = getMobilePlatform();

    if (platform === "android") {
      window.location.replace(androidIntentUrl);

      return;
    }

    if (platform !== "ios") {
      return;
    }

    const fallbackTimer = window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        window.location.replace(APP_STORE_DEEP_LINK_URL);
      }
    }, STORE_FALLBACK_DELAY_MS);

    const clearFallback = () => {
      if (document.visibilityState === "hidden") {
        window.clearTimeout(fallbackTimer);
      }
    };

    document.addEventListener("visibilitychange", clearFallback);
    window.location.href = appDeepLink;

    return () => {
      window.clearTimeout(fallbackTimer);
      document.removeEventListener("visibilitychange", clearFallback);
    };
  }, [androidIntentUrl, appDeepLink]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0B0B0B",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 520, textAlign: "center" }}>
        <h1>Opening Bitcoin Vitals</h1>
      

        <p style={{ color: "#888", marginTop: 24 }}>{label}:</p>
        <p
          style={{
            color: "#F7931A",
            margin: "8px auto 24px",
            maxWidth: 420,
            wordBreak: "break-all",
          }}
        >
          {value || "Unknown"}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          <a
            href={appDeepLink}
            style={{
              background: "#F7931A",
              borderRadius: 999,
              color: "#0B0B0B",
              fontWeight: 700,
              padding: "12px 18px",
              textDecoration: "none",
            }}
          >
            Open in App
          </a>
          <a
            href={APP_STORE_URL}
            rel="noopener noreferrer"
            style={{
              border: "1px solid #F7931A",
              borderRadius: 999,
              color: "#F7931A",
              fontWeight: 700,
              padding: "12px 18px",
              textDecoration: "none",
            }}
          >
            Open App Store
          </a>
          <a
            href={playStoreUrl}
            rel="noopener noreferrer"
            style={{
              border: "1px solid #F7931A",
              borderRadius: 999,
              color: "#F7931A",
              fontWeight: 700,
              padding: "12px 18px",
              textDecoration: "none",
            }}
          >
            Open Google Play
          </a>
        </div>
      </div>
    </div>
  );
}
