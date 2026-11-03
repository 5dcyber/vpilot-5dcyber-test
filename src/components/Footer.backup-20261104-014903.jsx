import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

import { ApprovedVPilotBrand } from "../VPilotBrand.jsx";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="logo" to="/">
            <ApprovedVPilotBrand inverted />
          </Link>

          <p>
            Integrated cybersecurity operations through PUDICA,
            5D Threat Intelligence, five accountable Pilots and
            GoldenVault.
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <Link to="/company">About V Pilot</Link>
          <Link to="/company">Operating Model</Link>
          <Link to="/company">Engagement Options</Link>
          <Link to="/company">Service Assurance</Link>
          <Link to="/contact">Careers</Link>
        </div>

        <div>
          <h4>Services</h4>
          <Link to="/services">Compass Pilot</Link>
          <Link to="/services">ART Pilot</Link>
          <Link to="/services">Vigil Pilot</Link>
          <Link to="/services">Custodian Pilot</Link>
          <Link to="/services">Phoenix Pilot</Link>
        </div>

        <div>
          <h4>Solutions</h4>
          <Link to="/solutions">PUDICA</Link>
          <Link to="/solutions">Endpoint Security</Link>
          <Link to="/solutions">Vulnerability Remediation</Link>
          <Link to="/solutions">Managed Detection</Link>
          <Link to="/solutions">Cyber Recovery</Link>
        </div>

        <div>
          <h4>Connect</h4>

          <a href="mailto:enquiry@vpilot.org">
            <Mail size={15} />
            enquiry@vpilot.org
          </a>

          tel:+919442331700
            <Phone size={15} />
            +91 94423 31700
          </a>

          <p>
            <MapPin size={15} />
            Suite No 12, Pulsebay 64,
            <br />
            Opp. to Railway Station,
            <br />
            Pondicherry 605001, India
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © 2026 V Pilot Cyber Solutions LLP.
          All rights reserved.
        </span>

        <span>
          SECURE · ENABLE · OPERATE · RECOVER · THRIVE
        </span>

        <div>
          /privacy.htmlPrivacy</a>
          /terms.htmlTerms</a>
        </div>
      </div>
    </footer>
  );
}
