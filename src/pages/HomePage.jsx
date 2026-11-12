import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PremiumHomeNarrative from "./PremiumHomeNarrative.jsx";
import {
  ArrowRight, BadgeCheck, BrainCircuit, Building2, CheckCircle2,
  CloudCog, DatabaseBackup, Eye, FileCheck2, FlaskConical, Gauge,
  KeyRound, Layers3, Network, Radar, RotateCcw, ServerCog,
  ShieldCheck, Sparkles, Target, UsersRound, Workflow, Wrench, Zap
} from "lucide-react";
import "./vpilot-home-recommended.css";
import "./vpilot-soc-hero.css";

const proof = [
  [UsersRound,"Managed Shared Responsibility"],
  [FlaskConical,"Production-Relevant Validation"],
  [BrainCircuit,"Human-Governed Automation"],
  [DatabaseBackup,"Recovery-Protected Change"],
  [FileCheck2,"Evidence by Design"],
];
const gaps = [
  [Network,"Fragmented ownership","Security, IT, risk, applications, cloud, and recovery teams act through different priorities and incomplete context."],
  [FileCheck2,"Findings without closure","Treatment, testing, authorization, implementation, retesting, and evidence remain disconnected."],
  [Radar,"Intelligence used too narrowly","Threat intelligence enriches alerts but does not consistently guide treatment, hardening, response, and recovery."],
  [ServerCog,"Delayed security changes","Patches and control changes are deferred because production impact and rollback readiness are uncertain."],
  [DatabaseBackup,"Recovery without proof","Successful backup jobs do not demonstrate trusted restoration of identities, applications, configurations, and services."],
  [BadgeCheck,"Compliance without evidence","Policies may exist while operational control effectiveness remains difficult to demonstrate."],
];
const operations = [
  [ShieldCheck,"Govern","Authority, policy, ownership and risk decisions"],
  [ServerCog,"Administer","Identity, endpoints, cloud and configuration"],
  [Radar,"Anticipate","Threat context, attack paths and preventive action"],
  [Eye,"Observe","Telemetry, detections, monitoring and investigation"],
  [Zap,"Respond","Containment, correction and coordinated action"],
  [DatabaseBackup,"Restore","Backup, recovery, continuity and trust"],
  [CheckCircle2,"Assure","Evidence, reporting and systematic improvement"],
];
const modules = [
  [KeyRound,"PUDICA NativeTrust Workspace","Identity, device, application, browser, mobile, update, lifecycle, and workspace assurance."],
  [Wrench,"Autonomous Remediation","Vulnerability, configuration, software, compliance-deviation, and corrective-action operations."],
  [Eye,"Integrated Security Operations","Threat monitoring, detection engineering, investigation, incident response, forensics, and containment."],
  [DatabaseBackup,"Autonomous Resilience","Backup governance, restoration testing, BCP/DR exercises, and trusted recovery assurance."],
  [CloudCog,"Application Security Governance","Application risk, testing, remediation ownership, secure release, runtime monitoring, and lifecycle assurance."],
  [BadgeCheck,"GRC & Compliance","Enterprise risk, controls, policies, audits, exceptions, evidence, privacy, and ISO/IEC 27001-aligned operations."],
];
const pilots = [
  [Gauge,"Compass Pilot","Governance, Risk & Managed ISMS","CISO as a Service, enterprise risk, ISO/IEC 27001 readiness, privacy, supplier assurance, policy governance, and executive reporting."],
  [KeyRound,"Custodian Pilot","Identity & Endpoint Operations","Identity lifecycle, privileged access, Entra ID, Active Directory, Intune, servers, endpoints, applications, and trusted workspace operations."],
  [Eye,"Vigil Pilot","Monitoring & Detection Operations","SIEM administration, telemetry onboarding, detection engineering, monitoring, triage, investigation, hunting, and escalation."],
  [Wrench,"ART Pilot","Exposure, Remediation & Threat Response","VAPT, attack-surface validation, remediation, configuration correction, compatibility testing, and verification."],
  [DatabaseBackup,"Phoenix Pilot","Incident, Forensics & Recovery","Incident readiness, containment, digital and cloud forensics, backup monitoring, restoration, ransomware recovery, and BCP/DR assurance."],
];
const outcomes = ["Faster treatment cycles","Fewer overdue critical findings","Improved detection coverage","Verified recovery readiness","More complete audit evidence","Measurable SLA performance"];
const industries = ["Financial Services","Retail","Manufacturing","Healthcare","Telecom","Professional Services","Public Sector","Technology"];
function Head({eyebrow,title,lead}){return <div className="vph2-head"><span>{eyebrow}</span><h2>{title}</h2>{lead&&<p>{lead}</p>}</div>}
export default function HomePage(){return <div className="vph2-page">
  {/* VPILOT_SOC_HERO_START */}
<section className="vpsoc-hero" aria-labelledby="vpsoc-heading">
  <div className="vpsoc-media" aria-hidden="true">
    <img src="/assets/vpilot-virtual-security-operations-hero.png" alt="" width="1536" height="1024" fetchPriority="high" decoding="async" />
  </div>
  <div className="vpsoc-overlay" aria-hidden="true" />

  <div className="vpsoc-shell">
    <div className="vpsoc-content">
      <span className="vpsoc-eyebrow">Your Virtual Security Operations Team</span>

      <h1 id="vpsoc-heading">
        <span>We Pilot Your</span>
        <strong>Security Operations.</strong>
      </h1>

      <p className="vpsoc-intro">
        Extend your team without hiring every security specialist. V Pilot connects
        expert people, threat intelligence and risk-driven operations to protect,
        respond, recover and continuously improve.
      </p>

      <div className="vpsoc-actions">
        <Link className="vpsoc-btn vpsoc-btn-primary" to="/contact?intent=executive-briefing">
          <span>Schedule Executive Briefing</span><ArrowRight aria-hidden="true" />
        </Link>
        <Link className="vpsoc-btn vpsoc-btn-secondary" to="/5pilot-operations">
          <span>Meet Your Virtual Pilots</span><ArrowRight aria-hidden="true" />
        </Link>
      </div>

      <div className="vpsoc-positioning">
        <i aria-hidden="true" />
        <span>People-led. Platform-enabled. Accountable by design.</span>
      </div>

      <ul className="vpsoc-lifecycle" aria-label="V Pilot operational lifecycle">
        <li>Anticipate</li><li>Observe</li><li>Respond</li><li>Restore</li><li>Prove</li>
      </ul>
    </div>

    <aside className="vpsoc-responsibility" aria-label="Operational responsibility commitment">
      <i aria-hidden="true" />
      <div>
        <strong>Your security. Our operational responsibility.</strong>
        <span>Within the agreed service scope.</span>
      </div>
    </aside>
  </div>
</section>

<section className="vpsoc-assurance" aria-label="Operational assurance principles">
  <div className="vpsoc-assurance-shell">
    <article><UsersRound aria-hidden="true" /><span>5Pilot Ops Team</span></article>
    <article><ShieldCheck aria-hidden="true" /><span>Governed Execution</span></article>
    <article><Network aria-hidden="true" /><span>Coordinated Response</span></article>
    <article><RotateCcw aria-hidden="true" /><span>Recovery Readiness</span></article>
    <article><FileCheck2 aria-hidden="true" /><span>Evidence by Design</span></article>
  </div>
</section>
{/* VPILOT_SOC_HERO_END */}
      <PremiumHomeNarrative />

  <section className="vph2-section vph2-gap"><div className="vph2-shell"><Head eyebrow="THE ENTERPRISE OPERATING GAP" title="Security Tools Are Connected to Systems. Security Operations Are Not." lead="Organizations have invested in identity, endpoint, SIEM, vulnerability, cloud, backup, and compliance technologies. Findings, approvals, remediation, monitoring, incidents, recovery, and evidence still move through disconnected teams and records."/><div className="vph2-gap-grid">{gaps.map(([Icon,title,text],i)=><article key={title}><span>0{i+1}</span><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div><blockquote>The challenge is not the absence of security tools. The challenge is the absence of one connected security-operations lifecycle.</blockquote></div></section>

  <section className="vph2-section vph2-proposition"><div className="vph2-shell"><Head eyebrow="THE V PILOT OPERATING PROPOSITION" title="One Accountable Path from Risk Identification to Verified Outcome." lead="V Pilot converts fragmented security work into a governed operating capability across authority, administration, threat intelligence, monitoring, response, recovery, and assurance."/><div className="vph2-op-flow">{operations.map(([Icon,title,text])=><article key={title}><div><Icon/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

  <section className="vph2-section vph2-platform"><div className="vph2-shell"><Head eyebrow="PUDICA INTEGRATED CYBERSECURITY OPERATIONS" title="The Operational Control Plane for Integrated Security Operations" lead="PUDICA connects trusted state, risk, asset intelligence, workflows, approvals, change governance, remediation, monitoring, incident response, recovery, compliance, and evidence through one governed operating record."/><div className="vph2-platform-grid"><div className="vph2-stack"><article><span>APPLICATION LAYER</span><p>NativeTrust Â· Remediation Â· Security Operations Â· Resilience Â· AppSec Â· GRC</p></article><article><span>OPERATIONS LAYER</span><p>Workflows Â· Approvals Â· Changes Â· Incidents Â· Recovery tests Â· Service levels</p></article><article><span>INTELLIGENCE LAYER</span><p>Threat context Â· Risk correlation Â· Control effectiveness Â· Asset criticality</p></article><article><span>DATA LAYER</span><p>Asset graph Â· Business services Â· Identities Â· Configuration Â· Evidence</p></article><article><span>INTEGRATION LAYER</span><p>Microsoft Â· Cloud Â· SIEM Â· Vulnerability Â· Backup Â· Identity Â· Applications</p></article></div><div className="vph2-modules">{modules.map(([Icon,title,text])=><article key={title}><Icon/><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div><div className="vph2-promise">Modules detect and operate security conditions. Shared platform services govern records, workflows, authority, evidence, and accountability. <Link to="/platform">Explore the PUDICA Platform <ArrowRight/></Link></div></div></section>

  <section className="vph2-section vph2-pilots"><div className="vph2-shell"><Head eyebrow="VIRTUAL PILOT OPERATIONS TEAM" title="Five Specialist Teams. One Accountable Operation." lead="5Pilot Operations is V Pilotâ€™s managed-service delivery model. Each Pilot identifies specialist ownership across a security domain, with professional, project-based, co-managed, and continuous operational services."/><div className="vph2-pilot-grid">{pilots.map(([Icon,title,subtitle,text])=><article key={title}><Icon/><span>{subtitle}</span><h3>{title}</h3><p>{text}</p></article>)}</div><Link className="vph2-text-link" to="/company/5pilot-operations">Explore 5Pilot Operations <ArrowRight/></Link></div></section>

  <section className="vph2-section vph2-native"><div className="vph2-shell vph2-native-grid"><div><span>PUDICA NATIVETRUST WORKSPACE</span><h2>Turn Every Device into a Trusted Business Workspace.</h2><p>Unify identity, endpoint, application, browser, mobile, update, protection, response, and lifecycle assurance without creating another disconnected operating record.</p><Link to="/platform/nativetrust-workspace">Explore NativeTrust <ArrowRight/></Link></div><div>{["Inventory & Trust","Provisioning & Lifecycle","Update & Exposure","Application & Browser","Protection & Response","Mobile Workspace","Workspace Assurance"].map(x=><span key={x}><ShieldCheck/>{x}</span>)}</div></div></section>

  <section className="vph2-section"><div className="vph2-shell"><Head eyebrow="INTEGRATED SOLUTIONS" title="Solutions for Business Risk. Operations for Verified Outcomes." lead="Adopt focused solutions while preserving shared platform context, authority, recovery protection, and evidence."/><div className="vph2-solutions"><article><Target/><h3>Secure Business Transformation</h3><p>Integrate security requirements, decision authority, implementation, validation, and evidence into business change.</p></article><article><Network/><h3>Enterprise Risk Management</h3><p>Connect business services, risk, controls, treatment ownership, exceptions, and management reporting.</p></article><article><Zap/><h3>Incident Response & Forensics</h3><p>Coordinate readiness, containment, investigation, evidence preservation, recovery, and post-incident correction.</p></article><article><RotateCcw/><h3>Cyber Resilience & Recovery</h3><p>Govern backup, restoration, BCP/DR testing, ransomware recovery, and trusted service restoration.</p></article></div></div></section>

  <section className="vph2-section vph2-assurance"><div className="vph2-shell vph2-assurance-grid"><div><span>SECURITY ASSURANCE</span><h2>Security Work Continues Through the Verified Outcome.</h2><p>V Pilot does not consider work complete when an alert, assessment, policy, or patch is delivered. The approved control must be implemented, observed, recovery protected, evidence recorded, and remaining risk clearly communicated.</p></div><div>{outcomes.map(x=><span key={x}><CheckCircle2/>{x}</span>)}</div></div></section>

  <section className="vph2-section vph2-confidence"><div className="vph2-shell"><Head eyebrow="BUYER CONFIDENCE" title="Clear Scope. Defined Responsibility. Measurable Operations."/><div className="vph2-confidence-grid"><article><h3>Engagement deliverables</h3><p>Scope, responsibility matrix, owners, runbooks, service levels, transition plan, and reporting calendar.</p></article><article><h3>Operating outputs</h3><p>Trusted-state baseline, prioritized backlog, validated treatment, response and recovery profiles, and evidence packages.</p></article><article><h3>Responsibility boundaries</h3><p>Customer ownership and executive authority remain clear while V Pilot operates contracted capabilities.</p></article><article><h3>Service assurance</h3><p>Operational metrics, SLA reporting, closure rates, detection coverage, recovery results, exceptions, and improvement plans.</p></article></div><div className="vph2-industries"><span>SECURITY OPERATIONS ADAPTED TO YOUR BUSINESS CONTEXT</span>{industries.map(x=><b key={x}><Building2/>{x}</b>)}</div></div></section>

  <section className="vph2-final"><div className="vph2-shell"><div><span>BUILD YOUR OPERATING MODEL</span><h2>Build a Security Operating Model That Can Finish the Work.</h2><p>Begin with one specialist Pilot, combine teams into an Integrated Fleet, or adopt Complete 5Pilot Operations as a managed extension of the internal security organization.</p></div><div><Link to="/contact">Schedule Executive Briefing <ArrowRight/></Link><Link to="/contact">Request Operating-Gap Assessment</Link></div></div></section>
</div>}










