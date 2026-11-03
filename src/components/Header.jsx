import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { ApprovedVPilotBrand } from "../VPilotBrand.jsx";
import { megaMenus } from "../data/siteContent.js";
import MegaMenu from "./MegaMenu.jsx";

const menuKeys = ["company", "services", "solutions", "insights"];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    const onKey = (event) => event.key === "Escape" && setActiveMenu(null);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);

  const openMenu = (key) => { clearTimeout(closeTimer.current); setActiveMenu(key); };
  const delayedClose = () => { closeTimer.current = setTimeout(() => setActiveMenu(null), 180); };
  const closeAll = () => { setActiveMenu(null); setMobileOpen(false); };

  return (
    <header className={`v46-approved-header ${solid ? "solid" : ""}`} onMouseLeave={delayedClose}>
      <div className="nav-wrap">
        <Link className="logo" to="/" aria-label="V Pilot home" onClick={closeAll}><ApprovedVPilotBrand compact/></Link>
        <nav className={mobileOpen ? "mobile-open" : ""}>
          {menuKeys.map((key) => (
            <button className={activeMenu === key ? "active" : ""} key={key}
              onMouseEnter={() => openMenu(key)} onClick={() => setActiveMenu(activeMenu === key ? null : key)}
              aria-expanded={activeMenu === key}>
              {key[0].toUpperCase() + key.slice(1)} <ChevronDown size={14}/>
            </button>
          ))}
          <NavLink to="/contact" onClick={closeAll}>Contact Us</NavLink>
          <Link className="nav-cta" to="/contact" onClick={closeAll}>Consult now <ArrowRight size={16}/></Link>
        </nav>
        <button className="menu" type="button" aria-label="Toggle navigation" aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</button>
      </div>
      <div onMouseEnter={() => clearTimeout(closeTimer.current)} onMouseLeave={delayedClose}>
        <MegaMenu menu={activeMenu ? megaMenus[activeMenu] : null} onClose={closeAll}/>
      </div>
    </header>
  );
}
