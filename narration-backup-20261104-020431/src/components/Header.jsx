import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";

import { ApprovedVPilotBrand } from "../VPilotBrand.jsx";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSolid(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`v46-approved-header ${
        solid ? "solid" : ""
      }`}
    >
      <div className="nav-wrap">
        <Link
          className="logo"
          to="/"
          aria-label="V Pilot home"
          onClick={closeMenu}
        >
          <ApprovedVPilotBrand compact />
        </Link>

        <nav className={mobileOpen ? "mobile-open" : ""}>
          <NavLink to="/company" onClick={closeMenu}>
            Company
          </NavLink>

          <NavLink to="/services" onClick={closeMenu}>
            Services
          </NavLink>

          <NavLink to="/solutions" onClick={closeMenu}>
            Solutions
          </NavLink>

          <NavLink to="/insights" onClick={closeMenu}>
            Insights
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact Us
          </NavLink>

          <Link
            className="nav-cta"
            to="/contact"
            onClick={closeMenu}
          >
            Consult now
            <ArrowRight size={16} />
          </Link>
        </nav>

        <button
          className="menu"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
