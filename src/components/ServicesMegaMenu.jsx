import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./vpilot-services-megamenu.css";

const groups=[
 ["Governance & Assurance",[["CISO as a Service","/services/ciso-as-a-service"],["ISO/IEC 27001 Readiness","/services/iso-27001-certification-readiness"],["Enterprise Risk Assessment","/services/enterprise-risk-assessment"],["Privacy Readiness","/services/privacy-readiness"],["Vendor Security Assessment","/services/vendor-security-assessment"]]],
 ["Identity & Endpoint",[["Managed IAM","/services/managed-iam"],["Managed Entra & Intune","/services/managed-entra-intune"],["NativeTrust Operations","/services/managed-nativetrust"],["Zero-Trust Endpoint Operations","/services/zero-trust-endpoint-operations"],["Application & Browser Governance","/services/application-browser-governance"]]],
 ["Exposure & Remediation",[["VAPT","/services/penetration-testing"],["Vulnerability Remediation","/services/managed-vulnerability-remediation"],["Configuration Remediation","/services/configuration-remediation"],["Software & Patch Remediation","/services/software-patch-remediation"],["ARC Remediation","/services/arc-remediation"]]],
 ["Monitoring & Response",[["Managed SIEM","/services/managed-siem"],["Detection Engineering","/services/detection-engineering"],["Threat Intelligence","/services/threat-intelligence-operations"],["Incident Response","/services/incident-response"],["Digital & Cloud Forensics","/services/digital-cloud-forensics"]]],
 ["Recovery & Resilience",[["Managed Backup","/services/managed-backup"],["Restore Validation","/services/restore-validation"],["BCP/DR Exercises","/services/bcp-dr"],["Ransomware Recovery","/services/ransomware-recovery"],["Recovery Assurance","/services/recovery-assurance"]]],
];
export default function ServicesMegaMenu({onClose}){return <section className="vsmm" aria-label="Services navigation"><div className="vsmm__intro"><span>MANAGED CYBERSECURITY SERVICES</span><h2>Operate Security Continuously. Prove Every Outcome.</h2><p>Engage a focused activity, a managed domain, an Integrated Fleet, or Complete 5Pilot Operations.</p><Link to="/services" onClick={onClose}>Explore All Services <ArrowRight/></Link></div><div className="vsmm__groups">{groups.map(([title,links])=><section key={title}><h3>{title}</h3>{links.map(([label,to])=><Link to={to} key={label} onClick={onClose}>{label}<ArrowRight/></Link>)}</section>)}</div><aside className="vsmm__featured"><img
          className="vsmm__shield-orbit"
          src="/assets/vpilot-shield-orbit-premium-v2.svg"
          alt=""
          aria-hidden="true"
        /><span>5PILOT OPERATIONS</span><h3>Specialist Teams. One Integrated Operation.</h3><p>Compass governs. Custodian administers. Vigil observes. ART validates and remediates. Phoenix responds and restores.</p><Link to="/company/5pilot-operations" onClick={onClose}>Meet the 5Pilot Teams <ArrowRight/></Link></aside></section>}

