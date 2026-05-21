import { useEffect } from "react";

const APP_STORE_URL = "https://apps.apple.com/us/app/bitcoin-vitals/id6762464023";
const APP_STORE_DEEP_LINK_URL = "itms-apps://itunes.apple.com/app/id6762464023";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.bitcoinvitals.app";

type DeepLinkPageProps = {
  label: string;
  value?: string;
};

function getMobileStoreUrl() {
  const ua = navigator.userAgent.toLowerCase();

  if (/android/.test(ua)) {
    return PLAY_STORE_URL;
  }

  if (/iphone|ipad|ipod/.test(ua)) {
    return APP_STORE_DEEP_LINK_URL;
  }

  return null;
}

export default function DeepLinkPage({ label, value }: DeepLinkPageProps) {
  useEffect(() => {
    const storeUrl = getMobileStoreUrl();

    if (storeUrl) {
      window.location.replace(storeUrl);
    }
  }, []);

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
        <p style={{ color: "#888", lineHeight: 1.6, marginTop: 12 }}>
          If the app is installed, this link should open it automatically. Otherwise, we
          will send you to the app store.
        </p>

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
            href={APP_STORE_URL}
            rel="noopener noreferrer"
            style={{
              background: "#F7931A",
              borderRadius: 999,
              color: "#0B0B0B",
              fontWeight: 700,
              padding: "12px 18px",
              textDecoration: "none",
            }}
          >
            Open App Store
          </a>
          <a
            href={PLAY_STORE_URL}
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
