import AppStoreIcon from "../assets/Images/AppStoreIcon.png";
import PlayStoreIcon from "../assets/Images/PlayStoreIcon.png";
import Frame from "../assets/Images/Frame.png";

const APP_STORE_URL = "https://apps.apple.com/us/app/bitcoin-vitals/id6762464023";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.bitcoinvitals.app";

const Contact = () => {
    return (
        <>
            <section className="hero">
                <div className="container hero-grid">
                    <div className="hero-image">
                        <img src={Frame} alt="App Preview" className="phone-mock" />
                    </div>

                    <div>
                        <h1 style={{ fontSize: 40 }}>Bitcoin Vitals</h1>
                        <p style={{ fontSize: 20, fontWeight: "bold" }}>Bitcoin-only analytics for clarity, not noise.</p>

                        <div className="store-buttons">
                            <a href={APP_STORE_URL} className="store-btn" target="_blank" rel="noopener noreferrer"><img src={AppStoreIcon} alt="Download on the App Store" /></a>
                            <a href={PLAY_STORE_URL} className="store-btn" target="_blank" rel="noopener noreferrer"><img src={PlayStoreIcon} alt="Get it on Google Play" /></a>
                        </div>

                        <p className="hero-desc">
                            Track your holdings, verify on-chain activity,
                            and monitor network health — without accounts,
                            ads, or data harvesting.
                        </p>
                    </div>
                </div>
            </section>
            <div className="container page" style={{ textAlign: "center" }}>

                <h2>Contact Us</h2>

                <form className="contact-form" style={{ margin: "0 auto" }}>
                    <div className="form-row">
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Phone" />
                        <input type="email" placeholder="Email" />
                    </div>

                    <div className="form-row">
                        <select>
                            <option>Select Topic</option>
                        </select>
                        <select>
                            <option>Select Category</option>
                        </select>
                    </div>

                    <textarea placeholder="Your Message" rows={5}></textarea>

                    <button className="primary-btn">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Contact;