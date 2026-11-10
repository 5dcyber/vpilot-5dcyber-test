import { Link } from "react-router-dom";
import {
  ArrowRight, Boxes, BrainCircuit, CheckCircle2, CloudCog, Database,
  Eye, FileCheck2, Gauge, KeyRound, Layers3, LifeBuoy, LockKeyhole,
  Radar, RefreshCcw, Scale, ServerCog, ShieldCheck, Sparkles, Target,
  Workflow, Wrench
} from "lucide-react";
import "./vpilot-home-enterprise-narrative.css";

const operatingGaps = [
  ["Fragmented ownership", "Security, IT, risk, application, cloud and recovery teams act through different priorities and incomplete context.", Layers3],
  ["Findings without closure", "Assessments identify weaknesses, but treatment, implementation, retesting and evidence remain disconnected.", CheckCircle2],
  ["Intelligence used too narrowly", "Threat context enriches alerts but does not consistently guide remediation, hardening, response and recovery.", BrainCircuit],
  ["Delayed security changes", "Patches and control changes are deferred when production impact and rollback readiness are uncertain.", Wrench],
  ["Recovery without proof", "Successful backup jobs do not demonstrate trusted restoration of identities, applications, configurations and services.", RefreshCcw],
  ["Compliance without evidence", "Policies may exist while operational control effectiveness remains difficult to demonstrate.", FileCheck2],
];

const modules = [
  ["PUDICA NativeTrust Workspace", "Identity, device, application, browser, mobile, update, lifecycle and workspace assurance.", KeyRound],
  ["Autonomous Remediation", "Vulnerability, configuration, software, compliance-deviation and corrective-action operations.", Wrench],
  ["Integrated Security Operations", "Threat monitoring, detection engineering, investigation, incident response, forensics and containment.", Radar],
  ["Autonomous Resilience", "Backup governance, restoration testing, BCP/DR exercises and trusted recovery assurance.", LifeBuoy],
  ["Application Security Governance", "Application risk, testing, remediation ownership, secure release, runtime monitoring and lifecycle assurance.", CloudCog],
  ["GRC & Compliance", "Enterprise risk, controls, policies, audits, exceptions, evidence, privacy and ISO/IEC 27001-aligned operations.", Scale],
];

const pilots = [
  ["Compass Pilot", "Governance, Risk & Managed ISMS", "CISO as a Service, enterprise risk, ISO/IEC 27001 readiness, privacy readiness, supplier assurance and executive reporting.", "compass"],
  ["Custodian Pilot", "Identity & Endpoint Operations", "Identity lifecycle, privileged access, Entra ID, Active Directory, Intune, servers, endpoints and trusted workspace operations.", "custodian"],
  ["Vigil Pilot", "Monitoring & Detection Operations", "SIEM administration, telemetry onboarding, detection engineering, monitoring, investigation, hunting and escalation.", "vigil"],
  ["ART Pilot", "Exposure, Remediation & Threat Response", "VAPT, attack-surface validation, remediation, configuration correction, compatibility testing and verification.", "art"],
  ["Phoenix Pilot", "Incident, Forensics & Recovery", "Incident readiness, containment, digital and cloud forensics, backup monitoring, restoration and BCP/DR assurance.", "phoenix"],
];

const why = [
  ["Operations, not reports", "Work continues from finding through authorized treatment, verification and evidenced closure.", Workflow],
  ["Threat intelligence across the lifecycle", "Threat context informs prioritization, hardening, response, restoration and assurance.", BrainCircuit],
  ["Production-relevant proving", "Material changes are validated with compatibility, rollback and recovery requirements.", Target],
  ["Human-governed automation", "Automation operates within approved authority, control gates and accountable oversight.", ServerCog],
  ["Recovery-protected change", "Consequential operations connect to backup, rollback, restoration and continuity.", LifeBuoy],
  ["Evidence by design", "Approvals, tests, deployments, incidents and exceptions create traceable assurance records.", FileCheck2],
  ["Flexible adoption", "Begin with one Pilot, combine an Integrated Fleet or adopt Complete 5Pilot Operations.", Boxes],
];

const outcomes = ["Faster treatment cycles", "Fewer overdue critical findings", "Improved detection coverage", "Verified recovery readiness", "More complete audit evidence", "Measurable SLA performance"];
const industries = ["Financial Services", "Retail", "Manufacturing", "Healthcare", "Telecom", "Professional Services", "Public Sector", "Technology"];

function Heading({ eyebrow, title, copy, center=false }) {
  return <div className={`vph3-heading${center ? " is-center" : ""}`}>
    <span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}
  </div>;
}

export default function PremiumHomeNarrative() {
  return <div className="vph3-home-narrative">
    <section className="vph3-section vph3-gap">
      <div className="vph3-shell">
        <Heading eyebrow="THE ENTERPRISE OPERATING GAP" title="Security Tools Are Connected to Systems. Security Operations Are Not." copy="The challenge is not the absence of security tools. The challenge is the absence of one connected security-operations lifecycle." />
        <div className="vph3-gap-grid">{operatingGaps.map(([t,d,I]) => <article key={t}><I/><h3>{t}</h3><p>{d}</p></article>)}</div>
      </div>
    </section>

    <section className="vph3-section vph3-proposition">
      <div className="vph3-shell vph3-proposition-grid">
        <Heading eyebrow="THE V PILOT OPERATING PROPOSITION" title="One Accountable Model from Governance to Assurance." copy="V Pilot works as an extension of customer security, IT, risk, compliance and resilience teams through managed shared responsibility." />
        <div className="vph3-lifecycle">{["Govern","Administer","Anticipate","Observe","Respond","Restore","Assure"].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,"0")}</span><strong>{x}</strong></div>)}</div>
      </div>
    </section>

    <section className="vph3-section vph3-platform">
      <div className="vph3-shell">
        <Heading eyebrow="PUDICA INTEGRATED CYBERSECURITY OPERATIONS" title="The Operational Control Plane for Integrated Security Operations" copy="PUDICA connects trusted-state acquisition, risk, assets, workflows, approvals, remediation, monitoring, response, recovery, compliance and evidence through one governed operational record." />
        <div className="vph3-platform-grid">
          <div className="vph3-stack">
            {["Application Layer","Operations Layer","Intelligence Layer","Data Layer","Integration Layer"].map((x,i)=><div key={x}><span>{5-i}</span><strong>{x}</strong></div>)}
            <p>Modules operate security conditions. Shared platform services govern records, workflows, authority, evidence and accountability.</p>
          </div>
          <div className="vph3-module-grid">{modules.map(([t,d,I])=><article key={t}><I/><div><h3>{t}</h3><p>{d}</p></div></article>)}</div>
        </div>
        <Link className="vph3-link" to="/platform">Explore the PUDICA Platform <ArrowRight/></Link>
      </div>
    </section>

    <section className="vph3-section vph3-pilots">
      <div className="vph3-shell">
        <Heading eyebrow="VIRTUAL PILOT OPERATIONS TEAM" title="Five Specialist Teams. One Accountable Operation." copy="5Pilot Operations is V Pilotâ€™s managed-service delivery model. Each Pilot provides specialist ownership within one governed operation." />
        <div className="vph3-pilot-grid">{pilots.map(([t,s,d,c])=><article className={c} key={t}><div className="vph3-pilot-top"><ShieldCheck/><span>{t}</span></div><h3>{s}</h3><p>{d}</p></article>)}</div>
        <Link className="vph3-link" to="/company/5pilot-operations">Explore 5Pilot Operations <ArrowRight/></Link>
      </div>
    </section>

    <section className="vph3-section vph3-native">
      <div className="vph3-shell vph3-native-grid">
        <Heading eyebrow="PUDICA NATIVETRUST WORKSPACE" title="Turn Every Device into a Trusted Business Workspace" copy="Unified workspace management, security and continuous assurance across identity, endpoints, applications, browsers, mobile devices, updates and business data without relying on VDI." />
        <div className="vph3-native-items">{[["Inventory & Trust",Database],["Provisioning & Lifecycle",ServerCog],["Update & Exposure",Gauge],["Application & Browser",CloudCog],["Protection & Response",ShieldCheck],["Audit-Ready Evidence",FileCheck2]].map(([t,I])=><div key={t}><I/><strong>{t}</strong></div>)}</div>
      </div>
    </section>

    <section className="vph3-section vph3-why">
      <div className="vph3-shell">
        <Heading eyebrow="WHY V PILOT" title="Designed to Finish the Security Work." copy="Risk is not reduced when a finding is reported. Risk is reduced when an authorized treatment is safely implemented, its effect is observed, recovery is protected and the outcome can be demonstrated." />
        <div className="vph3-why-grid">{why.map(([t,d,I],i)=><article className={i===6?"is-wide":""} key={t}><I/><h3>{t}</h3><p>{d}</p></article>)}</div>
        <Link className="vph3-link" to="/why-v-pilot">Discover Why V Pilot <ArrowRight/></Link>
      </div>
    </section>

    <section className="vph3-section vph3-assurance">
      <div className="vph3-shell vph3-assurance-grid">
        <div><Heading eyebrow="SECURITY ASSURANCE" title="Security Assurance Is Our Operating Objective" copy="Security work continues until the approved control is implemented, its result is verified, recovery is protected, evidence is recorded and remaining risk is clearly communicated." /><Link className="vph3-link light" to="/company/security-assurance">Review Security Assurance <ArrowRight/></Link></div>
        <div className="vph3-outcomes">{outcomes.map(x=><div key={x}><CheckCircle2/><span>{x}</span></div>)}</div>
      </div>
    </section>

    <section className="vph3-section vph3-confidence">
      <div className="vph3-shell vph3-confidence-grid">
        <Heading eyebrow="BUYER CONFIDENCE" title="Security Operations Adapted to Your Business Context" copy="Specialist security domains, cross-industry operating models, enterprise and SME engagement options and defined service assurance." />
        <div className="vph3-industries">{industries.map(x=><span key={x}>{x}</span>)}</div>
      </div>
    </section>

    <section className="vph3-conversion">
      <div className="vph3-shell"><div><span>READY TO STRENGTHEN YOUR SECURITY OPERATIONS?</span><h2>Build an Operating Model That Can Finish the Work.</h2><p>Discuss priorities, operating gaps and assurance requirements with the V Pilot team.</p></div><div><Link className="vph3-button primary" to="/contact">Schedule Executive Briefing <ArrowRight/></Link><Link className="vph3-button secondary" to="/contact">Contact V Pilot</Link></div></div>
    </section>
  </div>;
}

