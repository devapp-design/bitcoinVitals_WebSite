import { Link } from "react-router-dom";
import FooterLogo from "../assets/Images/FooterLogo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div>
                    <img src={FooterLogo} alt="Bitcoin Vitals" width={152} height={125} />
                </div>

                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>

                <div>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Use</Link>
                </div>

                <div>
                    <h3>Follow Us On</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
                    </div>
                </div>
            </div>

            <div className="copyright">
                © Bitcoin Vitals | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;