import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import FinalHomeNarrative from "./FinalHomeNarrative.jsx";
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
export default function HomePage({ initialSection = null }){
  const location = useLocation();
  useEffect(() => {
    const section = initialSection || new URLSearchParams(location.search).get("section");
    if (!section) { window.scrollTo({ top: 0, behavior: "auto" }); return; }
    const timer = window.setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
    return () => window.clearTimeout(timer);
  }, [initialSection, location.pathname, location.search]);
  return <div className="vph2-page">
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
  <FinalHomeNarrative />
</div>}
