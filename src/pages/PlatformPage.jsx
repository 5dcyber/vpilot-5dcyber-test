import { Link } from "react-router-dom";
import {
  ArrowRight, Boxes, BrainCircuit, CheckCircle2, Cloud, Database,
  FileCheck2, Gauge, GitBranch, KeyRound, Layers3, LockKeyhole,
  MonitorCog, Network, Radar, RefreshCw, ServerCog, ShieldCheck,
  Sparkles, Workflow, Wrench, Zap
} from "lucide-react";
import "./vpilot-platform-premium.css";

const overviewCards = [
  ["Unified Operations", "Connect security domains, technologies, teams, and decisions through one governed operating model.", Network],
  ["Context Driven", "Use asset, configuration, dependency, threat, control, and business context for prioritization.", Database],
  ["Automation with Control", "Automate approved repeatable actions while preserving human authority for consequential decisions.", Workflow],
  ["Validation First", "Prove treatments, monitoring, rollback, and recovery through SecLabs and GoldenVault.", ShieldCheck],
  ["Recovery Aware", "Connect remediation, detection, response, backup, restoration, and business continuity.", RefreshCw],
  ["Evidence by Design", "Maintain a traceable record linking findings, risks, approvals, changes, retests, exceptions, and outcomes.", FileCheck2],
];

const modules = [
  {
    title: "NativeTrust Workspace",
    subtitle: "Unified workspace trust and assurance",
    icon: ShieldCheck,
    accent: "emerald",
    href: "/platform/nativetrust-workspace",
    items: ["Workspace inventory", "Identity and device trust", "Endpoint configuration", "Application governance", "Update assurance", "Browser governance", "Mobile protection", "Lifecycle management", "Workspace compliance"],
  },
  {
    title: "Autonomous Remediation",
    subtitle: "From finding to verified treatment",
    icon: Wrench,
    accent: "blue",
    href: "/platform/autonomous-remediation",
    items: ["Vulnerability correlation", "Configuration remediation", "Software treatment", "Patch validation", "Risk-based approval", "Controlled deployment", "Retesting", "Evidence-backed closure"],
  },
  {
    title: "Integrated Security Operations",
    subtitle: "Detection, investigation, and response",
    icon: Radar,
    accent: "violet",
    href: "/platform/integrated-security-operations",
    items: ["Telemetry coverage", "SIEM onboarding", "Detection engineering", "Threat hunting", "Investigation", "Incident orchestration", "Containment", "Evidence preservation"],
  },
  {
    title: "Autonomous Resilience",
    subtitle: "Trusted backup and recovery assurance",
    icon: Cloud,
    accent: "orange",
    href: "/platform/autonomous-resilience",
    items: ["Backup governance", "Failure management", "Recovery-point validation", "Restore testing", "Ransomware recovery", "BCP/DR exercises", "Trusted-state restoration", "Recovery evidence"],
  },
  {
    title: "Application Security Governance",
    subtitle: "Secure applications across the lifecycle",
    icon: MonitorCog,
    accent: "red",
    href: "/platform/application-security-governance",
    items: ["Application risk", "Threat modeling", "VAPT", "API security", "Dependency risk", "Remediation ownership", "Release assurance", "Runtime monitoring"],
  },
  {
    title: "GRC & Compliance",
    subtitle: "Connect risk, controls, and evidence",
    icon: FileCheck2,
    accent: "slate",
    href: "/platform/grc-compliance",
    items: ["Enterprise risk", "Policy management", "Control mapping", "ISO/IEC 27001", "Privacy readiness", "Vendor assurance", "Audit management", "Corrective action"],
  },
];

const architecture = [
  ["Customer Environment", "Users, identities, endpoints, servers, cloud, applications, networks, data, backup, recovery, and existing security technologies."],
  ["Integration Layer", "Microsoft Graph, cloud APIs, SIEM connectors, vulnerability platforms, backup, ITSM, business systems, and secure collectors."],
  ["Shared Data Layer", "PUDICA Asset ID, Asset Graph, business services, configuration context, controls, evidence, relationships, and activity history."],
  ["Intelligence Layer", "5D Threat Intelligence, risk analysis, threat relevance, control effectiveness, asset criticality, and operational prioritization."],
  ["Operations Layer", "Service Operations Hub, approvals, changes, incidents, ARC Remediation, recovery tests, SLAs, and exceptions."],
  ["Validation Layer", "SecLabs, GoldenVault, compatibility testing, rollback validation, detection testing, and recovery validation."],
  ["Application Layer", "NativeTrust, Remediation, Integrated SecOps, Resilience, Application Security, and GRC & Compliance."],
  ["Outcomes", "Reduced unresolved risk, faster coordination, stronger resilience, compliance confidence, and traceable audit evidence."],
];

const sharedServices = [
  ["Asset Graph", "One relationship model across business services, identities, devices, applications, vulnerabilities, risks, incidents, remediation, and evidence.", Network],
  ["Service Operations Hub", "Unified requests, findings, incidents, changes, remediation actions, approvals, SLAs, ownership, and activity history.", Workflow],
  ["Risk & Control Register", "Connected risks, threats, vulnerabilities, impact, controls, treatment decisions, owners, dates, and evidence.", ShieldCheck],
  ["Approval & Governance Engine", "Configurable authority levels, execution conditions, rollback criteria, and verification evidence.", KeyRound],
  ["Incident Response Center", "Shared triage, containment, investigation, recovery, communication, validation, and lessons-learned workflows.", Radar],
  ["Change Governance", "Impact analysis, approvals, pilot selection, rollback, execution monitoring, and post-change verification.", GitBranch],
  ["ARC Remediation", "Finding enrichment, risk scoring, approved treatment, controlled execution, retesting, evidence, and closure.", Wrench],
  ["Evidence Vault", "Immutable and traceable evidence linked to the relevant tenant, asset, control, decision, operation, and result.", LockKeyhole],
  ["Analytics & Reporting", "Executive dashboards, control assurance, SLA performance, remediation trends, incidents, recovery results, and audit packages.", Gauge],
];

const lifecycle = [
  ["Discover", "Acquire trusted asset, configuration, identity, security, application, and recovery context."],
  ["Assess", "Correlate the condition with threat intelligence, vulnerabilities, business impact, controls, and exceptions."],
  ["Decide", "Determine treatment, owner, priority, authority, target date, and residual-risk path."],
  ["Prove", "Validate effectiveness, compatibility, monitoring, rollback, and recovery through SecLabs and GoldenVault."],
  ["Approve", "Record accountable authority, impact conditions, execution window, rollback requirements, and evidence."],
  ["Execute", "Implement the approved change or response through the authorized technology and deployment mechanism."],
  ["Verify", "Retest the security condition, confirm service health, validate monitoring, and identify unresolved assets."],
  ["Assure", "Preserve evidence, update control effectiveness, communicate residual risk, and improve the trusted baseline."],
];

const integrationGroups = [
  ["Microsoft", ["Microsoft Entra ID", "Microsoft Intune", "Microsoft Defender", "Microsoft 365", "Microsoft Graph", "Microsoft Sentinel", "Azure"]],
  ["Vulnerability & Security", ["Tenable", "Qualys", "EDR and XDR", "Security scanners", "Configuration assessment"]],
  ["SIEM & Monitoring", ["Microsoft Sentinel", "Splunk", "IBM QRadar", "Elastic", "Supported platforms"]],
  ["Cloud & Infrastructure", ["Microsoft Azure", "AWS", "Google Cloud", "VMware", "On-premises environments"]],
  ["ITSM & Collaboration", ["ServiceNow", "Jira Service Management", "Microsoft Teams", "Email", "Webhooks"]],
  ["Business Systems", ["ERP", "HR systems", "CMDB", "Asset management", "Finance and procurement"]],
];

const responsibility = [
  ["Technology Providers", ["Identity and device platforms", "Policy enforcement", "Protection technologies", "Cloud infrastructure", "SIEM", "Vulnerability findings", "Backup platforms", "Supported APIs"]],
  ["PUDICA", ["Unified operational data model", "Asset relationships", "Risk and trust scoring", "Workflows and approvals", "Change governance", "Incident orchestration", "ARC remediation", "Evidence management", "Compliance mapping", "Reporting"]],
  ["5Pilot Operations", ["Assessment", "Administration", "Monitoring", "Triage", "Remediation oversight", "Incident coordination", "Recovery assurance", "Evidence review", "Compliance reporting", "Continual improvement"]],
  ["Customer Retains", ["Business ownership", "Asset and information ownership", "Legal and regulatory accountability", "Risk acceptance", "High-impact authority", "Licensing", "ISMS leadership", "Management review"]],
];

const trustPillars = [
  ["Tenant Isolation", "Customer records, credentials, evidence, workflows, and actions remain tenant-bound."],
  ["Least Privilege", "Read-only collection is separated from write-capable operational actions."],
  ["Human-Governed Automation", "Consequential actions require the configured approval and authority level."],
  ["Complete Audit History", "API action, decision, approval, execution, retest, exception, and outcome are recorded."],
  ["Evidence Integrity", "Evidence receives source, timestamp, hash, retention, classification, collector, and validation metadata."],
  ["Recovery Protection", "Material operations include rollback and recovery considerations."],
  ["ISO/IEC 27001 Alignment", "PUDICA supports systematic control operation and evidence but does not independently certify the customer."],
];

const roadmap = [
  ["01", "Operational Foundation", "10â€“14 weeks", ["Tenant architecture", "Connector onboarding", "Asset model", "NativeTrust inventory", "Compliance state", "Approval workflow", "Evidence Vault", "Basic reporting"]],
  ["02", "Security Operations", "10â€“14 weeks", ["Findings", "Risk register", "Incident management", "Change governance", "SLA engine", "Exceptions", "Notifications", "Collaboration integration"]],
  ["03", "Controlled Remediation", "12â€“16 weeks", ["ARC levels 1â€“3", "Remediation catalog", "Approval rules", "Pre-checks", "Controlled execution", "Retesting", "Rollback", "Evidence validation"]],
  ["04", "Unified Operations", "Scope-led", ["SIEM integration", "Backup and recovery", "Application security", "Compliance library", "Cross-module correlation", "5Pilot console", "Executive dashboards"]],
];

function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  return (
    <div className={`vpp-heading vpp-heading--${align}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function PudicaOrbit() {
  return (
    <div className="vpp-orbit" aria-hidden="true">
      <img className="vpp-orbit__shell" src="/assets/pudica-platform-orbit-shell-final.svg" alt="" />
      <span className="vpp-orbit__core">
        <img src="/assets/pudica-emblem-final.png" alt="" />
      </span>
      {['NativeTrust','Remediation','SecOps','Resilience','AppSec','GRC'].map((label, index) => (
        <span key={label} className={`vpp-orbit__label vpp-orbit__label--${index + 1}`}>{label}</span>
      ))}
    </div>
  );
}

export default function PlatformPage() {
  return (
    <div className="vpp-page" id="platform-top">
      <section className="vpp-hero">
        <div className="vpp-shell vpp-hero__grid">
          <div className="vpp-hero__copy">
            <span className="vpp-eyebrow">PUDICA INTEGRATED CYBERSECURITY OPERATIONS</span>
            <h1>The Operational Control Plane for <em>Integrated Security Operations</em></h1>
            <strong>From Context to Continuous Assurance.</strong>
            <p>PUDICA connects security intelligence, trusted-state context, risk, workflows, approvals, automation, monitoring, response, recovery, compliance, and evidence through one governed operational platform.</p>
            <p>It integrates with the organizationâ€™s existing identity, endpoint, cloud, vulnerability, SIEM, application, backup, ITSM, and business technologies, turning security conditions into verified operational outcomes.</p>
            <div className="vpp-actions">
              <a className="vpp-btn vpp-btn--primary" href="#platform-capabilities">Explore Platform Capabilities <ArrowRight /></a>
              <a className="vpp-btn vpp-btn--glass" href="#command-center">Watch Platform Overview</a>
            </div>
            <div className="vpp-five-d" aria-label="5D operating lifecycle">
              {['ANTICIPATE','OBSERVE','RESPOND','RESTORE','PROVE'].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="vpp-hero__visual">
            <PudicaOrbit />
            <div className="vpp-hero__visual-copy">
              <span>PUDICA PLATFORM</span>
              <strong>One Platform. One Trusted Operating Record.</strong>
            </div>
          </div>
        </div>
        <div className="vpp-shell vpp-proof-strip">
          {['Unified Operations','Production-Relevant Validation','Human-Governed Automation','Recovery-Ready Operations','Audit-Ready Evidence'].map((item) => <span key={item}><CheckCircle2 />{item}</span>)}
        </div>
      </section>

      <section className="vpp-section vpp-overview">
        <div className="vpp-shell">
          <SectionHeading eyebrow="PLATFORM OVERVIEW" title="Turn Security Operations into a Connected, Measurable System" copy="PUDICA creates a shared operating model across security products, infrastructure teams, service desks, governance functions, recovery systems, and external providers. Common identity, authority, workflow, evidence, and accountability are preserved from detection through verified closure." />
          <div className="vpp-grid vpp-grid--3">
            {overviewCards.map(([title, text, Icon]) => <article className="vpp-card vpp-card--overview" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="vpp-section vpp-modules" id="platform-capabilities">
        <div className="vpp-shell">
          <SectionHeading eyebrow="CONNECTED PLATFORM MODULES" title="Specialized Capabilities. One Shared Operating System." copy="Each PUDICA module operates a defined security domain. Shared platform services govern records, risk, workflow, approvals, changes, incidents, evidence, and reporting across every module." align="center" />
          <div className="vpp-grid vpp-grid--3">
            {modules.map(({title, subtitle, icon: Icon, accent, href, items}) => (
              <article className={`vpp-card vpp-module vpp-module--${accent}`} key={title}>
                <div className="vpp-module__icon"><Icon /></div><h3>{title}</h3><strong>{subtitle}</strong>
                <ul>{items.map(item => <li key={item}><CheckCircle2 />{item}</li>)}</ul>
                <Link to={href}>Explore capability <ArrowRight /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vpp-section vpp-architecture" id="platform-architecture">
        <div className="vpp-shell">
          <SectionHeading eyebrow="PLATFORM ARCHITECTURE" title="An Integrated Ecosystem for Continuous Security" copy="PUDICA orchestrates the security lifecycle without duplicating the customerâ€™s existing technologies. It provides context, governance, automation, validation, reporting, and assurance across the existing environment." />
          <div className="vpp-architecture__flow">
            {architecture.map(([title, text], index) => <article key={title} className={`vpp-architecture__layer vpp-architecture__layer--${index + 1}`}><span>{String(index + 1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="vpp-section vpp-fabric" id="platform-shared-operations">
        <div className="vpp-shell">
          <SectionHeading eyebrow="SHARED OPERATIONS FABRIC" title="Common Services for Every Security Domain" copy="PUDICA modules do not maintain separate asset, ticket, risk, approval, incident, change, or evidence systems. Every module consumes the same shared services and references common identifiers." align="center" />
          <div className="vpp-grid vpp-grid--3">
            {sharedServices.map(([title,text,Icon]) => <article className="vpp-card vpp-fabric-card" key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="vpp-section vpp-lifecycle">
        <div className="vpp-shell">
          <SectionHeading eyebrow="HOW PUDICA WORKS" title="From Trusted Context to Verified Assurance" copy="One governed workflow connects discovery, analysis, authority, proving, execution, verification, and evidence." />
          <div className="vpp-lifecycle__track">
            {lifecycle.map(([title,text], index) => <article key={title}><span>{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="vpp-section vpp-proving">
        <div className="vpp-shell">
          <SectionHeading eyebrow="INDEPENDENT PROVING AND VALIDATION" title="Prove Before You Operate" copy="SecLabs defines and governs the independent proving operation. GoldenVault provides the dynamic production-relevant workspace required to validate a specific authorized security condition." />
          <div className="vpp-proving__grid">
            <article><div className="vpp-proving__icon"><ShieldCheck /></div><span>SECLABS</span><h3>Independent Security Proving</h3><p>Defines test scope, acceptance criteria, security validation, compatibility, monitoring, rollback, recovery, and evidence requirements.</p></article>
            <div className="vpp-proving__plus">+</div>
            <article><div className="vpp-proving__icon"><Boxes /></div><span>GOLDENVAULT</span><h3>Dynamic Validation Workspace</h3><p>Provides representative identities, endpoints, servers, applications, policies, telemetry, recovery paths, and reusable validated evidence.</p></article>
          </div>
          <div className="vpp-proving__flow">{['Acquire context','Build topology','Reproduce condition','Test treatment','Capture telemetry','Exercise response','Validate recovery','Produce evidence','Authorize action'].map(item => <span key={item}>{item}</span>)}</div>
          <Link className="vpp-btn vpp-btn--primary" to="/platform/seclabs">Explore SecLabs & GoldenVault <ArrowRight /></Link>
        </div>
      </section>

      <section className="vpp-section vpp-integrations" id="platform-integrations">
        <div className="vpp-shell">
          <SectionHeading eyebrow="OPEN INTEGRATION ARCHITECTURE" title="Works with Your Existing Security Ecosystem" copy="PUDICA integrates with existing customer technologies rather than creating unnecessary replacement. Connectors use least privilege, tenant-specific consent, separated read and write permissions, action logging, and revocation support." align="center" />
          <div className="vpp-grid vpp-grid--3">
            {integrationGroups.map(([title,items]) => <article className="vpp-card vpp-integration" key={title}><Cloud/><h3>{title}</h3><div>{items.map(item => <span key={item}>{item}</span>)}</div></article>)}
          </div>
          <Link className="vpp-text-link" to="/platform/integrations">View all integrations <ArrowRight /></Link>
        </div>
      </section>

      <section className="vpp-section vpp-command" id="command-center">
        <div className="vpp-shell vpp-command__grid">
          <div>
            <SectionHeading eyebrow="PUDICA COMMAND CENTER" title="See Risk. Drive Action. Prove Results." copy="Role-based executive, security, operational, risk, and assurance views connect the full security lifecycle through one governed operating record." />
            <ul className="vpp-command__list">{['Pending approvals and failed deployments','Critical risks and overdue remediation','Open incidents and recovery actions','Control-assurance and evidence completeness','Service levels, exceptions, and trusted-state reporting'].map(item => <li key={item}><CheckCircle2/>{item}</li>)}</ul>
            <Link className="vpp-btn vpp-btn--light" to="/platform/command-center">Explore the Command Center <ArrowRight /></Link>
          </div>
          <div className="vpp-dashboard" aria-label="Conceptual PUDICA command center">
            <div className="vpp-dashboard__top"><span>PUDICA COMMAND CENTER</span><span>Operational assurance</span></div>
            <div className="vpp-dashboard__metrics">{[['Managed assets','12,480'],['Critical risks','12'],['Open incidents','3'],['Remediation SLA','96%']].map(([label,value]) => <article key={label}><span>{label}</span><strong>{value}</strong></article>)}</div>
            <div className="vpp-dashboard__body"><div className="vpp-chart"><span/><span/><span/><span/><span/><span/></div><div className="vpp-donut"><strong>94%</strong><span>Control assurance</span></div></div>
          </div>
        </div>
      </section>

      <section className="vpp-section vpp-responsibility">
        <div className="vpp-shell">
          <SectionHeading eyebrow="HUMAN AND PLATFORM RESPONSIBILITY" title="One Platform. Clear Responsibility." copy="Technology, platform services, specialist operations, and customer authority remain distinct and contractually governable." align="center" />
          <div className="vpp-grid vpp-grid--4">
            {responsibility.map(([title,items]) => <article className="vpp-card vpp-responsibility-card" key={title}><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}
          </div>
        </div>
      </section>

      <section className="vpp-section vpp-trust">
        <div className="vpp-shell">
          <SectionHeading eyebrow="PLATFORM TRUST" title="Designed for Governed Enterprise Operations" copy="Trust is built through technical boundaries, accountable authority, complete records, recovery safeguards, and evidence integrity." />
          <div className="vpp-grid vpp-grid--3">{trustPillars.map(([title,text]) => <article className="vpp-trust-card" key={title}><LockKeyhole/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="vpp-section vpp-roadmap">
        <div className="vpp-shell">
          <SectionHeading eyebrow="IMPLEMENTATION APPROACH" title="Start with Visibility. Mature toward Integrated Operations." copy="Planning ranges depend on customer architecture, connector readiness, data quality, authority, licensing, and integration complexity." />
          <div className="vpp-roadmap__grid">{roadmap.map(([number,title,time,items]) => <article key={number}><span>{number}</span><small>{time}</small><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section className="vpp-final">
        <div className="vpp-shell vpp-final__grid">
          <div><span>READY TO UNIFY YOUR SECURITY OPERATIONS?</span><h2>Build a More Secure and Measurable Operating Model</h2><p>Connect the existing environment, specialist teams, workflows, validation, automation, response, recovery, and evidence through one integrated security-operations platform.</p></div>
          <div className="vpp-actions"><Link className="vpp-btn vpp-btn--primary" to="/contact">Schedule Executive Briefing <ArrowRight /></Link><Link className="vpp-btn vpp-btn--glass" to="/contact">Request Platform Demonstration</Link></div>
        </div>
        <div className="vpp-shell vpp-final__proof">{['Framework driven','Production-relevant validation','Human-governed automation','Recovery-aware operations','Evidence by design'].map(item => <span key={item}><Sparkles/>{item}</span>)}</div>
      </section>
    </div>
  );
}

