import { Link } from "react-router-dom";
import { BrainCircuit as ProofBrainIcon, FileText as ProofFileIcon, Settings as ProofSettingsIcon } from "lucide-react";
import {
  ArrowRight, BrainCircuit,
  BadgeCheck,
  Building2,
  CheckCircle2,
  CloudCog,
  DatabaseBackup,
  Eye,
  FileCheck2, FileText,
  FlaskConical,
  Gauge,
  KeyRound,
  Layers3, Settings,
  Network,
  Radar,
  RotateCcw,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import "./vpilot-home-premium.css";
import "./vpilot-pilot-background-hero.css";
const proof = [
  [ProofSettingsIcon, "Managed Shared Responsibility"],
  [ShieldCheck, "Production-Relevant Validation"],
  [ProofBrainIcon, "Human-Governed Automation"],
  [DatabaseBackup, "Recovery-Protected Change"],
  [ProofFileIcon, "Evidence by Design"],
];

const gaps = [
  [Network, "Fragmented ownership", "Vulnerability, SOC, identity, cloud, endpoint, risk and recovery teams make decisions using different context and priorities."],
  [FileCheck2, FileText, "Findings without verified closure", "Testing identifies weaknesses, but remediation design, implementation, retesting and evidence remain disconnected."],
  [Radar, "Threat intelligence used too narrowly", "Threat intelligence enriches alerts but does not consistently influence hardening, incident playbooks and recovery tests."],
  [ServerCog, "Security change without confidence", "Critical patches and control changes are delayed because application, service and production impacts are uncertain."],
  [DatabaseBackup, "Recovery without proof", "Successful backup jobs do not demonstrate that identities, applications and business services can be restored securely."],
  [BadgeCheck, "Compliance without operational evidence", "Policies may exist, but leaders cannot always demonstrate that controls are authorized, functioning and continually improved."],
];

const operations = [
  [ShieldCheck, "Govern", "Strategy, risk, policy and decision authority"],
  [ServerCog, "Administer", "Identity, endpoints, cloud and configuration"],
  [Radar, "Anticipate", "Threat intelligence, priority and hardening"],
  [Eye, "Observe", "Telemetry, detections and monitoring"],
  [Zap, "Respond", "Containment, investigation and corrective action"],
  [DatabaseBackup, "Restore", "Backup, recovery and continuity"],
  [CheckCircle2, "Assure", "Evidence, reporting and continual improvement"],
];

const architecture = [
  [Building2, "V PILOT", "The accountable managed-service provider"],
  [Users, "5PILOT OPERATIONS", "The specialist delivery teams"],
  [Workflow, "PRODSECOPS / PRODSECAPPS", "Infrastructure and application security frameworks"],
  [Layers3, Settings, "PUDICA", "The orchestration, automation and evidence platform"],
  [FlaskConical, "SECLABS + GOLDENVAULT", "Independent proving and dynamic validation workspace"],
];

const dimensions = [
  [Radar, "Anticipate", "What can be reduced before exploitation?", "Vulnerability priorities, attack paths, hardening and preventive controls."],
  [Eye, "Observe", "Can the condition be detected and measured?", "Telemetry requirements, SIEM profiles, detection logic and triage criteria."],
  [Zap, "Respond", "What action is required if the condition occurs?", "Classification, containment, evidence and escalation workflows."],
  [DatabaseBackup, "Restore", "Can trusted business operations be restored?", "Backup requirements, restoration sequence, BCP/DR and recovery criteria."],
  [FileCheck2, FileText, "Prove", "Can management verify the operation and residual risk?", "Authorization, validation evidence, control assurance and residual-risk decisions."],
];

const lifecycle = [
  "Establish Context",
  "Acquire Trusted State",
  "Analyze 5D Risk",
  "Prove in SecLabs",
  "Authorize Treatment",
  "Execute Domain Operation",
  "Observe and Recover",
  "Assure and Improve",
];

const pilots = [
  [Wrench, "ART Pilot", "Exposure Validation, Remediation & Threat Response", "VAPT, exploitability validation, remediation engineering, compatibility testing and verified closure.", "Verified risk reduction"],
  [Eye, "Vigil Pilot", "SIEM Monitoring & Detection Operations", "Telemetry onboarding, detection engineering, monitoring, triage, hunting, investigation and escalation.", "Continuous, accountable visibility"],
  [Gauge, "Compass Pilot", "CISO, ERM, GRC & Managed ISMS", "Security leadership, enterprise risk, ISO/IEC 27001 readiness, privacy, policy governance and reporting.", "Governed decisions and management assurance"],
  [KeyRound, "Custodian Pilot", "Identity, Endpoint, Server & Intune Operations", "Entra ID, Active Directory, privileged access, Intune, endpoint compliance and device governance.", "Trusted identities, devices and configurations"],
  [DatabaseBackup, "Phoenix Pilot", "Incident, Forensics, Backup & Recovery", "Incident readiness, evidence preservation, forensics, backup monitoring, restoration and resilience exercises.", "Preserved evidence and trusted restoration"],
];

const packages = [
  ["Single Pilot", "One specialist team for a defined capability, with clear scope, responsibilities, service levels, reporting and evidence.", "Choose a Pilot"],
  ["Integrated Fleet", "Two or more Pilot teams coordinated around one business risk, shared context and consolidated reporting.", "Design Your Fleet"],
  ["Complete 5Pilot Operations", "All five teams operating as one managed Virtual Security Operations function for contracted day-to-day capabilities.", "Explore Complete 5Pilot"],
];

const why = [
  ["Operations, not reports", "Pursue findings through validated treatment and evidenced closure."],
  ["Production-relevant proving", "Test compatibility, observability, rollback and recovery before broad production change."],
  ["Threat intelligence across the lifecycle", "Use intelligence for prevention, detection, response, recovery and assurance."],
  ["Human-governed automation", "Automate within defined authority, safety, monitoring and exception boundaries."],
  ["Recovery-protected change", "Connect remediation to rollback, backup, restoration and business continuity."],
  ["Evidence by design", "Preserve requests, approvals, tests, deployments, results, exceptions and residual risk."],
  ["Flexible adoption", "Begin with one Pilot and mature toward an integrated managed operating capability."],
];

function SectionHead({ eyebrow, title, lead, centered = false }) {
  return (
    <div className={`vpm-head${centered ? " is-centered" : ""}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {lead && <p>{lead}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="vpm-home">
      <section className="vpm-hero" id="top">
        <div className="vpm-mesh" aria-hidden="true" />
        <div className="container vpm-hero-grid">
          <div className="vpm-hero-copy">
            <span className="vpm-eyebrow">Integrated Managed Cybersecurity Operations</span>
            <h1>From Threat Intelligence to Verified <em>Security Outcomes</em></h1>
            <p>V Pilot works as an extension of your internal security organization, connecting governance, identity, endpoints, cloud, monitoring, remediation, incident response, forensics, backup and recovery through one accountable operating model.</p>
            <p>PUDICA, 5D Threat Intelligence, SecLabs and GoldenVault help turn security findings into validated treatments, stronger detections, governed response, trusted recovery and audit-ready evidence.</p>
            <div className="vpm-actions">
              <Link className="vpm-btn primary" to="/contact">Schedule Executive Briefing <ArrowRight size={17} /></Link>
              <Link className="vpm-btn secondary" to="/solutions">Explore PUDICA <ArrowRight size={17} /></Link>
            </div>
          </div>
          
        </div>
        <div className="container vpm-proof-strip">
          {proof.map(([Icon, label]) => <div key={label}><Icon size={25} /><span>{label}</span></div>)}
        </div>
      </section>

      <section className="vpm-section vpm-service">
        <div className="container vpm-service-grid">
          <div>
            <SectionHead eyebrow="What V Pilot Operates" title="Managed Security Operations That Continue Through the Outcome" />
            <p>V Pilot provides managed cybersecurity operations across enterprise risk, identity, privileged access, endpoints, servers, cloud, SIEM monitoring, vulnerability remediation, incident response, digital forensics, backup and cyber recovery.</p>
            <p>Depending on the engagement, V Pilot can augment an internal team, operate a defined capability, coordinate multiple specialist teams or manage the contracted day-to-day security-operations function.</p>
            <blockquote>One operating partner. Five specialist Pilot teams. One accountable path from risk identification to verified outcome.</blockquote>
          </div>
          <div>
            <span className="vpm-label">Engagement Models</span>
            <div className="vpm-package-mini">
              {packages.map(([title, text, cta], index) => (
                <article key={title} className={index === 2 ? "featured" : ""}>
                  {index === 0 ? <Users /> : index === 1 ? <Network /> : <Layers3 />}
                  <h3>{title}</h3><p>{text}</p><Link to="/services">{cta} <ArrowRight size={14}/></Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="vpm-section vpm-soft">
        <div className="container">
          <SectionHead eyebrow="The Operating Gap" title="Security investment is growing. Operational fragmentation is growing with it." lead="Organizations have deployed security tools, but the lifecycle remains divided across teams, suppliers, approvals and evidence records." />
          <div className="vpm-gap-grid">
            {gaps.map(([Icon, title, text]) => <article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="vpm-band">The challenge is not a lack of security tools. The challenge is the absence of one connected security-operations lifecycle.</div>
        </div>
      </section>

      <section className="vpm-section">
        <div className="container">
          <SectionHead eyebrow="The V Pilot Operating Model" title="Govern. Administer. Anticipate. Observe. Respond. Restore. Assure." lead="V Pilot converts fragmented security work into one accountable operating capability." />
          <div className="vpm-operation-flow">
            {operations.map(([Icon, title, text], index) => <article key={title}><div><Icon/></div><h3>{title}</h3><p>{text}</p>{index < operations.length - 1 && <ArrowRight className="vpm-flow-arrow"/>}</article>)}
          </div>
        </div>
      </section>

      <section className="vpm-section vpm-architecture">
        <div className="container">
          <SectionHead eyebrow="Enterprise Service Architecture" title="One Enterprise Architecture. Distinct Responsibilities." lead="From accountable service delivery to frameworks, orchestration and independent proving." />
          <div className="vpm-architecture-grid">
            {architecture.map(([Icon, title, text]) => <article key={title}><Icon/><b>{title}</b><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="vpm-section vpm-dark">
        <div className="container">
          <SectionHead eyebrow="5D Threat Intelligence" title="Threat Intelligence Must Guide the Entire Security Lifecycle" lead="V Pilot applies threat intelligence before, during and after an attack to guide prevention, detection, containment, recovery and assurance." />
          <div className="vpm-dimension-grid">
            {dimensions.map(([Icon, title, question, text], index) => <article key={title}><span>0{index + 1}</span><Icon/><h3>{title}</h3><b>{question}</b><p>{text}</p></article>)}
          </div>
          <div className="vpm-dark-band">Threat information becomes operational intelligence when the information changes what the enterprise prevents, detects, contains, restores and proves.</div>
        </div>
      </section>

      <section className="vpm-section">
        <div className="container">
          <SectionHead eyebrow="ProdSecOps" title="The Modern Infrastructure Security Operations Framework" lead="ProdSecOps translates threat-informed risk decisions into repeatable infrastructure-security operations through production context, trusted state, five-dimensional analysis, proving, authorization, controlled execution, recovery and assurance." />
          <div className="vpm-lifecycle">
            {lifecycle.map((step, index) => <article key={step}><span>{String(index + 1).padStart(2,"0")}</span><b>{step}</b></article>)}
          </div>
          <div className="vpm-band">Every material security operation should be risk-informed, independently proven, explicitly authorized, observable, recoverable and evidenced.</div>
        </div>
      </section>

      <section className="vpm-section vpm-lab">
        <div className="container">
          <SectionHead eyebrow="SecLabs + GoldenVault" title="Independent Proving Powered by a Dynamic Validation Workspace" lead="SecLabs governs the proving operation. PUDICA orchestrates authority, workflow, automation and evidence. GoldenVault provides the production-relevant validation topology." />
          <div className="vpm-lab-grid">
            <div className="vpm-lab-copy">
              <article><FlaskConical/><h3>SecLabs</h3><p>The independent proving function within ProdSecOps, defining authorized scope, validation criteria, compatibility, monitoring, rollback, recovery and evidence requirements.</p></article>
              <article><Layers3/><h3>GoldenVault</h3><p>The dynamic validation workspace used by SecLabs and orchestrated through PUDICA, with representative identities, devices, applications, controls, telemetry and recovery paths.</p></article>
            </div>
            <figure><img src="/assets/enterprise-3d/goldenvault-dynamic-proving.png" alt="GoldenVault dynamic validation workspace"/></figure>
          </div>
          <div className="vpm-dark-band">Test once. Reuse the validated scenario across remediation, monitoring, response, recovery and assurance.</div>
        </div>
      </section>

      <section className="vpm-section">
        <div className="container">
          <SectionHead eyebrow="Virtual Pilot Operations Team" title="Five Specialist Teams. One Integrated Security Operation." lead="Customers can engage one specialist Pilot, combine multiple teams into an Integrated Fleet or adopt Complete 5Pilot Operations." />
          <div className="vpm-pilot-grid">
            {pilots.map(([Icon, title, subtitle, text, outcome]) => <article key={title}><Icon/><span>{subtitle}</span><h3>{title}</h3><p>{text}</p><strong>{outcome}</strong></article>)}
          </div>
        </div>
      </section>

      <section className="vpm-section vpm-soft">
        <div className="container">
          <SectionHead eyebrow="Flexible Operating Models" title="Start with One Pilot. Build a Fleet. Transfer Complete Operations." />
          <div className="vpm-package-grid">
            {packages.map(([title, text, cta], index) => <article key={title} className={index === 2 ? "featured" : ""}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><Link to="/services">{cta} <ArrowRight size={15}/></Link></article>)}
          </div>
          <p className="vpm-responsibility">The customer retains business ownership, executive authority, legal accountability and final risk acceptance. V Pilot operates the contracted capabilities defined in the service agreement.</p>
        </div>
      </section>

      <section className="vpm-section">
        <div className="container">
          <SectionHead eyebrow="Solutions and Managed Services" title="Solutions for Business Risk. Services for Operational Execution." lead="Explore outcome-led solutions and managed services without overloading the homepage with every technical detail." />
          <div className="vpm-two-panel">
            <article><Sparkles/><h3>Enterprise Solutions</h3><ul><li>Secure Business Transformation</li><li>Integrated Security Operations</li><li>Enterprise Risk Management</li><li>Autonomous Incident Response</li><li>Cloud Forensics</li><li>Cyber Resilience & Recovery</li><li>ISO/IEC 27001 Operational Readiness</li></ul><Link to="/solutions">Explore Solutions <ArrowRight size={15}/></Link></article>
            <article><CloudCog/><h3>Managed Services</h3><ul><li>Managed Vulnerability Remediation</li><li>Managed SIEM Operations</li><li>Managed Endpoint & Intune</li><li>Threat-Informed Risk Management</li><li>Managed Backup & Recovery</li><li>CISO as a Service</li><li>Incident Readiness & Response</li></ul><Link to="/services">Explore Services <ArrowRight size={15}/></Link></article>
          </div>
        </div>
      </section>

      <section className="vpm-section vpm-proof">
        <div className="container">
          <SectionHead eyebrow="Why V Pilot" title="Designed to Finish the Security Work" />
          <div className="vpm-why-grid">{why.map(([title,text]) => <article key={title}><CheckCircle2/><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="vpm-brand-line">We Pilot Your Security Operations.</div>
          <div className="vpm-confidence">
            <article><h3>Engagement deliverables</h3><p>Defined scope, responsibility matrix, named owners, runbooks, service levels, transition plan and reporting calendar.</p></article>
            <article><h3>Operating outputs</h3><p>Trusted-state baseline, prioritized backlog, validated treatment, detection profile, response playbook, recovery profile and evidence package.</p></article>
            <article><h3>Responsibility boundaries</h3><p>Customer ownership and executive authority remain clear while V Pilot operates contracted technical and governance capabilities.</p></article>
            <article><h3>Service assurance</h3><p>Operational metrics, SLA reporting, closure rates, detection effectiveness, recovery results, exceptions and improvement plans.</p></article>
          </div>
        </div>
      </section>

      <section className="vpm-section vpm-insights">
        <div className="container">
          <SectionHead eyebrow="Insights and Operational Research" title="Operational Intelligence Built from Evidence, Testing and Frontline Learning" />
          <div className="vpm-insight-grid">
            {["Threat-Informed Operations","Infrastructure Security","Application Security","Detection and Response","Resilience and Recovery","Governance and Assurance"].map((item,index)=><article key={item}><span>{["Framework","Technical Guide","Research Note","Customer Scenario","Operational Checklist","Solution Brief"][index]}</span><h3>{item}</h3><p>Practical guidance for leaders and operating teams, grounded in risk context, validation evidence and managed operations.</p></article>)}
          </div>
          <Link className="vpm-text-link" to="/insights">Explore Insights and Frameworks <ArrowRight size={16}/></Link>
        </div>
      </section>

      <section className="vpm-final">
        <div className="container vpm-final-grid">
          <div><span>Build Your Operating Model</span><h2>Build a Security Operating Model That Can Finish the Work</h2><p>Begin with a focused Pilot service, combine specialist teams into an Integrated Fleet or adopt Complete 5Pilot Operations across governance, identity, endpoints, cloud, monitoring, remediation, incident response, forensics, backup and recovery.</p><small>We will map your priority services, risk context, current tools, decision authorities, recovery objectives and operating gaps.</small></div>
          <div className="vpm-final-actions"><Link className="vpm-btn primary" to="/contact">Schedule Executive Briefing <ArrowRight size={17}/></Link><Link className="vpm-btn secondary" to="/contact">Request Operating-Gap Assessment</Link></div>
        </div>
      </section>
    </div>
  );
}







