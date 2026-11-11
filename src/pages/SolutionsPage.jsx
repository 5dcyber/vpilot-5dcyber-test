import { Link } from "react-router-dom";
import {
  ArrowRight, Check, ShieldCheck, Network, Workflow, Gauge, Building2,
  RadioTower, Factory, Landmark, HeartPulse, Zap, BriefcaseBusiness,
  SearchCheck, Layers3, RefreshCw, Code2, Scale, Target, Compass,
  ClipboardCheck, Rocket, Activity, FileCheck2, Store
} from "lucide-react";
import "./vpilot-solutions-premium.css";

const portfolio = [
  { title:"PUDICA NativeTrust Workspace", subtitle:"Trusted endpoint and workspace operations", image:"/assets/solutions-nativetrust-3d.png", to:"/solutions/nativetrust-workspace", items:["Workspace discovery","Identity and device trust","Endpoint compliance","Application and browser governance","Mobile and data protection","Lifecycle evidence"] },
  { title:"Autonomous Remediation", subtitle:"From finding to verified closure", image:"/assets/solutions-remediation-3d.png", to:"/solutions/autonomous-remediation", items:["Exposure correlation","Risk-based prioritization","GoldenVault validation","Governed implementation","Retesting","Evidence-backed closure"] },
  { title:"Integrated Security Operations", subtitle:"Continuous visibility and coordinated response", image:"/assets/solution-secops.png", to:"/solutions/integrated-security-operations", items:["Telemetry onboarding","Detection engineering","Threat intelligence","Investigation","Incident orchestration","Forensic evidence"] },
  { title:"Autonomous Resilience", subtitle:"Recovery managed as a security control", image:"/assets/solution-resilience.png", to:"/solutions/autonomous-resilience", items:["Backup governance","Recovery validation","Restore testing","Ransomware readiness","BCP/DR exercises","Recovery evidence"] },
  { title:"Application Security Governance", subtitle:"Secure applications throughout the lifecycle", image:"/assets/solution-appsec.png", to:"/solutions/application-security-governance", items:["Application risk","Threat modelling","VAPT and API security","Release assurance","Runtime monitoring","Remediation ownership"] },
  { title:"GRC & Compliance", subtitle:"Risk decisions supported by operational evidence", image:"/assets/solution-grc.png", to:"/solutions/grc-compliance", items:["Enterprise risk","ISO/IEC 27001 operations","Privacy readiness","Supplier assurance","Control testing","Audit evidence"] }
];

const industries = [
  [Store, "Retail", "Secure stores, commerce, payment dependencies and recovery."],
  [RadioTower, "Telecom", "Protect critical infrastructure, privileged access and service resilience."],
  [Factory, "Manufacturing", "Secure IT, engineering access, legacy platforms and production recovery."],
  [Landmark, "Financial Services", "Strengthen identity, monitoring, resilience and regulatory evidence."],
  [HeartPulse, "Healthcare", "Protect information, clinical availability, endpoints and continuity."],
  [Zap, "Energy & Utilities", "Secure remote operations, access, response and operational recovery."],
  [Building2, "Public Sector", "Improve identity, endpoint security, citizen services and assurance."],
  [BriefcaseBusiness, "Professional Services", "Protect remote work, client data, cloud apps and collaboration."]
];

const approach = [
  [Compass,"Understand","Business context, services, risks, obligations and authority."],
  [Layers3,"Design","Target architecture, operating model, responsibilities and roadmap."],
  [SearchCheck,"Validate","Test integrations, monitoring, rollback and recovery."],
  [Rocket,"Implement","Deploy approved controls through staged, governed change."],
  [Activity,"Operate","Administer, detect, remediate, respond, recover and report."],
  [ShieldCheck,"Assure","Verify effectiveness, preserve evidence and improve continuously."]
];

const outcomes = [
  [Gauge,"Faster Treatment","Reduce delays from finding through authorized and verified closure."],
  [Target,"Reduced Unresolved Exposure","Prioritize and close material risks through connected workflows."],
  [FileCheck2,"Improved Audit Readiness","Maintain traceable control, change, incident and recovery evidence."],
  [Workflow,"Greater Operational Efficiency","Reduce duplicated workflows, fragmented records and repeated evidence work."],
  [RefreshCw,"Stronger Business Resilience","Improve response coordination, restoration confidence and continuity."],
  [ShieldCheck,"Increased Management Confidence","Provide ownership, risk visibility, metrics and residual-risk decisions."]
];

function SectionHeading({eyebrow,title,summary,light=false}) {
  return <div className={`vsol-head ${light ? "is-light" : ""}`}>
    <span>{eyebrow}</span><h2>{title}</h2>{summary && <p>{summary}</p>}
  </div>;
}

export default function SolutionsPage(){
  return <div className="vsol-page">
    <section id="solutions-top" className="vsol-hero">
      <div className="vsol-shell vsol-hero__inner">
        <div className="vsol-hero__copy">
          <span className="vsol-eyebrow">ENTERPRISE CYBERSECURITY SOLUTIONS</span>
          <h1>Solve Security Challenges as <em>Connected Business Outcomes</em></h1>
          <h2>Secure Today. Enable Tomorrow.</h2>
          <p>V Pilot delivers integrated cybersecurity solutions that help organizations transform securely, operate continuously, manage risk, respond to threats, and remain resilient.</p>
          <p>Every solution combines PUDICA, 5D Threat Intelligence, SecLabs validation, GoldenVault testing, and specialist delivery through 5Pilot Operations.</p>
          <div className="vsol-actions"><Link className="vsol-btn is-primary" to="/contact">Discuss Your Security Priorities <ArrowRight/></Link><a className="vsol-btn is-secondary" href="#solutions-portfolio">Explore Solutions</a></div>
        </div>
      </div>
    </section>

    <section id="solutions-portfolio" className="vsol-section vsol-surface-light">
      <div className="vsol-shell"><SectionHeading eyebrow="OUR SOLUTIONS" title="A Connected Security Operations Portfolio" summary="Specialized solution families address distinct business risks while sharing one governed operating record across PUDICA."/>
        <div className="vsol-portfolio">{portfolio.map((x)=><article className="vsol-card" key={x.title}>
          <img src={x.image} alt=""/><div className="vsol-card__body"><h3>{x.title}</h3><strong>{x.subtitle}</strong><ul>{x.items.map(i=><li key={i}><Check/>{i}</li>)}</ul><Link to={x.to}>Explore solution <ArrowRight/></Link></div>
        </article>)}</div>
      </div>
    </section>

    <section id="solutions-nativetrust" className="vsol-section vsol-feature vsol-feature--native">
      <div className="vsol-shell vsol-feature__grid"><div className="vsol-feature__copy"><SectionHeading eyebrow="SOLUTION 01" title="PUDICA NativeTrust Workspace" summary="Turn approved corporate devices into continuously verified, encrypted, policy-governed and evidence-backed business workspaces."/>
        <p>NativeTrust integrates Microsoft Entra ID, Intune, Defender, Conditional Access, Windows security and Microsoft 365 with PUDICA governance, risk, change, incident, remediation and evidence services.</p>
        <div className="vsol-chip-grid">{["Workspace Inventory & Trust","Provisioning & Lifecycle","Update & Exposure Assurance","Application & Browser Governance","Workspace Protection & Response","Mobile Workspace Trust","Workspace Assurance"].map(x=><span key={x}>{x}</span>)}</div>
        <Link className="vsol-text-link" to="/platform/nativetrust-workspace">Explore NativeTrust Workspace <ArrowRight/></Link></div>
        <img className="vsol-feature__visual" src="/assets/solutions-nativetrust-3d.png" alt="Conceptual visual representing trusted workspace security operations."/>
      </div>
    </section>

    <section id="solutions-remediation" className="vsol-section vsol-feature vsol-feature--dark">
      <div className="vsol-shell vsol-feature__grid is-reverse"><img className="vsol-feature__visual" src="/assets/solutions-remediation-3d.png" alt="Conceptual visual representing governed autonomous remediation."/>
        <div className="vsol-feature__copy"><SectionHeading light eyebrow="SOLUTION 02" title="PUDICA Autonomous Remediation" summary="From finding to verified remediation."/>
          <p>PUDICA correlates scanner findings with actual configuration state, business criticality, threat context, dependencies, exceptions and recovery readiness before approved execution.</p>
          <div className="vsol-taxonomy">{["OS Kernel & Base System","Middleware & Service Layer","Database & Data Platform","Enterprise Management & Security","Network & Security Edge","Standalone Software Packages"].map((x,i)=><span key={x}><b>{i+1}</b>{x}</span>)}</div>
          <p className="vsol-flow">Discover â†’ Correlate â†’ Assess â†’ Decide â†’ Prove â†’ Approve â†’ Execute â†’ Verify â†’ Assure</p>
        </div>
      </div>
    </section>

    <section id="solutions-integrated" className="vsol-section vsol-model">
      <div className="vsol-shell"><SectionHeading light eyebrow="SOLUTIONS 03â€“06" title="Operate, Respond, Recover, and Govern through One Model" summary="Four connected solution families share context, workflows, validation, evidence and accountability."/>
        <img src="/assets/solutions-integrated-model-3d.png" alt="Conceptual visual representing integrated security operations, resilience, application security, and governance."/>
        <div className="vsol-model__cards">{portfolio.slice(2).map(x=><article key={x.title}><h3>{x.title}</h3><p>{x.subtitle}</p><Link to={x.to}>Explore <ArrowRight/></Link></article>)}</div>
      </div>
    </section>

    <section id="solutions-foundation" className="vsol-section vsol-foundation">
      <div className="vsol-shell"><SectionHeading eyebrow="SHARED PLATFORM FOUNDATION" title="Shared Services Power Every Solution" summary="Every solution references common assets, risk, authority, workflow, incidents, remediation, evidence and accountability."/>
        <div className="vsol-foundation__grid"><img src="/assets/solutions-foundation-3d.png" alt="Conceptual visual representing the shared PUDICA platform foundation."/><div className="vsol-service-grid">{["Asset Graph","Service Operations Hub","Risk & Control Register","Approval & Governance Engine","Change Governance","Incident Response Center","ARC Remediation","Evidence Vault","Analytics & Reporting","Microsoft Security Connector"].map(x=><span key={x}>{x}</span>)}</div></div>
      </div>
    </section>

    <section id="solutions-business-outcomes" className="vsol-section vsol-surface-light">
      <div className="vsol-shell"><SectionHeading eyebrow="ENTERPRISE SOLUTIONS BY BUSINESS OUTCOME" title="Connected Solutions for Real Business Risk" summary="Apply coordinated solution patterns to transformation, risk, response, recovery, compliance and data protection."/>
        <div className="vsol-outcome-grid">{["Secure Business Transformation","Integrated Security Operations","Enterprise Risk Management","Autonomous Incident Response","Next-Generation Cloud Forensics","Cyber Resilience & Recovery","ISO/IEC 27001 Operational Readiness","Privacy & Data Protection"].map(x=><article key={x}><Network/><h3>{x}</h3><p>Business-aligned scope, governed implementation, operational evidence and measurable assurance.</p></article>)}</div>
      </div>
    </section>

    <section id="solutions-industries" className="vsol-section vsol-industries">
      <div className="vsol-shell"><SectionHeading eyebrow="SOLUTIONS BY INDUSTRY" title="Built for Your Industry. Aligned to Your Business." summary="Industry context changes the assets, dependencies, threats, obligations, recovery objectives and evidence required."/>
        <img className="vsol-industries__visual" src="/assets/solutions-industries-3d.png" alt="Conceptual visual representing connected cybersecurity solutions across industries."/>
        <div className="vsol-industry-grid">{industries.map(([Icon,title,text])=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section id="solutions-approach" className="vsol-section vsol-approach">
      <div className="vsol-shell"><SectionHeading eyebrow="OUR SOLUTION APPROACH" title="From Business Context to Measurable Outcomes" summary="A six-stage delivery model connects strategy, validation, implementation, continuous operation and assurance."/>
        <div className="vsol-steps">{approach.map(([Icon,title,text],i)=><article key={title}><b>{String(i+1).padStart(2,"0")}</b><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section id="solutions-outcomes" className="vsol-section vsol-surface-light">
      <div className="vsol-shell"><SectionHeading eyebrow="BUSINESS VALUE" title="Real Outcomes for a Safer Tomorrow" summary="Outcome statements remain measurable and evidence-led without unsupported universal performance claims."/>
        <div className="vsol-value-grid">{outcomes.map(([Icon,title,text])=><article key={title}><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div>
      </div>
    </section>

    <section id="solutions-assurance" className="vsol-section vsol-assurance">
      <div className="vsol-shell vsol-assurance__grid"><div><SectionHeading light eyebrow="SOLUTION ASSURANCE" title="Clear Scope. Governed Delivery. Verifiable Outcomes." summary="Each solution defines scope, responsibilities, architecture, acceptance criteria, validation, recovery, metrics, evidence and improvement planning."/></div>
        <img src="/assets/solutions-assurance-3d.png" alt="Conceptual visual representing governed delivery and verifiable assurance outcomes."/>
      </div><div className="vsol-shell vsol-assurance__items">{["Business & Technical Scope","Responsibility Matrix","Named Owners","Acceptance Criteria","Implementation Roadmap","Validation Requirements","Recovery Criteria","Evidence Requirements","Operational Metrics","Improvement Plan"].map(x=><span key={x}>{x}</span>)}</div>
    </section>

    <section id="solutions-final" className="vsol-final"><div className="vsol-shell"><span>READY TO SOLVE YOUR SECURITY CHALLENGES?</span><h2>Design the Right Security Solution for Your Business</h2><p>Discuss priorities, operating gaps, risk context, regulatory requirements and resilience objectives with V Pilot.</p><div className="vsol-actions"><Link className="vsol-btn is-primary" to="/contact">Schedule Executive Briefing <ArrowRight/></Link><Link className="vsol-btn is-secondary" to="/contact">Request Solution Assessment</Link></div></div></section>
  </div>;
}

