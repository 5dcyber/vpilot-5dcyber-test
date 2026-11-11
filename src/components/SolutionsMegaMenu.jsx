import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import "./vpilot-solutions-megamenu.css";

const groups = [
  { title: "Transform Securely", to: "/solutions/secure-business-transformation", links: [["Business Transformation","/solutions/secure-business-transformation"],["NativeTrust Workspace","/solutions/nativetrust-workspace"],["Cloud Migration Security","/solutions/cloud-digital-migration"],["Identity Modernization","/solutions/identity-endpoint-modernization"]] },
  { title: "Operate Securely", to: "/solutions/integrated-security-operations", links: [["Integrated SecOps","/solutions/integrated-security-operations"],["Enterprise Risk","/solutions/enterprise-risk-management"],["Threat-Informed Risk","/solutions/threat-informed-risk-management"],["ISO 27001 Readiness","/solutions/iso-27001-operational-readiness"],["Privacy & Data Protection","/solutions/privacy-data-protection"]] },
  { title: "Respond & Recover", to: "/solutions/autonomous-incident-response", links: [["Autonomous Incident Response","/solutions/autonomous-incident-response"],["Cloud Forensics","/solutions/cloud-forensics"],["Cyber Resilience","/solutions/cyber-resilience-recovery"],["Ransomware Recovery","/solutions/ransomware-recovery"]] },
  { title: "PUDICA Solutions", to: "/solutions/nativetrust-workspace", links: [["NativeTrust Workspace","/solutions/nativetrust-workspace"],["Autonomous Remediation","/solutions/autonomous-remediation"],["Integrated SecOps","/solutions/integrated-security-operations"],["Autonomous Resilience","/solutions/autonomous-resilience"],["Application Security","/solutions/application-security-governance"],["GRC & Compliance","/solutions/grc-compliance"]] },
  { title: "Solutions by Industry", to: "/solutions/industry", links: [["Retail","/solutions/industry"],["Telecom","/solutions/industry"],["Manufacturing","/solutions/industry"],["Financial Services","/solutions/industry"],["Healthcare","/solutions/industry"],["Public Sector","/solutions/industry"]] },
  { title: "Adoption Paths", to: "/solutions/engagement-paths", links: [["Single Solution","/solutions/engagement-paths"],["Integrated Solutions","/solutions/engagement-paths"],["Complete 5Pilot Operations","/company/5pilot-operations"]] },
];

export default function SolutionsMegaMenu({ onClose }) {
  return <section className="vomm" aria-label="Solutions navigation">
    <div className="vomm__intro"><span>ENTERPRISE SECURITY SOLUTIONS</span><h2>Connected Solutions for Real Business Risk</h2><p>Protect transformation, operate continuously, govern risk, respond decisively, and restore trusted operations.</p><Link className="vomm__primary" to="/solutions" onClick={onClose}>Explore All Solutions <ArrowRight/></Link></div>
    <div className="vomm__groups">{groups.map(group=><section key={group.title}><Link className="vomm__group-title" to={group.to} onClick={onClose}>{group.title}<ChevronRight/></Link>{group.links.map(([label,to])=><Link className="vomm__item" key={`${group.title}-${label}`} to={to} onClick={onClose}><span>{label}</span><ArrowRight/></Link>)}</section>)}</div>
    <aside className="vomm__featured"><div className="vomm__orbit" aria-hidden="true"><img src="/assets/pudica-platform-orbit-shell-final.svg" alt=""/><span><img src="/assets/pudica-emblem-final.png" alt=""/></span></div><span>PUDICA SOLUTIONS</span><h3>One Platform. Connected Security Outcomes.</h3><p>Six integrated solution families share one asset model, workflow, risk register, approval engine, evidence vault, and assurance record.</p><Link className="vomm__featured-link" to="/solutions" onClick={onClose}>Explore PUDICA Solutions <ArrowRight/></Link></aside>
  </section>;
}
