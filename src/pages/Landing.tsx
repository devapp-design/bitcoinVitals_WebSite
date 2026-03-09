import { useEffect, useRef, useState } from "react";
import AppStoreIcon from "../assets/Images/AppStoreIcon.png";
import PlayStoreIcon from "../assets/Images/PlayStoreIcon.png";
import Frame from "../assets/Images/Frame.png";
import SingleFrame from "../assets/Images/SingleFrame.png";
import LongTermIcon from "../assets/Images/BuiltForLongTerm.png"
import MacroPerspective from "../assets/Images/MacroPerspective.png"
import OnChainIcon from "../assets/Images/OnChainIcon.png"
import PrivacyByDesign from "../assets/Images/PrivacyByDesign.png"
import TrackIcon from "../assets/Images/TrackIcon.png"
import NetworkIntelligence from "../assets/Images/NetworkIntelligence.png"

// ─── Scoped styles for features + CTA sections ───────────────────────────────
const sectionCss = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

  /* ── FEATURES ── */
  .lp-features {
    padding: 80px 0 60px;
  }

  .lp-features-inner {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
  }

  .lp-features-heading {
    font-family: sans-serif;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 800;
    color: #1A1E2E;
    margin-bottom: 6px;
    letter-spacing: -0.02em;
  }

  .lp-features-sub {
    font-size: 0.9375rem;
    color: #6B7280;
    margin-bottom: 44px;
    line-height: 1.6;
  }

  .lp-features-layout {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 48px;
    align-items: start;
  }

  .lp-features-left {
    min-width: 0;
  }

  .lp-features-right {
    flex-shrink: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .lp-features-mockup {
    width: 321.87px;
    height: 643.6px;
    object-fit: contain;
    display: block;
  }

  .lp-feature-list {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }

  .lp-feature-row {
    display: grid;
    grid-template-columns: 42px 1fr;
    gap: 0 18px;
    align-items: start;
    padding: 22px 14px;
    cursor: default;
    opacity: 0;
    transform: translateY(14px);
    transition: opacity 0.5s ease, transform 0.5s ease, background 0.2s ease;
  }

  .lp-feature-row.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .lp-feature-row:hover {
    background: rgba(69,139,233,0.05);
  }

  .lp-feature-num {
    font-family: sans-serif;
    font-size: 0.62rem;
    font-weight: 700;
    color: #458BE9;
    opacity: 0.55;
    letter-spacing: 0.06em;
    align-self: start;
    padding-top: 3px;
  }

  .lp-feature-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .lp-feature-icon svg {
    width: 17px;
    height: 17px;
    stroke: #458BE9;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .lp-feature-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .lp-feature-title {
    font-family: sans-serif;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #1A1E2E;
  }

  .lp-feature-desc {
    font-size: 0.875rem;
    line-height: 1.65;
    color: #6B7280;
  }

  /* ── CTA ── */
  .lp-cta {
    padding: 20px 0 80px;
  }

  .lp-cta-inner {
    width: 90%;
    max-width: 860px;
    margin: 0 auto;
    text-align: center;
  }

  .lp-cta-heading {
    font-family: sans-serif;
    font-size: clamp(1.6rem, 4vw, 2.5rem);
    font-weight: 500;
    color: #458BE9;
    letter-spacing: -0.02em;
    line-height: 1.1;
    margin-bottom: 14px;
  }

  .lp-cta-heading span {
    color: #f7931a;
  }

  .lp-cta-subtext {
    font-size: 0.9375rem;
    line-height: 1.7;
    color: #6B7280;
  }

  .lp-cta-actions {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 32px;
    flex-wrap: wrap;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .lp-features-layout {
      grid-template-columns: 1fr;
    }
    .lp-features-right {
      order: -1;
    }
    .lp-features-mockup {
      width: 240px;
      height: auto;
    }
  }

  @media (max-width: 680px) {
    .lp-cta-card {
      flex-direction: column;
      align-items: flex-start;
      padding: 36px 26px;
    }
    .lp-cta-subtext { max-width: 100%; }
    .lp-cta-actions { flex-direction: row; flex-wrap: wrap; }
    .lp-features-mockup {
      width: 200px;
      height: auto;
    }
  }

  @media (max-width: 600px) {
    .lp-feature-list {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .lp-feature-row {
      grid-template-columns: 38px 1fr;
      gap: 0 12px;
    }
  }
`;

// ─── Icons ───────────────────────────────────────────────────────────────────
const icons = {
  track:   <img src={TrackIcon} width="24" height="24" />,
  verify:  <img src={OnChainIcon} width="24" height="24" />,
  network: <img src={NetworkIntelligence} width="22" height="29" />,
  macro:   <img src={MacroPerspective} width="24" height="12" />,
  privacy: <img src={PrivacyByDesign} width="16" height="24" />,
  longterm:<img src={LongTermIcon} width="24" height="24" />,
};
/* ── CTA SECTION STYLES ── */
const ctaStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

  .cta-section {
    background: linear-gradient(180deg, #F2F4F7 0%, #E8EBF0 100%);
    padding: 96px 24px 80px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .cta-inner {
    position: relative;
    z-index: 1;
  }

  .cta-heading {
    font-family:  sans-serif;
    font-size: clamp(2rem, 5vw, 3.25rem);
    font-weight: 800;
    color: #2D7DD2;
    letter-spacing: -0.02em;
    margin-bottom: 20px;
  }

  .cta-subtext {
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.7;
    color: #6B7280;
    max-width: 560px;
    margin: 0 auto 40px;
  }

  .cta-store-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-store-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 22px;
    border-radius: 10px;
    background: #1A1E2E;
    color: #ffffff;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .cta-store-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(26, 30, 46, 0.22);
  }

  .cta-store-btn svg {
    width: 22px;
    height: 22px;
    fill: #ffffff;
    flex-shrink: 0;
  }

  .cta-btn-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .cta-btn-small {
    font-family: 'DM Sans', sans-serif;
    font-size: 0.65rem;
    opacity: 0.75;
    letter-spacing: 0.04em;
    line-height: 1;
  }

  .cta-btn-label {
    font-family:  sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    line-height: 1.2;
  }

  /* Decorative background circles */
  .cta-deco-circles {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .cta-deco-circle {
    position: absolute;
    border-radius: 50%;
    border: 1.5px solid rgba(45, 125, 210, 0.12);
  }
`;

// ─── Feature data ─────────────────────────────────────────────────────────────
const features = [
  { icon: icons.track,    title: "Track What Matters",      desc: "Monitor your Bitcoin holdings, historical buys, and long-term performance, including retirement projections, all in one place." },
  { icon: icons.verify,   title: "Verify On-Chain",         desc: "Explore blocks, transactions, and addresses directly on the Bitcoin network. No black boxes. No hidden assumptions." },
  { icon: icons.network,  title: "Network Intelligence",    desc: "See fees, mempool activity, hashrate, difficulty, mining data, nodes, Lightning capacity, and ETF flows, always in context." },
  { icon: icons.macro,    title: "Macro Perspective",       desc: "Understand how Bitcoin interacts with broader macro signals such as liquidity, issuance, and adoption trends." },
  { icon: icons.privacy,  title: "Privacy by Design",       desc: "No accounts. No email. No private keys. Optional view-only wallet syncing. Preferences stored locally on your device." },
  { icon: icons.longterm, title: "Built for Long-Term Users", desc: "Designed for Bitcoin-only users who value verification, transparency, and long-term thinking, not day trading." },
];

// ─── useInView hook ───────────────────────────────────────────────────────────
function useInView(rootMargin = "0px") {
  const ref = useRef<HTMLLIElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);
  return [ref, inView] as const;
}

// ─── FeatureItem ──────────────────────────────────────────────────────────────
function FeatureItem({ icon, title, desc, index }: { icon: React.ReactNode; title: string; desc: string; index: number }) {
  const [ref, inView] = useInView("-60px");
  return (
    <li
      ref={ref}
      className={`lp-feature-row${inView ? " visible" : ""}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="lp-feature-icon">{icon}</div>
      <div className="lp-feature-content">
        <div className="lp-feature-title">{title}</div>
        <p className="lp-feature-desc">{desc}</p>
      </div>
    </li>
  );
}
function CTASection() {
  return (
    <>
    <style>{ctaStyles}</style>
    <section className="cta-section">
      {/* decorative background circles */}
      {/* <div className="deco-circles" aria-hidden="true">
        {[
          { w: 320, top: "10%", left: "5%" },
          { w: 180, top: "60%", left: "2%" },
          { w: 240, top: "20%", right: "8%" },
          { w: 140, bottom: "10%", right: "15%" },
          { w: 80, top: "50%", left: "35%" },
          { w: 60, bottom: "20%", left: "55%" },
        ].map((s, i) => (
          <div
            key={i}
            className="deco-circle"
            style={{ width: s.w, height: s.w, top: s.top, left: s.left, right: s.right, bottom: s.bottom }}
          />
        ))}
      </div> */}

      <div className="cta-inner">
        <h2 className="cta-heading">Clarity over speculation.</h2>
        <p className="cta-subtext">
          Bitcoin Vitals is not a trading app. It doesn't tell you what to buy or sell.
          Instead, it gives you the tools to verify reality, understand the network,
          and make your own informed decisions over time.
        </p>
        <div className="cta-store-buttons">
          <a href="#" className="store-btn">
            <img src={AppStoreIcon} alt="Download on the App Store" />
          </a>
          <a href="#" className="store-btn">
            <img src={PlayStoreIcon} alt="Download on the App Store" />
            
          </a>
        </div>
      </div>
    </section>
    </>
  );
}


// ─── Landing page ─────────────────────────────────────────────────────────────
const Landing = () => {
  return (
    <div>
      <style>{sectionCss}</style>

      {/* ── Hero (unchanged) ── */}
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

      {/* ── All Features ── */}
      <section className="lp-features">
        <div className="lp-features-inner">
          <h2 className="lp-features-heading">All Features</h2>
          <p className="lp-features-sub">Everything you need to understand Bitcoin, nothing you don't.</p>
          <div className="lp-features-layout">
            <div className="lp-features-left">
              <ul className="lp-feature-list">
                {features.map((f, i) => (
                  <FeatureItem key={f.title} {...f} index={i} />
                ))}
              </ul>
            </div>
            <div className="lp-features-right" style={{marginTop: "-10%"}}>
              <img
                src={SingleFrame}
                alt="App mockup"
                className="lp-features-mockup"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
     <CTASection />
      
    </div>
  );
};

export default Landing;
