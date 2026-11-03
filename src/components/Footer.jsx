import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { ApprovedVPilotBrand } from "../VPilotBrand.jsx";

function SocialIcon({ name }) {
  const common = {
    "aria-hidden": "true",
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    focusable: "false",
  };

  if (name === "X") {
    return <svg {...common}><path d="M18.244 2H21.552L14.325 10.26L22.827 22H16.17L10.956 15.183L4.99 22H1.68L9.232 13.368L1.077 2H7.903L12.616 8.231L18.244 2ZM17.083 19.932H18.916L6.907 3.96H4.94L17.083 19.932Z" fill="currentColor" /></svg>;
  }

  if (name === "LinkedIn") {
    return <svg {...common}><path d="M6.5 8.2H3.2V21H6.5V8.2ZM4.85 3A1.95 1.95 0 1 0 4.85 6.9A1.95 1.95 0 1 0 4.85 3ZM10 8.2H13.2V9.95H13.25C13.7 9.1 14.8 7.8 17.15 7.8C21.25 7.8 22 10.5 22 14V21H18.7V14.8C18.7 13.3 18.65 11.35 16.6 11.35C14.5 11.35 14.2 13 14.2 14.7V21H10V8.2Z" fill="currentColor" /></svg>;
  }

  if (name === "Facebook") {
    return <svg {...common}><path d="M13.7 21V13.2H16.3L16.7 10.15H13.7V8.2C13.7 7.3 13.95 6.7 15.2 6.7H16.8V4C16.05 3.9 15.3 3.85 14.55 3.85C12.3 3.85 10.75 5.25 10.75 7.75V10.15H8.2V13.2H10.75V21H13.7Z" fill="currentColor" /></svg>;
  }

  return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" /><circle cx="17.4" cy="6.7" r="1.15" fill="currentColor" /></svg>;
}

const socialLinks = [
  {
    name: "X",
    href: "https://x.com/vpilotcyber",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/vpilotcyber",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/VPilotCyberSolutions",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/vpilotcyber",
  },
];

export default function Footer() {
  const stopPlaceholder = (event) => event.preventDefault();

  return (
    <footer className="site-footer premium-enterprise-footer">
      <div className="container footer-grid premium-footer-grid">
        <div className="footer-brand premium-footer-brand">
          <Link className="footer-logo-link" to="/" aria-label="V Pilot home">
            <ApprovedVPilotBrand inverted />
          </Link>
          <p>
            Integrated cybersecurity operations that connect threat intelligence,
            accountable execution, production-safe validation and trusted recovery.
          </p>
          <div className="footer-brand-statement" aria-label="V Pilot operating promise">
            <span>ANTICIPATE</span><i /><span>OBSERVE</span><i /><span>RESPOND</span><i /><span>RESTORE</span><i /><span>PROVE</span>
          </div>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <Link to="/company#overview">About V Pilot</Link>
          <Link to="/company#why">Why V Pilot</Link>
          <Link to="/company#model">Operating Architecture</Link>
          <Link to="/company#engagement">Engagement Options</Link>
          <Link to="/company#assurance">Service Assurance</Link>
        </div>

        <div className="footer-column">
          <h4>Security Operations</h4>
          <Link to="/services#compass">CISO, GRC &amp; ISMS Operations</Link>
          <Link to="/services#art">Exposure &amp; Remediation Operations</Link>
          <Link to="/services#vigil">Managed SIEM &amp; Detection</Link>
          <Link to="/services#custodian">Identity, Endpoint &amp; Cloud Administration</Link>
          <Link to="/services#phoenix">Incident Response &amp; Cyber Recovery</Link>
        </div>

        <div className="footer-column">
          <h4>5Pilot Ops Team</h4>
          <Link to="/services#compass">Compass Pilot</Link>
          <Link to="/services#art">ART Pilot</Link>
          <Link to="/services#vigil">Vigil Pilot</Link>
          <Link to="/services#custodian">Custodian Pilot</Link>
          <Link to="/services#phoenix">Phoenix Pilot</Link>
        </div>

        <div className="footer-column">
          <h4>Integrated Model</h4>
          <Link to="/solutions">PUDICA</Link>
          <Link to="/insights#frameworks">5D Threat Intelligence</Link>
          <Link to="/solutions#recovery">GoldenVault</Link>
          <Link to="/insights#frameworks">ProdSecOps</Link>
          <Link to="/services#complete">Complete 5Pilot Operations</Link>
        </div>

        <div className="footer-column footer-connect">
          <h4>Connect</h4>
          <a className="footer-contact-link" href="mailto:enquiry@vpilot.org"><Mail size={17} aria-hidden="true" /><span>enquiry@vpilot.org</span></a>
          <a className="footer-contact-link" href="tel:+919442331700"><Phone size={17} aria-hidden="true" /><span>+91 94423 31700</span></a>
          <div className="footer-address"><MapPin size={17} aria-hidden="true" /><address>Suite No 12, Pulsebay 64<br />Opp. to Railway Station<br />Subbiah Salai<br />Pondicherry 605001, India</address></div>
          <div className="footer-social" aria-label="V Pilot social media accounts">
            {socialLinks.map((social) => (
              <a key={social.name} className="footer-social-link" href={social.href} aria-label={`Follow V Pilot on ${social.name}`} title={`Follow V Pilot on ${social.name}`}
                target="_blank"
                rel="noopener noreferrer">
                <span className="footer-social-icon"><SocialIcon name={social.name} /></span>
              </a>
            ))}
          </div>
          <span className="social-coming-soon">Follow V Pilot</span>
        </div>
      </div>

      <div className="footer-legal">
        <div className="container footer-bottom">
          <span>Â© 2026 V Pilot Cyber Solutions LLP. All rights reserved.</span>
          <span className="footer-operating-line">Integrated Cybersecurity Operations. Proven Before Production.</span>
          <div className="footer-legal-links"><a href="/privacy.html">Privacy</a><a href="/terms.html">Terms</a></div>
        </div>
      </div>
    </footer>
  );
}

