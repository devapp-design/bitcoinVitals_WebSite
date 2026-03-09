
import AppStoreIcon from "../assets/Images/AppStoreIcon.png";
import PlayStoreIcon from "../assets/Images/PlayStoreIcon.png";
import OnChainFirst from "../assets/Images/OnChainFirst.png";
import Portfolio from "../assets/Images/Portfolio.png";
import LongTermModeling from "../assets/Images/LongTermModeling.png";
import NetworkHealthVisiblity from "../assets/Images/NetworkHealthVisiblity.png";
import Privacy from "../assets/Images/Privacy.png";
import Independent from "../assets/Images/Independent.png";
import Frame from "../assets/Images/Frame.png";
const About = () => {
    const features = [
        {
            id: 1,
            icon: <img src={OnChainFirst} width="58" height="34" />,
            title: "On-Chain First",
            desc: "Bitcoin Vitals is built around what can be verified. We prioritize on-chain data, public network metrics, and transparent sources over narratives.",
        },
        {
            id: 2,
            icon: <img src={Portfolio} width="59" height="64" />,
            title: "Portfolio With Context",
            desc: "Track your Bitcoin holdings alongside the state of the network itself. Portfolio data is shown in context, not in isolation, so users can understand the bigger picture.",
        },
        {
            id: 3,
            icon: <img src={LongTermModeling} width="58" height="32" />,
            title: "Long-Term Modeling",
            desc: "The platform is designed for studying Bitcoin across years, not minutes. Retirement projections and long-range views help users think in cycles, not trades.",
        },
        {
            id: 4,
            icon: <img src={NetworkHealthVisiblity} width="62" height="38" />,
            title: "Network Health Visibility",
            desc: "Fees, mempool activity, hashrate, difficulty, nodes, and Lightning capacity are surfaced clearly so users can observe how the network is functioning at a glance.",
        },
        {
            id: 5,
            icon: <img src={Privacy} width="53" height="47" />,
            title: "Privacy by Design",
            desc: "Bitcoin Vitals does not require accounts, emails, or personal identifiers. Wallet connections, when used, are strictly view-only and remain under the user's control.",
        },
        {
            id: 6,
            icon: <img src={Independent} width="42" height="43" />,
            title: "Independent by Principle",
            desc: "The project is intentionally Bitcoin-only. No altcoin tracking, no trading execution, no advertisements, and no data monetization. The goal is clarity, not engagement metrics.",
        },
    ];

    const css = `
  .wbv-section {
    
    padding: 72px 0;
  }

  .wbv-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 56px 64px;
    max-width: 1100px;
    margin: 0 auto;
  }

  .wbv-card {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  /* ── Icon placeholder ── */
  .wbv-icon {
    width: 52px;
    height: 52px;
    border-radius: 10px;
    background: rgba(45, 125, 210, 0.10);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    /* REPLACE: swap this div with your <img> or SVG icon */
  }

  .wbv-icon-placeholder {
    width: 26px;
    height: 26px;
    border-radius: 4px;
    border: 2px dashed rgba(45, 125, 210, 0.35);
  }

  .wbv-title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    color: #1A1E2E;
    letter-spacing: -0.01em;
    line-height: 1.3;
  }

  .wbv-desc {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 0.9375rem;
    line-height: 1.7;
    color: #4B5563;
  }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .wbv-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 48px 40px;
    }
    .wbv-section {
      padding: 56px 32px;
    }
  }

  @media (max-width: 560px) {
    .wbv-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .wbv-section {
      padding: 48px 24px;
    }
  }
`;

    function WhyBitcoinVitals() {
        return (
            <>
                <style>{css}</style>
                <section className="wbv-section">
                    <div className="wbv-grid">
                        {features.map((f) => (
                            <div className="wbv-card" key={f.id}>

                                {/* REPLACE: swap .wbv-icon contents with your actual icon image/SVG */}
                                {f.icon}

                                <h3 className="wbv-title">{f.title}</h3>
                                <p className="wbv-desc">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </>
        );
    }
    return (
        <>
            <div className="container page">
                <h2>About Us</h2>

                <div className="two-column">
                    <p>
                        Bitcoin Vitals was created to bring clarity to Bitcoin by focusing on what can be verified, not what can be marketed. In a space crowded with speculation, trading tools, and engagement-driven platforms, Bitcoin Vitals takes a different approach: it treats Bitcoin as a system, not a product.
                        <br /> <br />
                        Our goal is to help users understand Bitcoin across time, past activity, present conditions, and long-term implications. From individual holdings to network-wide metrics, every feature is built around transparent data and direct observation of the Bitcoin network.
                        <br /> <br />
                        Bitcoin Vitals does not promote trading, price predictions, or short-term behavior. It exists for people who want to study Bitcoin, track their own exposure responsibly, and understand how the network evolves.

                    </p>

                    <p>
                        The platform is designed around a simple principle: if something matters, it should be verifiable. That’s why Bitcoin Vitals emphasizes on-chain data, open network metrics, and user-controlled inputs rather than opinions or algorithms that can’t be inspected.
                        <br /> <br />
                        Privacy is a core part of this philosophy. Bitcoin Vitals does not require accounts, email addresses, or personal information. Wallet connections, when used, are strictly view-only and remain under the user’s control at all times.
                        <br /> <br />
                        Bitcoin Vitals is built for long-term thinkers, individuals who value independence, transparency, and a clear understanding of Bitcoin’s role as an open monetary network.
                    </p>
                </div>
                <div className="store-buttons">
                    <a href="#" className="store-btn"><img src={AppStoreIcon} alt="Download on the App Store" /></a>
                    <a href="#" className="store-btn"><img src={PlayStoreIcon} alt="Get it on Google Play" /></a>
                </div>

                {WhyBitcoinVitals()}
            </div>
            <section className="hero">
                <div className="container hero-grid">
                    <div className="hero-image">
                        <img src={Frame} alt="App Preview" className="phone-mock" />
                    </div>

                    <div>
                        <h1 style={{ fontSize: 40 }}>Bitcoin Vitals</h1>
                        <p style={{ fontSize: 20, fontWeight: "bold" }}>Bitcoin-only analytics for clarity, not noise.</p>

                        <div className="store-buttons">
                            <a href="#" className="store-btn"><img src={AppStoreIcon} alt="Download on the App Store" /></a>
                            <a href="#" className="store-btn"><img src={PlayStoreIcon} alt="Get it on Google Play" /></a>
                        </div>

                        <p className="hero-desc">
                            Track your holdings, verify on-chain activity,
                            and monitor network health — without accounts,
                            ads, or data harvesting.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;