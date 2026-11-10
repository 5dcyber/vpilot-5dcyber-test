import { Link } from "react-router-dom";
import {
  ArrowRight, BadgeCheck, BookOpenCheck, CheckCircle2, Eye,
  FlaskConical, Gauge, Layers3, Network, RotateCcw, ShieldCheck,
  Sparkles, Target, UsersRound, Workflow
} from "lucide-react";
import "./vpilot-company-premium.css";

const purpose = [
  [Target, "Purpose", "Security Assurance Through Continuous Operations", "Help organizations convert security requirements into continuously operated, measured, and evidenced controls."],
  [Eye, "Vision", "A Trusted Security Operations Partner", "Become a recognized partner for accountable service, operational excellence, validated outcomes, and continuous assurance."],
  [Sparkles, "Mission", "Operate. Assure. Improve.", "Pilot customer security operations through risk-driven governance, specialist expertise, production-relevant validation, responsive support, and continual improvement."],
];

const assurance = [
  [Gauge, "Risk-Driven Operations"],
  [FlaskConical, "Production-Relevant Proving"],
  [BookOpenCheck, "Continuous Evidence"],
  [RotateCcw, "Stronger Resilience"],
];

const timeline = [
  ["March 2024", "V Pilot Established", "Founded to make enterprise security operations more accountable, systematic, measurable, recoverable, and continuously assured."],
  ["Mid 2024", "ProdSecOps Formalized", "Infrastructure-security operations structured around context, authority, proving, execution, recovery, and evidence."],
  ["Late 2024", "PUDICA Development Initiated", "Integrated cybersecurity-operations platform development began around one governed operating record."],
  ["2025", "5Pilot Operations Structured", "Compass, Custodian, Vigil, ART, and Phoenix organized as one managed delivery model."],
  ["2026", "Enterprise Services Expanded", "Broader services across governance, identity, monitoring, remediation, incident response, forensics, and recovery."],
  ["Beyond", "Continuous Innovation", "Ongoing improvement of platform capability, proving methods, operating frameworks, and customer outcomes."],
];

const principles = [
  ["01", Target, "Understand Before Acting", "Assess business context, assets, dependencies, threats, and obligations."],
  ["02", ShieldCheck, "Govern with Authority", "Define ownership, policy, approval, responsibility, and risk decisions."],
  ["03", FlaskConical, "Prove Before Production", "Validate material changes, monitoring, rollback, and recovery requirements."],
  ["04", Workflow, "Operate Continuously", "Administer, monitor, remediate, and improve controls as continuing operations."],
  ["05", RotateCcw, "Protect Recovery", "Connect consequential operations to rollback, backup, restoration, and continuity."],
  ["06", BadgeCheck, "Accept Accountability", "Investigate owned service failures, complete corrective action, and report outcomes."],
  ["07", BookOpenCheck, "Preserve Evidence", "Maintain traceable approvals, tests, deployments, incidents, exceptions, and assurance records."],
  ["08", Sparkles, "Improve Systematically", "Use monitoring, incidents, audits, exercises, metrics, and lessons learned to renew the baseline."],
];

const capabilities = [
  [UsersRound, "Specialist Security Domains", "Leadership, IAM, endpoint, SIEM, remediation, incident response, forensics, recovery, and assurance."],
  [Layers3, "Cross-Industry Operating Models", "Operating structures adapted to business context, technology, authority, regulation, and resilience priorities."],
  [Network, "Flexible Engagement Options", "Begin with one Pilot, coordinate an Integrated Fleet, or adopt Complete 5Pilot Operations."],
  [CheckCircle2, "Defined Service Assurance", "Clear scope, responsibility, service levels, evidence requirements, exceptions, and corrective-action principles."],
];

export default function CompanyPage(){
  return <div className="vpcmp-page">
    <section className="vpcmp-hero">
      <div className="vpcmp-shell vpcmp-hero-grid">
        <div className="vpcmp-hero-copy">
          <span>COMPANY</span>
          <h1>Accountable Security Operations for a <em>More Resilient Tomorrow.</em></h1>
          <strong>We Pilot Your Security Operations.</strong>
          <p>V Pilot Cyber Solutions LLP was established in March 2024 with one focused objective: to make enterprise security operations more accountable, systematic, measurable, recoverable, and continuously assured.</p>
          <p>V Pilot works as an extension of customer security, IT, risk, compliance, and resilience teams to operate agreed responsibilities, validate material changes, monitor control effectiveness, coordinate incidents, protect recovery, and preserve management evidence.</p>
          <div className="vpcmp-actions"><a href="#story">Our Story <ArrowRight/></a><Link to="/contact">Schedule Executive Briefing</Link></div>
        </div>
        <aside className="vpcmp-hero-rail"><div><span>ESTABLISHED</span><b>MARCH 2024</b></div><div><span>BUILT FOR</span><b>SECURITY ASSURANCE</b></div><ul><li>People</li><li>Platform</li><li>Proving</li><li>Operations</li><li>Outcomes</li></ul></aside>
      </div>
      <div className="vpcmp-shell vpcmp-hero-proof"><span><UsersRound/>People</span><span><Layers3/>Platform</span><span><FlaskConical/>Proving</span><span><Workflow/>Operations</span><span><ShieldCheck/>Assurance</span></div>
    </section>

    <section className="vpcmp-section vpcmp-purpose"><div className="vpcmp-shell"><div className="vpcmp-section-head"><span>OUR PURPOSE, VISION AND MISSION</span><h2>A Clearer, Safer, More Resilient Tomorrow.</h2></div><div className="vpcmp-purpose-grid">{purpose.map(([Icon,label,title,text])=><article key={label}><Icon/><span>OUR {label.toUpperCase()}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="vpcmp-assurance"><div className="vpcmp-shell vpcmp-assurance-grid"><div><span>OUR SPECIAL OBJECTIVE</span><h2>Security Assurance Is Our Operating Objective.</h2><p>V Pilot does not consider security work complete when an assessment, alert, policy, or patch is delivered. The work continues until the approved control is implemented, its result is verified, recovery is protected, evidence is recorded, and remaining risk is clearly communicated.</p><div className="vpcmp-assurance-points">{assurance.map(([Icon,label])=><span key={label}><Icon/>{label}</span>)}</div></div><aside><ShieldCheck/><span>OUR SERVICE ASSURANCE COMMITMENT</span><h3>We Stand Behind the Security Operations We Deliver.</h3><p>If a material incident is independently verified to have resulted primarily from V Pilot’s failure to perform a documented and contracted security operation, V Pilot will complete a formal service review and corrective-action program.</p><p>Subject to the applicable agreement, eligibility conditions, customer dependencies, and agreed exclusions, V Pilot may provide up to six months of additional support for the affected service area without additional professional-service charges.</p><strong>Your security operations are our operational responsibility within the agreed service scope.</strong></aside></div></section>

    <section className="vpcmp-section" id="story"><div className="vpcmp-shell"><div className="vpcmp-section-head"><span>OUR JOURNEY</span><h2>From Vision to a Trusted Security Partner.</h2></div><div className="vpcmp-timeline">{timeline.map(([date,title,text],index)=><article key={date}><i>{String(index+1).padStart(2,"0")}</i><span>{date}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="vpcmp-section vpcmp-principles"><div className="vpcmp-shell"><div className="vpcmp-section-head"><span>OUR OPERATING PRINCIPLES</span><h2>Principles That Guide Everything We Do.</h2></div><div className="vpcmp-principles-grid">{principles.map(([number,Icon,title,text])=><article key={number}><span>{number}</span><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="vpcmp-section vpcmp-people"><div className="vpcmp-shell"><div className="vpcmp-section-head"><span>OUR PEOPLE AND OPERATING REACH</span><h2>Expertise with Purpose.</h2><p>The Virtual Pilot Operations Team combines security leadership, technical engineering, managed administration, monitoring, remediation, incident response, forensics, resilience, and service management through one shared assurance objective.</p></div><div className="vpcmp-capability-grid">{capabilities.map(([Icon,title,text])=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div><div className="vpcmp-people-actions"><Link to="/company/5pilot-operations">Meet the 5Pilot Teams <ArrowRight/></Link><Link to="/careers">Explore Careers</Link></div></div></section>

    <section className="vpcmp-final"><div className="vpcmp-shell"><div><span>BUILD YOUR OPERATING MODEL</span><h2>A Security Partner That Stands Behind the Operation.</h2><p>Discuss the security priorities, operating gaps, decision authorities, recovery objectives, and assurance requirements that matter to the business.</p></div><div><Link to="/contact">Schedule Executive Briefing <ArrowRight/></Link><Link to="/contact">Contact V Pilot</Link></div></div></section>
  </div>;
}
