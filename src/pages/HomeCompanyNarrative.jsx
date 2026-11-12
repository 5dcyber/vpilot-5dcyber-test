import { Link } from "react-router-dom";
import {
  ArrowRight, BadgeCheck, BookOpenCheck, CheckCircle2, Eye,
  FlaskConical, Gauge, Layers3, Network, RotateCcw, ShieldCheck,
  Sparkles, Target, UsersRound, Workflow
} from "lucide-react";
import "./vpilot-company-premium.css";

const architecture = [
  [ShieldCheck, "V Pilot", "Accountable managed-security provider"],
  [UsersRound, "5Pilot Operations", "Specialist managed-delivery organization"],
  [Layers3, "PUDICA", "Integrated cybersecurity-operations platform"],
  [Workflow, "ProdSecOps and ProdSecApps", "Infrastructure and application operating frameworks"],
  [FlaskConical, "SecLabs and GoldenVault", "Independent proving and validation systems"],
  [Eye, "5D Threat Intelligence", "Operational decision model across the security lifecycle"],
];

const differentiators = [
  ["01", Target, "Operations, Not Reports", "Pursue findings through approved treatment, implementation, verification and evidenced closure."],
  ["02", FlaskConical, "Production-Relevant Proving", "Validate compatibility, monitoring, rollback and recovery before broad production change."],
  ["03", Eye, "Threat Intelligence Across the Lifecycle", "Apply intelligence to anticipation, observation, response, restoration and assurance."],
  ["04", Workflow, "Human-Governed Automation", "Automate within defined authority, safety, evidence, recovery and exception boundaries."],
  ["05", RotateCcw, "Recovery-Protected Change", "Connect consequential remediation to rollback, backup, restoration and continuity."],
  ["06", BookOpenCheck, "Evidence by Design", "Preserve the complete operating record from decision through verified outcome."],
];

const assurance = [
  [Gauge, "Risk-Driven Operations"],
  [FlaskConical, "Production-Relevant Proving"],
  [BookOpenCheck, "Continuous Evidence"],
  [RotateCcw, "Recovery-Protected Change"],
];

const purpose = [
  [Target, "Purpose", "Security Assurance Through Continuous Operations", "Help organizations convert security requirements into continuously operated, measured and evidenced controls."],
  [Eye, "Vision", "A Trusted Security Operations Partner", "Become a recognized partner for accountable service, operational excellence, validated outcomes and continuous assurance."],
  [Sparkles, "Mission", "Operate. Assure. Improve.", "Pilot customer security operations through risk-driven governance, specialist expertise, production-relevant validation, responsive support and continual improvement."],
];

const principles = [
  ["01", Target, "Understand Before Acting", "Assess business context, assets, dependencies, threats and obligations."],
  ["02", ShieldCheck, "Govern with Authority", "Define ownership, policy, approval, responsibility and risk decisions."],
  ["03", FlaskConical, "Prove Before Production", "Validate material changes, monitoring, rollback and recovery requirements."],
  ["04", Workflow, "Operate Continuously", "Administer, monitor, remediate and improve controls as continuing operations."],
  ["05", RotateCcw, "Protect Recovery", "Connect consequential operations to rollback, backup, restoration and continuity."],
  ["06", BadgeCheck, "Accept Accountability", "Investigate owned service failures, complete corrective action and report outcomes."],
  ["07", BookOpenCheck, "Preserve Evidence", "Maintain traceable approvals, tests, deployments, incidents, exceptions and assurance records."],
  ["08", Sparkles, "Improve Systematically", "Use monitoring, incidents, audits, exercises, metrics and lessons learned to renew the baseline."],
];

const capabilities = [
  [UsersRound, "Specialist Security Domains", "Leadership, IAM, endpoint, SIEM, remediation, incident response, forensics, recovery and assurance."],
  [Layers3, "Cross-Industry Operating Models", "Operating structures adapted to business context, technology, authority, regulation and resilience priorities."],
  [Network, "Flexible Engagement Options", "Begin with one Pilot, coordinate an Integrated Fleet or adopt Complete 5Pilot Operations."],
  [CheckCircle2, "Defined Service Assurance", "Clear scope, responsibility, service levels, evidence requirements, exceptions and corrective-action principles."],
];

export default function HomeCompanyNarrative() {
  return (
    <div className="vpcmp-page vpcmp-page--embedded">
      <section id="about-v-pilot" className="vpcmp-section vpcmp-company-overview">
        <div className="vpcmp-shell">
          <div className="vpcmp-section-head">
            <span>ABOUT V PILOT</span>
            <h2>Accountable Security Operations for a More Resilient Tomorrow.</h2>
            <p>Established in March 2024, V Pilot was created to close the operational gap between security findings, accountable decisions, technical implementation, trusted recovery and management assurance.</p>
          </div>
          <div className="vpcmp-overview-copy">
            <p>V Pilot does not consider security work complete when an assessment, alert, policy or patch is delivered. The work continues until the approved control is implemented, its result is verified, recovery is protected, evidence is recorded and remaining risk is clearly communicated.</p>
            <p>V Pilot Cyber Solutions LLP delivers accountable managed cybersecurity operations through specialist teams, integrated technology, production-relevant validation, recovery-aware execution and continuous evidence.</p>
          </div>
          <div className="vpcmp-architecture-grid">
            {architecture.map(([Icon, title, description]) => (
              <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-v-pilot" className="vpcmp-section vpcmp-principles">
        <div className="vpcmp-shell">
          <div className="vpcmp-section-head"><span>WHY V PILOT</span><h2>Designed to Finish the Security Work.</h2><p>Managed responsibility, validated execution, trusted recovery and continuous assurance.</p></div>
          <div className="vpcmp-principles-grid">
            {differentiators.map(([number, Icon, title, text]) => (
              <article key={number}><span>{number}</span><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="vpcmp-section vpcmp-purpose">
        <div className="vpcmp-shell">
          <div className="vpcmp-section-head"><span>OUR PURPOSE, VISION AND MISSION</span><h2>A Clearer, Safer, More Resilient Tomorrow.</h2></div>
          <div className="vpcmp-purpose-grid">
            {purpose.map(([Icon, label, title, text]) => (
              <article key={label}><Icon aria-hidden="true" /><span>OUR {label.toUpperCase()}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="security-assurance" className="vpcmp-assurance">
        <div className="vpcmp-shell vpcmp-assurance-grid">
          <div>
            <span>OUR OPERATING OBJECTIVE</span><h2>Security Assurance Is Our Operating Objective.</h2>
            <p>Security work continues until the approved control is implemented, its result is verified, recovery is protected, evidence is recorded and remaining risk is clearly communicated.</p>
            <div className="vpcmp-assurance-points">{assurance.map(([Icon, label]) => <span key={label}><Icon aria-hidden="true" />{label}</span>)}</div>
          </div>
          <aside>
            <ShieldCheck aria-hidden="true" /><span>OUR SERVICE ASSURANCE COMMITMENT</span><h3>We Stand Behind the Security Operations We Deliver.</h3>
            <p>V Pilot operates the capabilities assigned through the applicable service agreement and Responsibility Assignment Matrix.</p>
            <p>Customers retain business ownership, executive authority, legal accountability and final risk acceptance.</p>
            <p>Eligible verified service failures receive transparent review, corrective action and applicable extended assurance support under the service agreement.</p>
            <strong>Your security operations are our operational responsibility within the agreed service scope.</strong>
          </aside>
        </div>
      </section>

      <section className="vpcmp-section">
        <div className="vpcmp-shell">
          <div className="vpcmp-section-head"><span>OUR OPERATING PRINCIPLES</span><h2>Principles That Guide Everything We Do.</h2></div>
          <div className="vpcmp-principles-grid">
            {principles.map(([number, Icon, title, text]) => (
              <article key={number}><span>{number}</span><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section id="5pilot-operations" className="vpcmp-section vpcmp-people">
        <div className="vpcmp-shell">
          <div className="vpcmp-section-head"><span>VIRTUAL PILOT OPERATIONS TEAM</span><h2>Five Specialist Teams. One Accountable Operation.</h2><p>The Virtual Pilot Operations Team combines security leadership, technical engineering, managed administration, monitoring, remediation, incident response, forensics, resilience and service management through one shared assurance objective.</p></div>
          <div className="vpcmp-capability-grid">
            {capabilities.map(([Icon, title, text]) => (
              <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className="vpcmp-people-actions"><Link to="/5pilot-operations">Explore 5Pilot Operations <ArrowRight aria-hidden="true" /></Link><Link to="/careers">Explore Careers</Link></div>
        </div>
      </section>
    </div>
  );
}
