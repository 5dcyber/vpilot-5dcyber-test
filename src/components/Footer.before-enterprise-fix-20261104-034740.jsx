import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { ApprovedVPilotBrand } from "../VPilotBrand.jsx";

function XSocialIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M18.244 2H21.552L14.325 10.26L22.827 22H16.17L10.956 15.183L4.99 22H1.68L9.232 13.368L1.077 2H7.903L12.616 8.231L18.244 2ZM17.083 19.932H18.916L6.907 3.96H4.94L17.083 19.932Z"
        fill="currentColor"
      />
    </svg>
  );
}

const socialLinks = [
  {
    name: "X",
    href: "#",
    icon: <XSocialIcon size={18} />,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: <Linkedin size={18} aria-hidden="true" />,
  },
  {
    name: "Facebook",
    href: "#",
    icon: <Facebook size={18} aria-hidden="true" />,
  },
  {
    name: "Instagram",
    href: "#",
    icon: <Instagram size={18} aria-hidden="true" />,
  },
];

export default function Footer() {
  const handlePlaceholderSocial = (event) => {
    if (event.currentTarget.getAttribute("href") === "#") {
      event.preventDefault();
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link
            className="footer-logo-link"
            to="/"
            aria-label="V Pilot home"
          >
            <ApprovedVPilotBrand inverted />
          </Link>

          <p>
            Integrated cybersecurity operations through PUDICA,
            5D Threat Intelligence, five accountable Pilots and
            GoldenVault.
          </p>

          <div className="footer-brand-statement">
            <span>SECURE</span>
            <i />
            <span>ENABLE</span>
            <i />
            <span>OPERATE</span>
            <i />
            <span>RECOVER</span>
            <i />
            <span>THRIVE</span>
          </div>
        </div>

        <div className="footer-column">
          <h4>Company</h4>

          <Link to="/company#overview">
            About V Pilot
          </Link>

          <Link to="/company#model">
            Operating Model
          </Link>

          <Link to="/company#engagement">
            Engagement Options
          </Link>

          <Link to="/company#assurance">
            Service Assurance
          </Link>

          <Link to="/contact#careers">
            Careers
          </Link>
        </div>

        <div className="footer-column">
          <h4>Services</h4>

          <Link to="/services#compass">
            Compass Pilot
          </Link>

          <Link to="/services#art">
            ART Pilot
          </Link>

          <Link to="/services#vigil">
            Vigil Pilot
          </Link>

          <Link to="/services#custodian">
            Custodian Pilot
          </Link>

          <Link to="/services#phoenix">
            Phoenix Pilot
          </Link>
        </div>

        <div className="footer-column">
          <h4>Solutions</h4>

          <Link to="/solutions#endpoint">
            Endpoint Security
          </Link>

          <Link to="/solutions#remediation">
            Vulnerability Remediation
          </Link>

          <Link to="/solutions#mdr">
            Managed Detection
          </Link>

          <Link to="/solutions#recovery">
            Cyber Recovery
          </Link>

          <Link to="/solutions#isms">
            Managed ISMS
          </Link>
        </div>

        <div className="footer-column footer-connect">
          <h4>Connect</h4>

          <a
            className="footer-contact-link"
            href="mailto:enquiry@vpilot.org"
          >
            <Mail size={17} aria-hidden="true" />

            <span>
              enquiry@vpilot.org
            </span>
          </a>

          tel:+919442331700
            <Phone size={17} aria-hidden="true" />

            <span>
              +91 94423 31700
            </span>
          </a>

          <div className="footer-address">
            <MapPin size={17} aria-hidden="true" />

            <address>
              Suite No 12, Pulsebay 64
              <br />
              Opp. to Railway Station
              <br />
              Subbiah Salai
              <br />
              Pondicherry 605001, India
            </address>
          </div>

          <div
            className="footer-social"
            aria-label="V Pilot social media"
          >
            {socialLinks.map((social) => (
              {social.href}
                {social.icon}
              </a>
            ))}
          </div>

          <span className="social-coming-soon">
            Follow V Pilot
          </span>
        </div>
      </div>

      <div className="footer-legal">
        <div className="container footer-bottom">
          <span>
            © 2026 V Pilot Cyber Solutions LLP.
            All rights reserved.
          </span>

          <span className="footer-operating-line">
            Integrated Cybersecurity Operations.
            Proven Before Production.
          </span>

          <div className="footer-legal-links">
            /privacy.html
              Privacy
            </a>

            /terms.html
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
