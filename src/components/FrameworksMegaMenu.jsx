import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Compass } from "lucide-react";
import "./vpilot-frameworks-megamenu.css";

const groups = [
  {
    title: "Operating Frameworks",
    to: "/frameworks",
    links: [
      ["ProdSecOps", "/frameworks/prodsecops"],
      ["ProdSecApps", "/frameworks/prodsecapps"],
      ["Framework Ecosystem", "/frameworks"],
    ],
  },
  {
    title: "Intelligence & Proving",
    to: "/frameworks/5d-threat-intelligence",
    links: [
      ["5D Threat Intelligence", "/frameworks/5d-threat-intelligence"],
      ["SecLabs", "/frameworks/seclabs"],
      ["GoldenVault", "/frameworks/goldenvault"],
      ["Validation Lifecycle", "/frameworks/validation-lifecycle"],
    ],
  },
  {
    title: "Governance & Assurance",
    to: "/frameworks/shared-responsibility",
    links: [
      ["Shared Responsibility", "/frameworks/shared-responsibility"],
      ["Authority Model", "/frameworks/authority-model"],
      ["Evidence by Design", "/frameworks/evidence-by-design"],
      ["Continual Improvement", "/frameworks/continual-improvement"],
    ],
  },
  {
    title: "Guidance",
    to: "/frameworks/resources",
    links: [
      ["Framework Guides", "/frameworks/resources"],
      ["Implementation Guides", "/frameworks/resources"],
      ["Research Notes", "/frameworks/resources"],
    ],
  },
  {
    title: "Technical Resources",
    to: "/frameworks/resources",
    links: [
      ["Reference Architectures", "/frameworks/resources"],
      ["Control Mappings", "/frameworks/resources"],
      ["Technical Documentation", "/frameworks/resources"],
    ],
  },
  {
    title: "Adoption",
    to: "/frameworks/adoption",
    links: [
      ["Framework Assessment", "/contact"],
      ["Operating-Model Design", "/contact"],
      ["Executive Briefing", "/contact"],
    ],
  },
];

export default function FrameworksMegaMenu({ onClose }) {
  return (
    <section className="vfmm" aria-label="Frameworks navigation">
      <div className="vfmm__intro">
        <span>V PILOT FRAMEWORKS</span>
        <h2>Structure Security Operations. Prove Every Outcome.</h2>
        <p>Apply repeatable frameworks for threat-informed analysis, independent validation, governed execution, trusted recovery, and continuous assurance.</p>
        <Link className="vfmm__primary" to="/frameworks" onClick={onClose}>
          Explore Frameworks <ArrowRight />
        </Link>
      </div>

      <div className="vfmm__groups">
        {groups.map((group) => (
          <section key={group.title}>
            <Link className="vfmm__group-title" to={group.to} onClick={onClose}>
              {group.title}<ChevronRight />
            </Link>
            {group.links.map(([label, to]) => (
              <Link className="vfmm__item" key={`${group.title}-${label}`} to={to} onClick={onClose}>
                <span>{label}</span><ArrowRight />
              </Link>
            ))}
          </section>
        ))}
      </div>

      <aside className="vfmm__featured">
        <div className="vfmm-approved-compass" aria-hidden="true">
          <img
            src="/assets/vpilot-approved-framework-compass.svg"
            alt=""
          />
          <span className="vfmm-approved-compass__protect">PROTECT</span>
          <span className="vfmm-approved-compass__operate">OPERATE</span>
        </div>
        <span>PRODSECOPS FRAMEWORK</span>
        <h3>Protect What Runs the Business</h3>
        <p>Connect business context, trusted state, threat intelligence, proving, authority, controlled execution, recovery, and assurance.</p>
        <Link className="vfmm__featured-link" to="/frameworks/prodsecops" onClick={onClose}>
          Explore ProdSecOps <ArrowRight />
        </Link>
      </aside>
    </section>
  );
}
