import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./vpilot-platform-megamenu.css";

const groups = [
  {
    title: "Platform",
    links: [
      ["PUDICA Overview", "/platform"],
      ["Platform Architecture", "/platform/architecture"],
      ["Command Center", "/platform/command-center"],
      ["Integrations", "/platform/integrations"],
    ],
  },
  {
    title: "Platform Modules",
    links: [
      ["NativeTrust Workspace", "/platform/nativetrust-workspace"],
      ["Autonomous Remediation", "/platform/autonomous-remediation"],
      ["Integrated SecOps", "/platform/integrated-security-operations"],
      ["Autonomous Resilience", "/platform/autonomous-resilience"],
      ["Application Security", "/platform/application-security-governance"],
      ["GRC & Compliance", "/platform/grc-compliance"],
    ],
  },
  {
    title: "Shared Operations",
    links: [
      ["Asset Graph", "/platform/asset-graph"],
      ["Service Operations Hub", "/platform/service-operations-hub"],
      ["Risk & Control Register", "/platform/risk-control-register"],
      ["Approval & Governance", "/platform/approval-governance"],
      ["Incident Response Center", "/platform/incident-response-center"],
      ["Evidence Vault", "/platform/evidence-vault"],
    ],
  },
];

export default function PlatformMegaMenu({ onClose }) {
  return (
    <section className="vpmm" aria-label="Platform navigation">
      <div className="vpmm__intro">
        <span>PUDICA PLATFORM</span>
        <h2>One Operational System. Connected Security Outcomes.</h2>
        <p>
          PUDICA unifies context, workflow, authority, automation,
          monitoring, recovery, compliance, and evidence.
        </p>
        <Link to="/platform" onClick={onClose}>
          Explore Platform <ArrowRight aria-hidden="true" />
        </Link>
      </div>

      <div className="vpmm__groups">
        {groups.map((group) => (
          <section key={group.title}>
            <h3>{group.title}</h3>
            {group.links.map(([label, to]) => (
              <Link key={label} to={to} onClick={onClose}>
                <span>{label}</span>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </section>
        ))}
      </div>

      <aside className="vpmm__featured">
        <div className="vpmm__orbit" aria-hidden="true">
          <img
            className="vpmm__orbit-shell"
            src="/assets/pudica-platform-orbit-shell-final.svg"
            alt=""
          />
          <span className="vpmm__orbit-core">
            <img src="/assets/pudica-emblem-final.png" alt="" />
          </span>
        </div>
        <div className="vpmm__featured-copy">
          <span>PUDICA PLATFORM</span>
          <h3>One Platform. One Trusted Operating Record.</h3>
          <p>
            Govern risk, workflows, approvals, response, recovery,
            compliance, and evidence through one operating model.
          </p>
        </div>
      </aside>
    </section>
  );
}
