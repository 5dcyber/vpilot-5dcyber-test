import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Box,
  BrainCircuit,
  Building2,
  CalendarDays,
  CheckCircle2,
  Compass,
  DatabaseBackup,
  Eye,
  FileCheck2,
  Flag,
  Flame,
  Gauge,
  KeyRound,
  Network,
  Radar,
  RotateCcw,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  UsersRound,
  Workflow,
  Wrench
} from "lucide-react";
import "./vpilot-final-home.css";

const SHIELD_URL = "/assets/vpilot-hero-shield.png";

function AssuranceEmblem({ compact = false }) {
  const suffix = compact ? "compact" : "hero";
  return (
    <span className={`vpfh-assurance-emblem ${compact ? "is-compact" : ""}`} aria-hidden="true">
      <svg
        className="vpfh-assurance-emblem-svg"
        viewBox="0 0 240 280"
        role="presentation"
        focusable="false"
      >
        <defs>
          <linearGradient id={`shieldEdge-${suffix}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a9f5ff" />
            <stop offset="0.45" stopColor="#20c5e7" />
            <stop offset="1" stopColor="#087eeb" />
          </linearGradient>
          <radialGradient id={`shieldCore-${suffix}`} cx="50%" cy="42%" r="68%">
            <stop offset="0" stopColor="#0b4f82" />
            <stop offset="0.58" stopColor="#052b50" />
            <stop offset="1" stopColor="#021426" />
          </radialGradient>
          <filter id={`shieldGlow-${suffix}`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation={compact ? "2.5" : "5"} result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <path
          className="vpfh-assurance-shield-glow"
          d="M120 12 213 49v77c0 72-42 117-93 143-51-26-93-71-93-143V49L120 12Z"
          fill="none"
          stroke={`url(#shieldEdge-${suffix})`}
          strokeWidth="12"
          opacity="0.34"
          filter={`url(#shieldGlow-${suffix})`}
        />
        <path
          d="M120 14 210 50v75c0 69-40 112-90 138-50-26-90-69-90-138V50L120 14Z"
          fill={`url(#shieldCore-${suffix})`}
          stroke={`url(#shieldEdge-${suffix})`}
          strokeWidth="5"
        />
        <path
          d="M120 31 193 60v63c0 55-31 92-73 116-42-24-73-61-73-116V60l73-29Z"
          fill="none"
          stroke="#7ee9f7"
          strokeWidth="1.6"
          opacity="0.58"
        />

        <g className="vpfh-assurance-compass" transform="translate(120 128)">
          <circle r="56" fill="#031a34" stroke="#8ef2ff" strokeWidth="2.4" opacity="0.96" />
          <circle r="44" fill="none" stroke="#2ccbe7" strokeWidth="1" opacity="0.55" />
          <path d="M0-62 14-17 0-5-14-17Z" fill="#f7fcff" stroke="#c9f8ff" strokeWidth="1" />
          <path d="M62 0 17 14 5 0 17-14Z" fill="#78dff2" stroke="#c9f8ff" strokeWidth="1" />
          <path d="M0 62-14 17 0 5 14 17Z" fill="#e8f7ff" stroke="#c9f8ff" strokeWidth="1" />
          <path d="M-62 0-17-14-5 0-17 14Z" fill="#78dff2" stroke="#c9f8ff" strokeWidth="1" />
          <path d="M0-42 9-9 0 0-9-9Z" fill="#ffffff" />
          <path d="M42 0 9 9 0 0 9-9Z" fill="#d5f8ff" />
          <path d="M0 42-9 9 0 0 9 9Z" fill="#ffffff" />
          <path d="M-42 0-9-9 0 0-9 9Z" fill="#d5f8ff" />
          <circle r="7" fill="#20c5e7" stroke="#ffffff" strokeWidth="2" />
        </g>
      </svg>
    </span>
  );
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
  [
    "compass",
    "Compass Pilot",
    "GRC, Risk & Managed ISMS",
    "Security leadership, enterprise risk, ISO/IEC 27001 readiness, privacy, vendor assurance and policy governance.",
    [
      "CISO as a Service",
      "ISO 27001 certification readiness",
      "Enterprise risk management",
      "Privacy (DPDPA, GDPR and more)",
      "Vendor security assessment"
    ],
    "Governed risk and assurance"
  ],
  [
    "custodian",
    "Custodian Pilot",
    "Identity & Endpoint Operations",
    "Identity lifecycle, privileged access, endpoints, Intune, servers and secure configuration to enable a trusted workspace.",
    [
      "Entra ID and Active Directory",
      "Endpoint and Intune management",
      "BitLocker, LAPS and device hardening",
      "Application and browser controls",
      "Zero-trust endpoint operations"
    ],
    "Trusted identities and devices"
  ],
  [
    "vigil",
    "Vigil Pilot",
    "SIEM & Detection Operations",
    "Continuous monitoring, detection engineering and threat hunting across cloud, on-premises and endpoint environments.",
    [
      "SIEM onboarding and tuning",
      "Detection engineering",
      "Threat hunting and investigation",
      "Alert triage and escalation",
      "Security telemetry and analytics"
    ],
    "Continuous, accountable visibility"
  ],
  [
    "art",
    "ART Pilot",
    "Remediation & Threat Response",
    "Exposure validation, vulnerability remediation and proactive threat response across infrastructure and applications.",
    [
      "VAPT and risk reduction",
      "Configuration and patch remediation",
      "Software and package vulnerability",
      "Cloud and infrastructure hardening",
      "Threat-informed response"
    ],
    "Verified risk reduction"
  ],
  [
    "phoenix",
    "Phoenix Pilot",
    "Incident, Forensics & Recovery",
    "Incident readiness, digital forensics, backup management and trusted recovery.",
    [
      "Incident response and containment",
      "Digital and cloud forensics",
      "Backup monitoring and validation",
      "Disaster recovery and BCP",
      "Ransomware recovery"
    ],
    "Preserved evidence and recovery"
  ]
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

    <section className="vpfh-objective-band" id="security-assurance" aria-labelledby="vpfh-objective-title">
      <div className="vpfh-shell vpfh-objective-layout">
        <div className="vpfh-objective-copy">
          <span>BUILT ON TRUST, GOVERNANCE AND ACCOUNTABILITY</span>
          <h2 id="vpfh-objective-title">Security Assurance Is Our Objective</h2>
          <p>V Pilot was established in March 2024 to make security operations more accountable, systematic and continuously assured. We operate within an ISO/IEC 27001-aligned framework and follow industry best practices to deliver trusted, measurable outcomes.</p>
        </div>

        <div className="vpfh-objective-metrics" aria-label="V Pilot security assurance commitments">
          <article>
            <strong>100%</strong>
            <span>Focus on<br />Security Assurance</span>
          </article>
          <article>
            <strong>5</strong>
            <span>Specialist<br />Pilot Teams</span>
          </article>
          <article>
            <strong>1</strong>
            <span>Integrated<br />Platform (PUDICA)</span>
          </article>
          <article>
            <strong aria-label="Continuous">∞</strong>
            <span>Continuous<br />Improvement</span>
          </article>
        </div>
      </div>
    </section>

    <section className="vpfh-section vpfh-pilots" id="five-pilot-operations">
      <div className="vpfh-shell">
        <div className="vpfh-section-bar">
          <div>
            <span>THE 5PILOT TEAMS</span>
            <h2>Specialized Expertise. Integrated Outcomes.</h2>
          </div>
          <p>Different domains. A unified force.</p>
        </div>

        <div className="vpfh-pilot-grid">
          {pilots.map(([kind, name, domain, narrative, capabilities, outcome]) => (
            <article className={kind} key={name}>
              <div className="vpfh-pilot-scene" aria-hidden="true">
                <PilotIcon kind={kind} />
                <span>{name}</span>
              </div>

              <div className="vpfh-pilot-body">
                <div className="vpfh-pilot-title">
                  <PilotIcon kind={kind} compact />
                  <div>
                    <h3>{name}</h3>
                    <b>{domain}</b>
                  </div>
                </div>

                <p>{narrative}</p>

                <ul>
                  {capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>

                <Link to="/5pilot-operations" aria-label={`Explore ${name}: ${outcome}`}>
                  <span>{outcome}</span>
                  <ArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="vpfh-lifecycle">
      <div className="vpfh-shell">
        <div className="vpfh-section-bar"><div><span>HOW 5PILOT OPERATIONS WORKS</span><h2>One Lifecycle. Every Pilot. Better Security Outcomes.</h2></div><p>The 5Pilot teams operate through a common framework, shared context and a single platform to deliver coordinated security operations.</p></div>
        <div className="vpfh-lifecycle-row">{lifecycle.map(([Icon,t,d],i)=><article key={t}><div className="vpfh-lifecycle-icon"><Icon /></div><h3>{t}</h3><p>{d}</p>{i<lifecycle.length-1&&<ArrowRight className="vpfh-flow-arrow" />}</article>)}</div>
      </div>
    </section>

    <section className="vpfh-section vpfh-engagement">
      <div className="vpfh-shell">
        <div className="vpfh-section-bar"><div><span>ENGAGEMENT OPTIONS</span><h2>Start with One. Build Your Fleet. Or Transfer the Operation.</h2></div><p>Flexible engagement models for your business needs.</p></div>
        <div className="vpfh-engagement-grid">
          <article><div className="vpfh-engagement-head"><span className="vpfh-engagement-icon"><Box /></span><div><h3>Single Pilot</h3><p>One specialist team for a defined requirement.</p></div></div><ul><li>Clear scope and service levels</li><li>Dedicated experts</li><li>Fast time to value</li><li>Full reporting and evidence</li></ul><Link to="/services">Choose a Pilot <ArrowRight /></Link></article>
          <article><div className="vpfh-engagement-head"><span className="vpfh-engagement-icon"><Network /></span><div><h3>Integrated Fleet</h3><p>Two or more Pilots around a shared risk.</p></div></div><ul><li>Coordinated operations</li><li>Shared intelligence and workflows</li><li>Consolidated reporting</li><li>Greater operational impact</li></ul><Link to="/contact?intent=integrated-fleet">Design Your Fleet <ArrowRight /></Link></article>
          <article><div className="vpfh-engagement-head"><span className="vpfh-engagement-icon"><Star /></span><div><h3>Complete 5Pilot Operations</h3><p>All five teams as a managed security function.</p></div></div><ul><li>End-to-end security operations</li><li>Unified governance and SLAs</li><li>Shared responsibility model</li><li>Continuous assurance and improvement</li></ul><Link to="/services/complete-5pilot-operations">Explore Complete 5Pilot <ArrowRight /></Link></article>
        </div>
      </div>
    </section>

    <section className="vpfh-pudica-overview" aria-labelledby="vpfh-pudica-title">
      <div className="vpfh-pudica-hero">
        <div className="vpfh-shell vpfh-pudica-hero-grid">
          <div className="vpfh-pudica-intro">
            <span>PLATFORM</span>
            <img className="vpfh-pudica-brand-lockup" src="/assets/pudica-approved-lockup.png" alt="PUDICA Integrated Cybersecurity Operations" />
            <p className="vpfh-pudica-promise">One operational system for governing, protecting, remediating, recovering, and assuring the organization’s digital environment.</p>
            <p>PUDICA connects people, technology and processes through a unified platform that turns security intelligence into validated actions and measurable outcomes.</p>
            <div className="vpfh-pudica-actions">
              <Link className="primary" to="/platform">Explore the Platform <ArrowRight aria-hidden="true" /></Link>
              <Link className="secondary" to="/contact?intent=pudica-overview">Request Platform Overview</Link>
            </div>
            <div className="vpfh-pudica-proof">
              <span><Network aria-hidden="true" />Unified Operations<small>Across Security Domains</small></span>
              <span><ShieldCheck aria-hidden="true" />Built for<small>Security Assurance</small></span>
              <span><Gauge aria-hidden="true" />Scalable for<small>Any Enterprise</small></span>
              <span><FileCheck2 aria-hidden="true" />Evidence by Design<small>ISO/IEC 27001 aligned</small></span>
            </div>
          </div>

          <div className="vpfh-pudica-architecture" aria-label="PUDICA platform architecture">
            <div className="vpfh-pudica-platform-mark">
              <img className="vpfh-pudica-platform-emblem" src="/assets/pudica-approved-emblem.png" alt="" aria-hidden="true" />
              <img className="vpfh-pudica-platform-wordmark" src="/assets/pudica-approved-wordmark.png" alt="PUDICA Integrated Cybersecurity Operations" />
            </div>

            <div className="vpfh-pudica-module-row">
              <article><KeyRound aria-hidden="true" /><b>NativeTrust<br />Workspace</b></article>
              <article><Wrench aria-hidden="true" /><b>Autonomous<br />Remediation</b></article>
              <article><Radar aria-hidden="true" /><b>Integrated<br />Security Operations</b></article>
              <article><DatabaseBackup aria-hidden="true" /><b>Autonomous<br />Resilience</b></article>
              <article><ShieldCheck aria-hidden="true" /><b>Application<br />Security Governance</b></article>
              <article><FileCheck2 aria-hidden="true" /><b>GRC &amp;<br />Compliance</b></article>
            </div>

            <div className="vpfh-pudica-shared-layer">
              <strong>Shared Operations Services</strong>
              <span>Asset Graph&nbsp; | &nbsp;Risk &amp; Control Register&nbsp; | &nbsp;Service Operations Hub&nbsp; | &nbsp;Approvals&nbsp; | &nbsp;Evidence Vault&nbsp; | &nbsp;Analytics &amp; Reporting</span>
            </div>
            <div className="vpfh-pudica-integration-layer">
              <strong>Integrations</strong>
              <span>Microsoft&nbsp; | &nbsp;Cloud&nbsp; | &nbsp;Security Tools&nbsp; | &nbsp;ITSM&nbsp; | &nbsp;SIEM&nbsp; | &nbsp;Business Systems</span>
            </div>
            <div className="vpfh-pudica-lifecycle" aria-label="PUDICA operational lifecycle">
              <span>ANTICIPATE</span><span>OBSERVE</span><span>RESPOND</span><span>RESTORE</span><span>PROVE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="vpfh-pudica-solutions">
        <div className="vpfh-shell">
          <div className="vpfh-pudica-section-head">
            <div><span>THE PUDICA PLATFORM</span><h2>A Unified Architecture for Continuous Security Operations</h2></div>
            <p>PUDICA integrates specialized security modules on a common operational foundation. Modules detect and operate security conditions. Shared platform services govern records, workflow, approvals, evidence, and accountability.</p>
          </div>

          <div className="vpfh-pudica-solution-grid">
            <article><KeyRound /><h3>NativeTrust Workspace</h3><p>Identity, device, application, browser and mobile security.</p><Link to="/platform/nativetrust-workspace">Learn More <ArrowRight /></Link></article>
            <article><Wrench /><h3>Autonomous Remediation</h3><p>Vulnerability, configuration and corrective-action operations.</p><Link to="/platform/autonomous-remediation">Learn More <ArrowRight /></Link></article>
            <article><Radar /><h3>Integrated Security Operations</h3><p>Monitoring, detection, investigation and incident response.</p><Link to="/platform/integrated-security-operations">Learn More <ArrowRight /></Link></article>
            <article><DatabaseBackup /><h3>Autonomous Resilience</h3><p>Backup governance, recovery validation and resilience assurance.</p><Link to="/platform/autonomous-resilience">Learn More <ArrowRight /></Link></article>
            <article><ShieldCheck /><h3>Application Security Governance</h3><p>Application risk, testing, remediation and lifecycle assurance.</p><Link to="/platform/application-security-governance">Learn More <ArrowRight /></Link></article>
            <article><FileCheck2 /><h3>GRC &amp; Compliance</h3><p>Risk, controls, policies, audits, evidence and ISO/IEC 27001.</p><Link to="/platform/grc-compliance">Learn More <ArrowRight /></Link></article>

            <aside>
              <span>WHY A UNIFIED PLATFORM?</span>
              {[
                "Single asset, risk and evidence model",
                "No duplicate ticketing or data silos",
                "Faster, safer and more accountable operations",
                "Consistent governance across all domains",
                "Lower operational cost and complexity",
                "Built for compliance and audit readiness"
              ].map((item) => <p key={item}><CheckCircle2 aria-hidden="true" />{item}</p>)}
            </aside>
          </div>
        </div>
      </div>

      <div className="vpfh-pudica-workflow">
        <div className="vpfh-shell vpfh-pudica-workflow-grid">
          <div>
            <span>HOW PUDICA WORKS</span>
            <h2>From Security Intelligence to Verified Outcomes</h2>
            <p>PUDICA operationalizes the entire security lifecycle through a governed and automated workflow.</p>
            <div className="vpfh-pudica-flow">
              {[
                [BrainCircuit, "Sense", "Acquire trusted context"],
                [Network, "Correlate", "Enrich with risk and intelligence"],
                [Scale, "Decide", "Assess risk and obtain approval"],
                [Target, "Prove", "Validate in SecLabs and GoldenVault"],
                [Wrench, "Execute", "Automate and deploy safely"],
                [CheckCircle2, "Verify", "Retest and confirm closure"],
                [FileCheck2, "Assure", "Preserve evidence and improve"]
              ].map(([Icon, title, copy], index, rows) => <article key={title}><Icon aria-hidden="true" /><b>{title}</b><small>{copy}</small>{index < rows.length - 1 && <ArrowRight className="flow-arrow" aria-hidden="true" />}</article>)}
            </div>
          </div>

          <aside className="vpfh-platform-promise">
            <span>OUR PLATFORM PROMISE</span>
            <i aria-hidden="true" />
            <strong>One operational system for governing, protecting, remediating, recovering, and assuring.</strong>
          </aside>
        </div>
      </div>
    </section>

    <section className="vpfh-section vpfh-journey"><div className="vpfh-shell"><Heading eyebrow="OUR JOURNEY" title="From Vision to a Trusted Security Partner." />
      <div className="vpfh-timeline">{[["MAR 2024","V Pilot Established"],["MID 2024","Operating Framework Formalized"],["LATE 2024","PUDICA Development Initiated"],["2025","5Pilot Operating Model Structured"],["CURRENT DIRECTION","Portfolio and Assurance Expansion"],["BEYOND","Continuous Innovation"]].map(([d,t])=><article key={d}><span>{d}</span><h3>{t}</h3></article>)}</div>
    </div></section>

    <section className="vpfh-section vpfh-principles"><div className="vpfh-shell"><Heading eyebrow="OUR OPERATING PRINCIPLES" title="Principles That Guide Everything We Do." />
      <div className="vpfh-principle-grid">{principles.map(([Icon,n,t,d])=><article key={n}><Icon /><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
    </div></section>

    <section className="vpfh-people-premium" aria-labelledby="vpfh-people-title">
      <div className="vpfh-people-premium-top">
        <div className="vpfh-people-story">
          <span>OUR PEOPLE</span>
          <h2 id="vpfh-people-title">Expertise with Purpose.</h2>
          <p>Our people combine deep technical expertise, operational experience and a shared commitment to security assurance. The Virtual Pilot Operations Team works as a unified force to deliver measurable outcomes.</p>
          <Link to="/5pilot-operations">Meet the 5Pilot Teams <ArrowRight aria-hidden="true" /></Link>
        </div>

        <div className="vpfh-people-visual" aria-hidden="true">
          <div className="vpfh-people-manifesto"><span>DIFFERENT<br />EXPERTISE</span><b>ONE MISSION</b><small>A SAFER TOMORROW</small></div>
        </div>

        <div className="vpfh-global-presence">
          <span>OUR GLOBAL PRESENCE</span>
          <h2>Trusted Across Industries.</h2>
          <div className="vpfh-industry-icons">
            {industries.slice(0, 7).map((industry) => <div key={industry}><Building2 aria-hidden="true" /><b>{industry}</b></div>)}
          </div>
          <div className="vpfh-presence-proof">
            <article><strong>5</strong><span>Specialist<br />Pilot Teams</span></article>
            <article><strong>1</strong><span>Integrated<br />Platform</span></article>
            <article><strong>3</strong><span>Flexible<br />Engagement Models</span></article>
            <article><strong>24×7</strong><span>Operational<br />Readiness</span></article>
            <article><strong>∞</strong><span>Continuous<br />Improvement</span></article>
          </div>
        </div>
      </div>

      <div className="vpfh-conversion-premium">
        <div className="vpfh-conversion-message">
          <h2>A Security Partner That Stands Behind the Operation.</h2>
          <p>Let’s discuss how V Pilot can support your security priorities.</p>
        </div>
        <div className="vpfh-conversion-actions">
          <Link className="primary" to="/contact?intent=executive-briefing">Schedule Executive Briefing <ArrowRight aria-hidden="true" /></Link>
          <Link className="secondary" to="/contact">Contact Our Team</Link>
        </div>
        <div className="vpfh-conversion-principles"><span>STRONGER BUSINESSES</span><span>SAFER PEOPLE</span><span>MORE RESILIENT TOMORROW</span></div>
      </div>
    </section>

    <section className="vpfh-final"><div className="vpfh-shell"><div><span>READY TO STRENGTHEN YOUR SECURITY OPERATIONS?</span><h2>Let’s Build a Safer, Stronger Tomorrow.</h2><p>Discover how V Pilot can deliver accountable security operations and continuous assurance for your organization.</p></div><div><Link className="primary" to="/contact?intent=executive-briefing">Schedule Executive Briefing <ArrowRight /></Link><Link className="secondary" to="/contact?intent=operating-gap-assessment">Request Operating-Gap Assessment</Link></div></div></section>
  </div>;
}
