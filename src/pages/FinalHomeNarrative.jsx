import { Link } from "react-router-dom";
import {
  ArrowRight, BadgeCheck, BrainCircuit, Building2, CheckCircle2,
  Compass, DatabaseBackup, Eye, FileCheck2, Flame, Flag, Gauge, KeyRound,
  Network, Radar, RotateCcw, Scale, ShieldCheck, Sparkles, Target,
  UsersRound, Workflow, Wrench
} from "lucide-react";
import "./vpilot-final-home.css";

const SHIELD_URL = "/assets/vpilot-hero-shield.png";

function AssuranceEmblem({ compact = false }) {
  return <span className={`vpfh-assurance-emblem ${compact ? "is-compact" : ""}`} aria-hidden="true">
    <ShieldCheck className="vpfh-emblem-shield" />
    <Compass className="vpfh-emblem-compass" />
  </span>;
}

const pilotIcons = {
  compass: Compass,
  custodian: KeyRound,
  vigil: Radar,
  art: Wrench,
  phoenix: Flame,
};

function PilotIcon({ kind, compact = false }) {
  const Icon = pilotIcons[kind] || ShieldCheck;
  return <span className={`vpfh-pilot-icon vpfh-pilot-icon--${kind} ${compact ? "is-compact" : ""}`} aria-hidden="true"><Icon /></span>;
}

const differences = [
  [Workflow, "01", "Operations, Not Reports", "Work continues through approved treatment, implementation, verification and evidenced closure."],
  [ShieldCheck, "02", "Production-Relevant Validation", "Security changes are tested under representative conditions before consequential production deployment."],
  [BrainCircuit, "03", "Threat Intelligence Across the Lifecycle", "Threat intelligence informs anticipation, observation, response, restoration and assurance decisions."],
  [UsersRound, "04", "Human-Governed Automation", "Automation operates within defined authority, approval, safety, evidence, exception and recovery boundaries."],
  [RotateCcw, "05", "Recovery-Protected Change", "Consequential changes account for rollback, backup, restoration, continuity and trusted recovery."],
  [FileCheck2, "06", "Evidence by Design", "Approvals, tests, deployments, exceptions and outcomes are preserved as a traceable operating record."],
  [Network, "07", "Flexible Adoption", "Begin with one Pilot, coordinate an Integrated Fleet or adopt Complete 5Pilot Operations."],
  [BadgeCheck, "08", "Service Assurance Commitment", "Eligible verified service failures receive transparent review, corrective action and applicable support under the service agreement."],
];

const pilots = [
  ["compass", "Compass Pilot", "GRC, Risk and Managed ISMS", "Security leadership, enterprise risk, ISO/IEC 27001 readiness, privacy, supplier assurance and policy governance.", ["CISO as a Service", "ISO 27001 readiness", "Enterprise risk", "Privacy and supplier assurance"]],
  ["custodian", "Custodian Pilot", "Identity and Endpoint Operations", "Identity lifecycle, privileged access, endpoints, device hardening, application access and secure configuration.", ["Entra ID and Active Directory", "Intune and endpoint operations", "Privileged access", "Device and application hardening"]],
  ["vigil", "Vigil Pilot", "SIEM and Detection Operations", "Continuous monitoring, detection engineering, threat hunting, alert triage and security telemetry.", ["SIEM administration", "Detection engineering", "Threat hunting", "Telemetry and analytics"]],
  ["art", "ART Pilot", "Remediation and Threat Response", "Exposure validation, vulnerability remediation, configuration treatment and threat-informed response.", ["VAPT and exposure validation", "Patch and configuration treatment", "Compatibility testing", "Verified risk reduction"]],
  ["phoenix", "Phoenix Pilot", "Incident, Forensics and Recovery", "Incident readiness, containment, digital forensics, backup validation, restoration and trusted recovery.", ["Incident response", "Digital and cloud forensics", "Backup validation", "Ransomware recovery"]],
];

const lifecycle = [
  [FileCheck2, "Understand", "Business context and risk"], [Target, "Anticipate", "Threat-informed priorities"],
  [Gauge, "Observe", "Continuous monitoring and visibility"], [ShieldCheck, "Respond", "Coordinated incident response"],
  [DatabaseBackup, "Restore", "Trusted recovery and continuity"], [BadgeCheck, "Prove", "Evidence and assurance"],
];

const principles = [
  [Target, "01", "Understand Before Acting", "Business context, assets, threats and risk."],
  [ShieldCheck, "02", "Govern with Authority", "Clear ownership, policy, approval and accountability."],
  [Wrench, "03", "Prove Before Production", "Validate impact, monitoring, rollback and recovery."],
  [Workflow, "04", "Operate Continuously", "Administer, monitor, remediate and improve."],
  [DatabaseBackup, "05", "Protect Recovery", "Connect change to backup, restoration and continuity."],
  [Scale, "06", "Accept Accountability", "Own contracted operations and corrective action."],
  [FileCheck2, "07", "Preserve Evidence", "Maintain audit-ready approvals, tests and outcomes."],
  [Sparkles, "08", "Improve Systematically", "Learn from metrics, incidents, exercises and audits."],
];

const industries = ["Financial Services", "Retail", "Manufacturing", "Healthcare", "Telecommunications", "Professional Services", "Public Sector"];

function Heading({ eyebrow, title, copy, align = "left" }) {
  return <div className={`vpfh-heading ${align === "center" ? "is-center" : ""}`}><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export default function FinalHomeNarrative() {
  return <div className="vpfh-home" id="company-overview">
    <section className="vpfh-section vpfh-difference" id="why-v-pilot">
      <div className="vpfh-shell">
        <div className="vpfh-difference-head">
          <Heading eyebrow="OUR DIFFERENCE" title="Why Organizations Choose V Pilot" copy="V Pilot brings together specialist expertise, an integrated platform, independent validation and a commitment to security assurance, helping organizations operate on security outcomes rather than reports alone." />
          <aside><span>OUR CORE PROMISE</span><strong>“We Pilot Your Security Operations.”</strong><p>Your security operations are our operational responsibility, within the agreed service scope.</p></aside>
        </div>
        <div className="vpfh-difference-grid">{differences.map(([Icon,n,t,d]) => <article key={n}><div><Icon /><b>{n}</b></div><h3>{t}</h3><p>{d}</p></article>)}</div>
      </div>
    </section>

    <section className="vpfh-section vpfh-purpose">
      <div className="vpfh-shell">
        <Heading eyebrow="OUR PURPOSE, VISION AND MISSION" title="A Clearer, Safer, More Resilient Tomorrow" />
        <div className="vpfh-purpose-grid">
          <article><Target /><span>OUR PURPOSE</span><h3>Security Assurance Through Continuous Operations.</h3><p>Help organizations convert security requirements into continuously operated, measured and evidenced controls.</p></article>
          <article><Eye /><span>OUR VISION</span><h3>A Trusted Global Security Operations Partner.</h3><p>Become a trusted partner recognized for accountable service, operational excellence, validated outcomes and continuous assurance.</p></article>
          <article><Flag /><span>OUR MISSION</span><h3>Operate. Assure. Improve.</h3><p>Pilot customer security operations through risk-driven governance, specialist expertise, production-relevant validation, responsive support and continual improvement.</p></article>
        </div>
      </div>
    </section>

    <section className="vpfh-assurance" id="security-assurance">
      <div className="vpfh-assurance-left">
        <span>OUR SPECIAL OBJECTIVE</span><h2>Security Assurance</h2><p>Security work is not complete when a report, alert or patch is delivered. Work continues until an authorized control is implemented, the result is verified, recovery is protected, evidence is recorded and remaining risk is clearly communicated.</p>
        <div className="vpfh-assurance-pillars"><b>Risk-Driven Operations</b><b>Production-Relevant Proving</b><b>Continuous Evidence</b><b>Stronger Resilience</b></div>
      </div>
      <div className="vpfh-shield-stage"><AssuranceEmblem /><small>SECURITY ASSURANCE IS IN OUR DNA</small></div>
      <div className="vpfh-assurance-right"><span>OUR SERVICE ASSURANCE COMMITMENT</span><div className="vpfh-title-with-shield"><AssuranceEmblem compact /><h2>We Stand Behind the Security Operations We Deliver.</h2></div><p>V Pilot operates capabilities assigned through the applicable service agreement and Responsibility Assignment Matrix. Customers retain business ownership, executive authority, legal accountability and final risk acceptance.</p><p>Eligible verified service failures receive transparent review, corrective action and applicable extended assurance support under the service agreement.</p><strong>Corrective action. Stronger controls. Continued assurance.</strong></div>
    </section>

    <section className="vpfh-section vpfh-pilots" id="five-pilot-operations">
      <div className="vpfh-shell"><Heading eyebrow="THE 5PILOT TEAMS" title="Specialized Expertise. Integrated Outcomes." copy="Different domains. One governed operation. One accountable partner." />
        <div className="vpfh-pilot-grid">{pilots.map(([kind,name,sub,copy,items]) => <article className={kind} key={name}><div className="vpfh-pilot-visual"><PilotIcon kind={kind} /><span>{name}</span></div><h3>{name}</h3><b>{sub}</b><p>{copy}</p><ul>{items.map(x => <li key={x}>{x}</li>)}</ul></article>)}</div>
      </div>
    </section>

    <section className="vpfh-section vpfh-lifecycle"><div className="vpfh-shell"><Heading eyebrow="HOW 5PILOT OPERATIONS WORKS" title="One Lifecycle. Every Pilot. Better Security Outcomes." />
      <div className="vpfh-lifecycle-row">{lifecycle.map(([Icon,t,d],i) => <article key={t}><Icon /><h3>{t}</h3><p>{d}</p>{i < lifecycle.length-1 && <ArrowRight className="vpfh-flow-arrow" />}</article>)}</div>
    </div></section>

    <section className="vpfh-section vpfh-engagement"><div className="vpfh-shell"><Heading eyebrow="ENGAGEMENT OPTIONS" title="Start with One. Build Your Fleet. Or Transfer the Operation." />
      <div className="vpfh-engagement-grid">
        <article><Gauge /><h3>Single Pilot</h3><p>One specialist team for a defined requirement.</p><ul><li>Clear scope and service levels</li><li>Dedicated specialists</li><li>Fast time to value</li><li>Full evidence and reporting</li></ul><Link to="/services">Choose a Pilot <ArrowRight /></Link></article>
        <article><Network /><h3>Integrated Fleet</h3><p>Two or more Pilots around a shared risk.</p><ul><li>Coordinated operations</li><li>Shared intelligence and workflows</li><li>Consolidated reporting</li><li>Greater operational impact</li></ul><Link to="/contact?intent=integrated-fleet">Design Your Fleet <ArrowRight /></Link></article>
        <article><Sparkles /><h3>Complete 5Pilot Operations</h3><p>All five teams as an integrated managed-security function.</p><ul><li>End-to-end security operations</li><li>Unified governance and service levels</li><li>Shared responsibility model</li><li>Continuous assurance</li></ul><Link to="/services/complete-5pilot-operations">Explore Complete 5Pilot <ArrowRight /></Link></article>
      </div>
    </div></section>

    <section className="vpfh-section vpfh-model"><div className="vpfh-shell"><Heading eyebrow="THE V PILOT ADVANTAGE" title="Your Challenges. Our Commitment." copy="Security tools, policies and teams alone do not finish the work. V Pilot connects specialist teams, accountable operations, controlled automation, trusted recovery and continuous evidence through PUDICA." />
      <div className="vpfh-model-grid"><div className="vpfh-model-list">{["End-to-end security operations", "Aligned to business risk and compliance", "Validated through SecLabs and GoldenVault", "Recovery-aware and evidence-driven", "Operational accountability and service assurance"].map(x => <p key={x}><CheckCircle2 />{x}</p>)}<Link to="/solutions">See Our Customer Impact <ArrowRight /></Link></div>
      <div className="vpfh-pudica-orbit"><div className="vpfh-pudica-core"><strong>PUDICA</strong><span>Integrated Cybersecurity Operations</span></div>{pilots.map(([,name],i)=><div className={`node n${i+1}`} key={name}><PilotIcon kind={pilots[i][0]} compact /><span>{name}</span></div>)}</div>
      <div className="vpfh-outcomes"><span>CUSTOMER OUTCOMES</span>{["Reduced cyber risk and exposure", "Faster, validated remediation", "Stronger detection and response", "Resilient backup and recovery", "Continuous compliance posture", "Audit-ready evidence", "Operational efficiency", "Greater management confidence"].map(x => <p key={x}><CheckCircle2 />{x}</p>)}</div></div>
    </div></section>

    <section className="vpfh-section vpfh-journey"><div className="vpfh-shell"><Heading eyebrow="OUR JOURNEY" title="From Vision to a Trusted Security Partner." />
      <div className="vpfh-timeline">{[["MAR 2024","V Pilot Established"],["MID 2024","Operating Framework Formalized"],["LATE 2024","PUDICA Development Initiated"],["2025","5Pilot Operating Model Structured"],["CURRENT DIRECTION","Portfolio and Assurance Expansion"],["BEYOND","Continuous Innovation"]].map(([d,t])=><article key={d}><span>{d}</span><h3>{t}</h3></article>)}</div>
    </div></section>

    <section className="vpfh-section vpfh-principles"><div className="vpfh-shell"><Heading eyebrow="OUR OPERATING PRINCIPLES" title="Principles That Guide Everything We Do." />
      <div className="vpfh-principle-grid">{principles.map(([Icon,n,t,d])=><article key={n}><Icon /><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
    </div></section>

    <section className="vpfh-people"><div className="vpfh-people-copy"><span>OUR PEOPLE</span><h2>Expertise with Purpose.</h2><p>V Pilot brings together technical expertise, operational experience and a shared commitment to security assurance. The Virtual Pilot Operations Team works as a unified force to deliver measurable outcomes.</p><Link to="/5pilot-operations">Meet the 5Pilot Teams <ArrowRight /></Link></div><div className="vpfh-industries"><span>INDUSTRY CONTEXT</span><h2>Security Operations Adapted to Your Business.</h2><div>{industries.map(x=><b key={x}><Building2 />{x}</b>)}</div></div></section>

    <section className="vpfh-final"><div className="vpfh-shell"><div><span>READY TO STRENGTHEN YOUR SECURITY OPERATIONS?</span><h2>Let’s Build a Safer, Stronger Tomorrow.</h2><p>Discover how V Pilot can deliver accountable security operations and continuous assurance for your organization.</p></div><div><Link className="primary" to="/contact?intent=executive-briefing">Schedule Executive Briefing <ArrowRight /></Link><Link className="secondary" to="/contact?intent=operating-gap-assessment">Request Operating-Gap Assessment</Link></div></div></section>
  </div>;
}
