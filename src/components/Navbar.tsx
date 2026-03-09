import { useState } from "react";
import { Link } from "react-router-dom";
import NavBarLogo from "../assets/Images/NavBarLogo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container nav-content">
                <div className="logo">
                    <img src={NavBarLogo} alt="Bitcoin Vitals" width={200} height={33} />
                </div>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`nav-links${menuOpen ? " open" : ""}`}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
