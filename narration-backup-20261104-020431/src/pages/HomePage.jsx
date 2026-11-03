import { Link } from "react-router-dom";
import { ApprovedShieldReactor } from "../VPilotBrand.jsx";

export default function HomePage() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="kicker">
            Integrated cybersecurity operations
          </span>

          <h1>
            From Threat Intelligence
            <br />
            to <em>Trusted Operations.</em>
          </h1>

          <p>
            V Pilot turns intelligence into real-world risk
            reduction, stronger controls and business resilience
            through PUDICA, five accountable Pilots and
            GoldenVault proving.
          </p>

          <div className="hero-actions">
            <Link className="btn primary" to="/solutions">
              Explore solutions
            </Link>

            <Link className="btn ghost" to="/services">
              Meet the five Pilots
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <ApprovedShieldReactor />
        </div>
      </div>
    </section>
  );
}
