import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function AddressPage() {
  const { address } = useParams();

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    const isIOS =
      /iphone|ipad|ipod/.test(ua);

    const isAndroid =
      /android/.test(ua);

    // fallback redirect
    const timer = setTimeout(() => {
      if (isIOS) {
        window.location.href =
          'https://apps.apple.com/app/idYOUR_APP_ID';
      } else if (isAndroid) {
        window.location.href =
          'https://play.google.com/store/apps/details?id=com.bitcoinvitals.app';
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0B0B0B',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1>Opening Bitcoin Vitals...</h1>

        <p
          style={{
            color: '#888',
            marginTop: 12,
          }}
        >
          Address:
        </p>

        <p
          style={{
            maxWidth: 300,
            wordBreak: 'break-all',
            color: '#F7931A',
          }}
        >
          {address}
        </p>
      </div>
    </div>
  );
}