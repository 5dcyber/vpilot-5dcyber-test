import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, ShieldCheck, BadgeCheck } from "lucide-react";
import { ApprovedVPilotBrand } from "../VPilotBrand.jsx";
import "./vpilot-enterprise-footer.css";

const footerGroups = [
  { title: "Platform", items: [
    ["PUDICA Platform", "/platform", true],
    ["PUDICA NativeTrust Workspace", "/platform/nativetrust-workspace"],
    ["Autonomous Remediation", "/platform/autonomous-remediation"],
    ["Integrated Security Operations", "/platform/integrated-security-operations"],
    ["Autonomous Resilience", "/platform/autonomous-resilience"],
    ["GRC & Compliance", "/platform/grc-compliance"],
    ["SecLabs & GoldenVault", "/platform/seclabs"],
  ]},
  { title: "Solutions", items: [
    ["Native Zero-Trust Workspace", "/solutions/nativetrust-workspace"],
    ["Secure Business Transformation", "/solutions/secure-business-transformation"],
    ["Enterprise Risk Management", "/solutions/enterprise-risk-management"],
    ["Incident Response & Forensics", "/solutions/incident-response-forensics"],
    ["Cyber Resilience & Recovery", "/solutions/cyber-resilience-recovery"],
    ["ISO/IEC 27001 Operational Readiness", "/solutions/iso-27001-operational-readiness"],
    ["Privacy & Data Protection", "/solutions/privacy-data-protection"],
  ]},
  { title: "Managed Services", items: [
    ["Complete 5Pilot Operations", "/services/complete-5pilot-operations", true],
    ["CISO as a Service", "/services/ciso-as-a-service"],
    ["Managed Vulnerability Remediation", "/services/managed-vulnerability-remediation"],
    ["Managed SIEM Operations", "/services/managed-siem"],
    ["Managed Identity & Endpoint Operations", "/services/managed-identity-endpoint"],
    ["Incident Readiness & Response", "/services/incident-readiness-response"],
    ["Managed Backup & Recovery", "/services/managed-backup-recovery"],
  ]},
  { title: "Company", items: [
    ["About V Pilot", "/company"],
    ["Why V Pilot", "/why-v-pilot"],
    ["Security Assurance", "/company/security-assurance", true],
    ["5Pilot Operations", "/company/5pilot-operations"],
    ["Careers", "/careers"],
    ["Contact", "/contact"],
  ]},
  { title: "Resources", items: [
    ["Insights", "/resources/insights"],
    ["Frameworks", "/frameworks"],
    ["Solution Briefs", "/resources/solution-briefs"],
    ["Technical Guides", "/resources/technical-guides"],
    ["Security Advisories", "/resources/security-advisories"],
  ]},
];

function LinkedInMark({ size = 17 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.37 3.5A2.37 2.37 0 1 1 5.37 8.24 2.37 2.37 0 0 1 5.37 3.5ZM3.32 9.72h4.1V22h-4.1V9.72Zm6.65 0h3.93v1.68h.06c.55-1.04 1.88-2.14 3.88-2.14 4.15 0 4.92 2.73 4.92 6.29V22h-4.1v-5.72c0-1.36-.03-3.12-1.9-3.12-1.91 0-2.2 1.49-2.2 3.02V22h-4.1V9.72Z" /></svg>; }
function YouTubeMark({ size = 18 }) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.13-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.37.55A3.02 3.02 0 0 0 .5 6.19 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.13 2.14c1.87.55 9.37.55 9.37.55s7.5 0 9.37-.55a3.02 3.02 0 0 0 2.13-2.14A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.81ZM9.6 15.65v-7.3L15.86 12 9.6 15.65Z" /></svg>; }

function FacebookMark({ size = 17 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.8l.42-3.2H13.5V8.75c0-.93.26-1.56 1.6-1.56h1.71V4.33c-.3-.04-1.31-.13-2.5-.13-2.47 0-4.16 1.5-4.16 4.28v2.32H7.35V14h2.8v8h3.35Z" /></svg>;
}

function XMark({ size = 16 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-6.4L6.45 22H3.34l7.25-8.29L2.94 2H9.35l4.43 5.86L18.9 2Zm-1.1 17.84h1.72L8.41 4.05H6.56L17.8 19.84Z" /></svg>;
}

function InstagramMark({ size = 17 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}

function GitHubMark({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.47.11-3.05 0 0 .98-.31 3.16 1.18A10.96 10.96 0 0 1 12 6.1c.98 0 1.95.13 2.86.38 2.18-1.49 3.15-1.18 3.15-1.18.64 1.58.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.28c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" /></svg>;
}
function FooterGroup({ group, open, onToggle }) {
  return <section className={`vpf-group ${open ? "is-open" : ""}`}>
    <button className="vpf-group-toggle" type="button" onClick={onToggle} aria-expanded={open}><span>{group.title}</span><ChevronDown size={16}/></button>
    <h3>{group.title}</h3>
    <ul>{group.items.map(([label,to,priority]) => <li key={label}><Link className={priority ? "is-priority" : ""} to={to}>{label}{priority && <ArrowRight size={12}/>}</Link></li>)}</ul>
  </section>;
}

export default function Footer() {
  const [openGroup,setOpenGroup]=useState(null);
  const currentYear=new Date().getFullYear();
  return <footer className="vpf-footer">
    <section className="vpf-conversion"><div className="vpf-shell vpf-conversion-layout"><div><span>Ready to strengthen your security operations?</span><h2>Strengthen Your Security Operations</h2><p>Discuss your security priorities, operating gaps and assurance requirements with the V Pilot team.</p><small>Managed responsibility <i/> Validated execution <i/> Continuous assurance</small></div><div className="vpf-conversion-actions"><Link className="vpf-cta primary" to="/contact">Schedule Executive Briefing <ArrowRight size={16}/></Link><Link className="vpf-cta secondary" to="/contact">Contact V Pilot</Link></div></div></section>
    <div className="vpf-accent" aria-hidden="true"/>
    <section className="vpf-primary"><div className="vpf-shell vpf-primary-layout">
      <div className="vpf-brand"><Link to="/" className="vpf-logo" aria-label="V Pilot home"><ApprovedVPilotBrand/></Link><h2>We Pilot Your Security Operations.</h2><p>V Pilot delivers accountable managed cybersecurity operations across governance, identity, endpoints, monitoring, remediation, incident response, recovery and continuous assurance.</p></div>
      <nav className="vpf-nav" aria-label="Footer">{footerGroups.map((group,index)=><FooterGroup key={group.title} group={group} open={openGroup===index} onToggle={()=>setOpenGroup(openGroup===index?null:index)}/>)}</nav>
    </div></section>
    <section className="vpf-assurance"><div className="vpf-shell vpf-assurance-layout"><article><span className="vpf-assurance-icon"><ShieldCheck size={21}/></span><div><h3>Shared Responsibility</h3><p>V Pilot operates the capabilities assigned through the applicable service agreement and Responsibility Assignment Matrix. Customers retain business ownership, executive authority, legal accountability and final risk acceptance.</p><Link to="/frameworks">View Shared Responsibility Model <ArrowRight size={13}/></Link></div></article><article><span className="vpf-assurance-icon"><BadgeCheck size={21}/></span><div><h3>Service Assurance Commitment</h3><p>Eligible verified service failures receive transparent review, corrective action and applicable extended assurance support under the service agreement.</p><Link to="/company/security-assurance">Review Our Assurance Commitment <ArrowRight size={13}/></Link></div></article></div>
      <div className="vpf-shell vpf-legal-bar"><p>&copy; {currentYear} V Pilot Cyber Solutions LLP. All rights reserved.</p><nav aria-label="Legal"><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms of Use</Link><Link to="/cookies">Cookie Settings</Link><Link to="/security-disclosure">Security Disclosure</Link><Link to="/accessibility">Accessibility</Link></nav><div className="vpf-connect">
            <span>Connect with V Pilot</span>
            <a href="https://www.facebook.com/VPilotCyberSolutions" target="_blank" rel="noopener noreferrer" aria-label="V Pilot on Facebook"><FacebookMark /></a>
            <a href="https://www.linkedin.com/company/vpilotcyber" target="_blank" rel="noopener noreferrer" aria-label="V Pilot on LinkedIn"><LinkedInMark /></a>
            <a href="https://x.com/vpilotcyber" target="_blank" rel="noopener noreferrer" aria-label="V Pilot on X"><XMark /></a>
            <a href="https://www.instagram.com/vpilotcyber" target="_blank" rel="noopener noreferrer" aria-label="V Pilot on Instagram"><InstagramMark /></a>
            <a href="https://github.com/V-Pilot-Cyber-Solutions" target="_blank" rel="noopener noreferrer" aria-label="V Pilot on GitHub"><GitHubMark /></a>
          </div></div>
    </section>
  </footer>;
}




