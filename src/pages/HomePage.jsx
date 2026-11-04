import { Link } from "react-router-dom";

import {
  ArrowRight, BrainCircuit, CheckCircle2, DatabaseBackup, Eye,
  FileCheck2, FlaskConical, Gauge, Layers3, LifeBuoy, Network,
  Radar, ShieldCheck, Workflow, Wrench, Zap
} from "lucide-react";
import "./vpilot-enterprise-home-final.css";

const operatingGaps = [
  ["Fragmented context", "Security, IT, compliance and resilience teams maintain different views of the same production-risk condition."],
  ["Unclear accountability", "Findings may have owners while the complete operating outcome remains distributed across teams and providers."],
  ["Unproven change", "Remediation reaches production without complete compatibility, telemetry, rollback and recovery validation."],
  ["Reactive intelligence", "Threat intelligence enriches alerts but too rarely drives exposure reduction, hardening and recovery preparation."],
  ["Recovery considered late", "Backup, restoration and trusted-state requirements are separated from treatment and response decisions."],
  ["Evidence after execution", "Management and audit evidence is reconstructed after work instead of being produced through the operation."],
];

const systemLayers = [
  ["V Pilot", "Managed cybersecurity operations company", "We Pilot Your Security Operations."],
  ["Virtual Pilot Operations Team", "Specialist delivery workforce", "Dedicated experts augment agreed customer security capabilities."],
  ["5Pilot Operations Model", "Customer-selectable service structure", "Single Pilot, Integrated Fleet or Complete 5Pilot Operations."],
  ["ProdSecOps", "Infrastructure security operations framework", "Context, proving, authority, controlled execution, recovery and assurance."],
  ["SecLabs", "Independent security proving function", "Validates effectiveness, compatibility, observability, rollback and recovery."],
  ["PUDICA", "Integrated SaaS operations control plane", "Orchestrates shared context, workflows, authority, evidence and outcomes."],
  ["GoldenVault", "Dynamic validation and recovery workspace", "Recreates production-relevant conditions for controlled proving."],
  ["5D Threat Intelligence", "Integrated analytical model", "Connects prevention, detection, response, recovery and assurance."],
];

const dimensions = [
  ["01", "Anticipate", "Proactive", Radar, "Reduce relevant exposure before exploitation through threat-informed prioritization and treatment."],
  ["02", "Observe", "Detective", Eye, "Define the telemetry, detection logic, thresholds and hunting hypotheses needed to make the condition visible."],
  ["03", "Respond", "Reactive", Zap, "Prepare classification, escalation, containment, investigation and evidence before the threat materializes."],
  ["04", "Restore", "Recovery", DatabaseBackup, "Validate backup, dependencies, restoration sequence and trusted restart criteria."],
  ["05", "Prove", "Assurance", FileCheck2, "Preserve authority, test results, implementation evidence, residual risk and continual improvement."],
];

const pilots = [
  ["Compass Pilot", "Govern and assure", "CISO as a Service, enterprise risk, managed ISMS, privacy governance and executive assurance."],
  ["ART Pilot", "Validate and remediate", "VAPT, exploitability validation, remediation engineering, compatibility testing and verified closure."],
  ["Vigil Pilot", "Observe and investigate", "SIEM administration, telemetry coverage, detection engineering, threat hunting, triage and escalation."],
  ["Custodian Pilot", "Administer and protect", "Identity, Entra, Active Directory, Intune, server, endpoint, cloud and privileged-access operations."],
  ["Phoenix Pilot", "Respond and restore", "Incident coordination, forensics, backup assurance, restoration, BCP/DR exercises and resilience."],
];

const lifecycle = ["Establish context", "Acquire trusted state", "Analyze 5D risk", "Prove in SecLabs", "Authorize treatment", "Execute domain operation", "Observe and recover", "Assure and improve"];

const servicePackages = [
  ["Single Pilot Service", "Add one specialist capability for a defined operational requirement, with named ownership, service levels, escalation and evidence."],
  ["Integrated Fleet", "Coordinate two or more Pilot teams around a shared business risk, common context and one managed workflow."],
  ["Complete 5Pilot Operations", "Operate contracted day-to-day security capabilities through five specialist teams and unified governance."],
];

const validationItems = ["Remediation compatibility", "Configuration and hardening", "Detection and SIEM rules", "Identity and Intune scenarios", "Incident procedures", "Backup and restoration", "BCP/DR exercises", "Rollback and evidence"];

function SectionHead({ eyebrow, title, lead }) {
  return <header className="vph-section-head"><span>{eyebrow}</span><h2>{title}</h2>{lead && <p>{lead}</p>}</header>;
}

export default function HomePage() {
  return <div className="vph-home">
    <section className="vph-hero" id="top">
      <div className="vph-grid" aria-hidden="true" />
      <div className="container vph-hero-layout">
        <div className="vph-hero-copy">
          <span className="vph-eyebrow">Managed cybersecurity operations</span>
          <h1>Put threat intelligence to work across your <em>entire security operation.</em></h1>
          <p className="vph-lead">Most organizations use threat intelligence to enrich alerts. V Pilot uses relevant intelligence to drive proactive remediation, detection engineering, incident response, recovery validation and management assurance.</p>
          <p>Through ProdSecOps, SecLabs, PUDICA, GoldenVault and the 5Pilot Operations Model, V Pilot converts security intelligence into authorized, recoverable and evidenced action.</p>
          <div className="vph-actions">
            <Link className="vph-btn primary" to="/solutions">Explore integrated operations <ArrowRight size={17}/></Link>
            <Link className="vph-btn secondary" to="/services">Build your Pilot Fleet</Link>
          </div>
          <div className="vph-promise">Anticipate <i/> Observe <i/> Respond <i/> Restore <i/> Prove</div>
        </div>
        <figure className="vph-hero-visual">
          <img src="/assets/enterprise-3d/pudica-integrated-operations.png" alt="Integrated cybersecurity operations platform with five connected operational domains" />
          <figcaption><span>V Pilot integrated operating system</span><strong>One security condition. One evidence trail.</strong></figcaption>
        </figure>
      </div>
    </section>

    <section className="vph-section vph-light">
      <div className="container">
        <SectionHead eyebrow="V PILOT CORPORATE POSITIONING" title="We Pilot Your Security Operations." lead="V Pilot Cyber Solutions LLP is a managed cybersecurity operations and technology company. We extend customer security, infrastructure, cloud, risk, compliance and resilience teams to convert findings and management requirements into controlled technical operations and verified outcomes." />
        <div className="vph-statement"><ShieldCheck/><p><strong>V Pilot operates the security work required between identifying risk and proving that risk has been reduced.</strong><span>From threat intelligence to validated action. From validated action to resilient business operations.</span></p></div>
      </div>
    </section>

    <section className="vph-section vph-soft">
      <div className="container">
        <SectionHead eyebrow="THE OPERATING GAP" title="Security capabilities are connected. Accountability often is not." lead="Organizations may already operate scanners, SIEM, endpoint security, identity, cloud, backup and compliance programs. The gap appears when teams, providers, approvals and evidence remain separated." />
        <div className="vph-card-grid three">{operatingGaps.map(([t,d],i)=><article className="vph-card" key={t}><span className="num">{String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </div>
    </section>

    <section className="vph-section vph-dark">
      <div className="container">
        <SectionHead eyebrow="THE INTEGRATED SECURITY OPERATIONS SYSTEM" title="One security condition. Five operational dimensions. One evidence trail." lead="A vulnerability, alert, configuration deviation, recovery dependency and compliance finding are connected views of the same production-risk condition." />
        <div className="vph-dim-grid">{dimensions.map(([n,t,s,I,d])=><article key={t}><span>{n}</span><I/><b>{t}</b><small>{s}</small><p>{d}</p></article>)}</div>
      </div>
    </section>

    <section className="vph-section vph-light">
      <div className="container">
        <SectionHead eyebrow="SYSTEM ARCHITECTURE" title="Clear roles across company, teams, framework, platform and proving." lead="Every element has one purpose. Together they form one managed security-operations system." />
        <div className="vph-layer-grid">{systemLayers.map(([t,k,d])=><article key={t}><span>{k}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </div>
    </section>

    <section className="vph-section vph-soft">
      <div className="container">
        <SectionHead eyebrow="PUDICA PLATFORM" title="One control plane for integrated security operations." lead="PUDICA connects trusted state, 5D analysis, risk decisions, SecLabs workflows, GoldenVault proving, authorization, execution, monitoring, recovery, reporting and audit evidence." />
        <div className="vph-split">
          <div className="vph-feature-list">
            {["Shared production context", "Governed workflow and authority", "GoldenVault validation", "Detection and response orchestration", "Recovery and assurance evidence"].map(x=><p key={x}><CheckCircle2/> {x}</p>)}
          </div>
          <div className="vph-quote"><BrainCircuit/><strong>PUDICA turns one security condition into one coordinated operational workflow across remediation, detection, response, recovery and assurance.</strong><p>PUDICA is not only a scanner, SIEM, patch tool, backup product, GRC repository or digital twin. It is the control plane connecting those functions.</p></div>
        </div>
      </div>
    </section>

    <section className="vph-section vph-dark">
      <div className="container">
        <SectionHead eyebrow="PRODSECOPS" title="The modern infrastructure security operations framework." lead="ProdSecOps structures security operations around the real production environment, not isolated tools or tickets." />
        <div className="vph-lifecycle">{lifecycle.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><b>{x}</b></div>)}</div>
      </div>
    </section>

    <section className="vph-section vph-light">
      <div className="container">
        <SectionHead eyebrow="SECLABS + GOLDENVAULT" title="Independent proving before production is exposed." lead="SecLabs is the proving function. GoldenVault is the dynamic, production-relevant validation and recovery workspace within PUDICA." />
        <div className="vph-validation">
          <figure><img src="/assets/enterprise-3d/goldenvault-dynamic-proving.png" alt="GoldenVault validation and recovery environment"/></figure>
          <div><div className="vph-chip-grid">{validationItems.map(x=><span key={x}><FlaskConical/>{x}</span>)}</div><p className="vph-note">Designed to reduce production-change risk through isolated validation, compatibility testing, staged deployment and rollback planning.</p></div>
        </div>
      </div>
    </section>

    <section className="vph-section vph-soft">
      <div className="container">
        <SectionHead eyebrow="VIRTUAL PILOT OPERATIONS TEAM" title="Security expertise that operates as part of the customer team." lead="The Virtual Pilot Operations Team augments agreed security capabilities while the customer retains business ownership, legal accountability, executive authority and risk acceptance." />
        <div className="vph-card-grid five">{pilots.map(([t,s,d])=><article className="vph-pilot" key={t}><span>{s}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
      </div>
    </section>

    <section className="vph-section vph-light">
      <div className="container">
        <SectionHead eyebrow="5PILOT OPERATIONS MODEL" title="Choose the operating structure required by the business risk." lead="The 5Pilot Operations Model is the customer engagement and delivery structure used by V Pilot." />
        <div className="vph-card-grid three">{servicePackages.map(([t,d],i)=><article className={`vph-package ${i===2?"featured":""}`} key={t}><span>{i===0?"Focused":i===1?"Coordinated":"Complete"}</span><h3>{t}</h3><p>{d}</p><Link to="/services">Choose engagement <ArrowRight/></Link></article>)}</div>
      </div>
    </section>

    <section className="vph-section vph-dark vph-final">
      <div className="container vph-final-grid">
        <div><span>FINAL ENTERPRISE NARRATIVE</span><h2>V Pilot does not stop at identifying risk.</h2><p>V Pilot helps validate the treatment, implement the operation, observe the result, protect recovery and prove the outcome.</p></div>
        <div className="vph-final-card"><Gauge/><strong>We Pilot Your Security Operations.</strong><p>Integrated intelligence. Independent proving. Governed execution. Validated recovery. Continuous assurance.</p><Link to="/contact">Request an operating-gap assessment <ArrowRight/></Link></div>
      </div>
    </section>
  </div>;
}




