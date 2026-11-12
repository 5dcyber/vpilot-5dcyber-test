import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { ApprovedVPilotBrand } from "../VPilotBrand.jsx";
import EnterpriseMegaMenu from "./EnterpriseMegaMenu.jsx";
import FrameworksMegaMenu from "./FrameworksMegaMenu.jsx";
import PlatformMegaMenu from "./PlatformMegaMenu.jsx";
import ServicesMegaMenu from "./ServicesMegaMenu.jsx";
import SolutionsMegaMenu from "./SolutionsMegaMenu.jsx";
import ResourcesMegaMenu from "./ResourcesMegaMenu.jsx";
import "./vpilot-enterprise-header.css";

const navItems = [
  { key: "company", label: "Company", menu: true },
  { key: "platform", label: "Platform", menu: true },
  { key: "solutions", label: "Solutions", menu: true },
  { key: "services", label: "Services", menu: true },
  { key: "frameworks", label: "Frameworks", menu: true },
  { key: "resources", label: "Resources", menu: true },
];

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  const closeAll = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  useEffect(() => closeAll(), [location.pathname]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") closeAll();
    };
    const onPointer = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveMenu(null);
          }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  const toggleMenu = (key) => {
    setActiveMenu((current) => current === key ? null : key);
  };

  return (
    <header ref={headerRef} className="vph-header">
      <div className="vph-utility">
        <div className="vph-shell vph-utility-inner">
          <nav aria-label="Utility navigation">
            <Link to="/support">Customer Support</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>

      <div className="vph-primary">
        <div className="vph-shell vph-primary-inner">
          <Link className="vph-logo" to="/" aria-label="V Pilot home" onClick={closeAll}>
            <ApprovedVPilotBrand compact />
          </Link>

          <nav className={`vph-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            {navItems.map((item) => item.menu ? (
              <button
                key={item.key}
                type="button"
                className={activeMenu === item.key ? "is-active" : ""}
                aria-expanded={activeMenu === item.key}
                aria-controls={`vph-menu-${item.key}`}
                onClick={() => toggleMenu(item.key)}
              >
                {item.label}<ChevronDown size={14}/>
              </button>
            ) : (
              <NavLink key={item.key} to={item.to} onClick={closeAll}>{item.label}</NavLink>
            ))}

            <div className="vph-mobile-actions">
              <Link to="/support">Customer Support</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contact">Contact</Link>
              <Link className="vph-mobile-pudica" to="/platform">Explore PUDICA</Link>
              <Link className="vph-mobile-briefing" to="/contact?intent=executive-briefing">Schedule Executive Briefing</Link>
            </div>
          </nav>

          <div className="vph-actions">
            
            <Link className="vph-pudica" to="/platform">Explore PUDICA</Link>
            <Link className="vph-briefing" to="/contact?intent=executive-briefing">Schedule Executive Briefing <ArrowRight size={16}/></Link>
          </div>

          <button className="vph-menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</button>
        </div>
      </div>

      

      {activeMenu === "solutions" && (
        <div id="vph-menu-solutions" className="vpm-mega-wrap">
          <SolutionsMegaMenu onClose={closeAll} />
        </div>
      )}

      {activeMenu === "services" && (
        <div id="vph-menu-services" className="vpm-mega-wrap">
          <ServicesMegaMenu onClose={closeAll} />
        </div>
      )}

      {activeMenu === "platform" && (
        <div id="vph-menu-platform" className="vpm-mega-wrap">
          <PlatformMegaMenu onClose={closeAll} />
        </div>
      )}

      {activeMenu === "frameworks" && (
        <div id="vph-menu-frameworks" className="vpm-mega-wrap">
          <FrameworksMegaMenu onClose={closeAll} />
        </div>
      )}


      {activeMenu === "resources" && (
        <div
          id="vph-menu-resources"
          className="vpm-mega-wrap"
        >
          <ResourcesMegaMenu onClose={closeAll} />
        </div>
      )}

<EnterpriseMegaMenu
        menuKey={["platform", "solutions", "services", "frameworks",
      "resources",].includes(activeMenu) ? null : activeMenu}
        onClose={closeAll}
      />
    </header>
  );
}










