import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Network, Radar, Wrench, DatabaseBackup, Gauge, FileCheck2 } from "lucide-react";
import "./vpilot-services-premium.css";

const domains = [
  { icon: ShieldCheck, tone:"violet", title:"Governance, Risk & Assurance", promise:"Govern risk. Demonstrate control. Improve continuously.", team:"Compass Pilot", items:["CISO as a Service","ISO/IEC 27001 readiness","Enterprise risk assessment","Privacy readiness","Vendor security assessment","Policy governance"] },
  { icon: Network, tone:"emerald", title:"Identity, Endpoint & Device Operations", promise:"Establish trusted identities, devices, applications, and configurations.", team:"Custodian Pilot", items:["Managed IAM","Entra ID and Intune","NativeTrust Workspace","Endpoint security","Application governance","Browser and mobile governance"] },
  { icon: Wrench, tone:"orange", title:"Vulnerability, Configuration & Remediation", promise:"Move from exposure to verified risk reduction.", team:"ART Pilot", items:["Vulnerability assessment","Penetration testing","Configuration benchmarking","Managed remediation","Software and patch treatment","ARC remediation"] },
  { icon: Radar, tone:"azure", title:"Monitoring, Detection & Incident Response", promise:"Maintain continuous visibility and coordinated response.", team:"Vigil and Phoenix Pilots", items:["Managed SIEM","Detection engineering","Threat intelligence","Threat hunting","Incident response","Digital and cloud forensics"] },
  { icon: DatabaseBackup, tone:"amber", title:"Backup, Recovery & Resilience", promise:"Restore with confidence. Stay resilient.", team:"Phoenix Pilot", items:["Managed backup","Restore validation","BCP/DR exercises","Ransomware recovery","Recovery assurance","Autonomous resilience"] },
];

const engagement = [
  ["One-Time Security Activity","A fixed-scope project for a defined security requirement.","Start a Project"],
  ["Managed Domain Service","One continuously operated capability or service domain.","Discuss a Managed Service"],
  ["Integrated Fleet","Two or more Pilot teams coordinating around one objective.","Design Your Fleet"],
  ["Complete 5Pilot Operations","Five teams operating as one managed extension for the contracted scope.","Explore Complete 5Pilot"],
];

const delivery = [
  ["01","Understand","Establish business context, scope, risks, obligations, owners, and authority."],
  ["02","Design","Define responsibilities, workflows, SLAs, controls, evidence, and recovery."],
  ["03","Transition","Onboard integrations, trusted state, runbooks, and operating readiness."],
  ["04","Operate","Administer, monitor, investigate, remediate, respond, restore, and report."],
  ["05","Assure","Verify effectiveness, review evidence, resolve exceptions, and improve."],
];

const industries=["Retail","Telecom","Manufacturing","Financial Services","Healthcare","Professional Services"];

function SectionTitle({eyebrow,title,copy,dark=false}){
  return <div className={`vps-heading ${dark?"is-dark":""}`}><span>{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>;
}

export default function ServicesPage(){
  return <div className="vps-page" id="services-top">
    <section className="vps-hero">
      <div className="vps-shell vps-hero__grid">
        <div className="vps-hero__copy">
          <span>MANAGED CYBERSECURITY SERVICES</span>
          <h1>Security Operations,<br/><em>Delivered as a Service.</em></h1>
          <strong>Managed security operations that continue through verified outcomes.</strong>
          <p>V Pilot operates agreed cybersecurity responsibilities across governance, identity, endpoints, cloud, remediation, monitoring, incident response, forensics, backup, recovery, and continuous assurance.</p>
          <p>The Virtual Pilot Operations Team works as an extension of security, IT, risk, compliance, and resilience functions, supported by PUDICA workflows, production-relevant validation, measurable service levels, and audit-ready evidence.</p>
          <div className="vps-actions"><a href="#services">Explore Our Services <ArrowRight/></a><Link to="/contact">Discuss Your Requirements</Link></div>
        </div>
        <div className="vps-hero__model">
          <span>PEOPLE</span><span>PLATFORM</span><span>PROCESS</span><span>ASSURANCE</span>
          <div className="vps-orbit" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><b>5PILOT<br/>OPERATIONS</b></div>
        </div>
      </div>
      <div className="vps-proof">{["Managed Shared Responsibility","Production-Relevant Validation","Human-Governed Automation","Recovery-Protected Change","Evidence by Design"].map(x=><span key={x}><Check/>{x}</span>)}</div>
    </section>

    <section className="vps-section vps-challenge"><div className="vps-shell vps-split">
      <SectionTitle eyebrow="THE OPERATING CHALLENGE" title="Security Responsibilities Are Distributed. Accountability Should Not Be." copy="Security work often spans internal teams, tools, consultants, cloud providers, infrastructure owners, backup administrators, and multiple service suppliers." />
      <div className="vps-outcomes">{["Clear ownership","Connected workflows","Reduced supplier fragmentation","Verified remediation","Measurable service levels","Trusted recovery","Audit-ready evidence"].map(x=><span key={x}><Check/>{x}</span>)}</div>
    </div></section>

    <section id="services-domains" className="vps-section vps-domains"><div className="vps-shell">
      <SectionTitle eyebrow="OUR SERVICE PORTFOLIO" title="Five Security Domains. Complete Operational Coverage." copy="Select individual services, combine domains, or adopt Complete 5Pilot Operations. Pilot names identify the specialist delivery teams; they do not limit the service portfolio to five services." />
      <div className="vps-domain-grid">{domains.map(({icon:Icon,...d})=><article className={`vps-domain is-${d.tone}`} key={d.title}><Icon/><h3>{d.title}</h3><strong>{d.promise}</strong><ul>{d.items.map(i=><li key={i}><Check/>{i}</li>)}</ul><small>Primary delivery team</small><b>{d.team}</b></article>)}</div>
    </div></section>

    <section className="vps-section vps-native" id="services-nativetrust"><div className="vps-shell vps-feature-grid">
      <div><span>FLAGSHIP MANAGED SERVICE</span><h2>PUDICA NativeTrust Workspace Operations</h2><strong>Native productivity. Zero implicit trust. Continuous assurance.</strong><p>Operate identity trust, device compliance, encryption, application control, browser governance, mobile access, monitoring, incidents, and evidence through Microsoft Entra ID, Microsoft Intune, Microsoft Defender, Microsoft 365, and PUDICA governance.</p><div className="vps-actions"><Link to="/platform/nativetrust-workspace">Explore NativeTrust Operations <ArrowRight/></Link><Link to="/contact">View Policy Blueprint</Link></div></div>
      <div className="vps-feature-cards">{["Identity Trust","Device Trust","Data Protection","Application & Browser Control","Protection & Monitoring","Assurance"].map(x=><article key={x}><ShieldCheck/><b>{x}</b></article>)}</div>
    </div></section>

    <section className="vps-section vps-remediation" id="services-remediation"><div className="vps-shell vps-feature-grid">
      <div><span>PUDICA-ENABLED REMEDIATION</span><h2>More Than Patching. A Complete Remediation System.</h2><p>V Pilot combines scanner findings, trusted-state acquisition, benchmark controls, threat intelligence, business risk, approval, GoldenVault testing, controlled deployment, retesting, and evidence.</p><Link className="vps-inline-cta" to="/platform/autonomous-remediation">Explore Autonomous Remediation <ArrowRight/></Link></div>
      <div className="vps-stack">{["OS Kernel & Base System","Middleware & Service Layer","Database & Data Platform","Enterprise Management & Security","Network & Security Edge","Standalone Software Packages"].map((x,i)=><span key={x} style={{"--i":i}}>{i+1}. {x}</span>)}</div>
    </div></section>

    <section className="vps-section vps-delivery"><div className="vps-shell"><SectionTitle eyebrow="SERVICE DELIVERY PROCESS" title="From Assessment to Assured Outcomes" copy="Operated through PUDICA. Delivered by 5Pilot Operations. Governed through shared responsibility."/><div className="vps-delivery-grid">{delivery.map(([n,t,p])=><article key={t}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="vps-section vps-engagement"><div className="vps-shell"><SectionTitle eyebrow="FLEXIBLE ENGAGEMENT MODELS" title="Start with One Service. Build a Fleet. Operate as One."/><div className="vps-engagement-grid">{engagement.map(([t,p,c])=><article key={t}><Gauge/><h3>{t}</h3><p>{p}</p><Link to="/contact">{c}<ArrowRight/></Link></article>)}</div></div></section>

    <section className="vps-section vps-fabric"><div className="vps-shell vps-split"><SectionTitle dark eyebrow="PUDICA-ENABLED SERVICE OPERATIONS" title="Services Managed Through One Operational System" copy="PUDICA connects managed services through a shared asset model, risk register, workflow, approval engine, change process, incident process, remediation center, evidence vault, reporting model, and audit history."/><div className="vps-fabric-grid">{["Asset Graph","Service Operations Hub","Risk & Control Register","Approval & Governance","Incident Response Center","ARC Remediation","Evidence Vault","Analytics & Reporting"].map(x=><span key={x}>{x}</span>)}</div></div></section>

    <section className="vps-section vps-assurance"><div className="vps-shell vps-assurance-grid"><div><span>SERVICE ASSURANCE</span><h2>We Stand Behind the Security Operations We Deliver.</h2><p>If a material incident is independently verified to have resulted primarily from V Pilot's failure to perform a documented and contracted operation, V Pilot will complete a formal service review and corrective-action program.</p><small>Subject to the applicable agreement, eligibility requirements, customer responsibilities, and exclusions, V Pilot may provide up to six months of additional support for the affected service area without additional professional-service charges.</small></div><div>{["Defined Responsibility","SLA-Driven Operations","Transparent Reporting","Continuous Improvement"].map(x=><article key={x}><FileCheck2/><b>{x}</b></article>)}</div></div></section>

    <section className="vps-section"><div className="vps-shell"><SectionTitle eyebrow="INDUSTRY SCENARIOS" title="Security Operations Adapted to Business Context"/><div className="vps-industry-grid">{industries.map(x=><span key={x}>{x}</span>)}</div></div></section>

    <section className="vps-final"><div className="vps-shell"><div><span>READY TO STRENGTHEN YOUR SECURITY OPERATIONS?</span><h2>Build a More Secure and Measurable Operating Model</h2><p>Engage V Pilot for a focused assessment, a continuously managed capability, an Integrated Fleet, or Complete 5Pilot Operations.</p></div><div className="vps-actions"><Link to="/contact">Schedule Executive Briefing <ArrowRight/></Link><Link to="/contact">Request Service Assessment</Link></div></div></section>
  </div>;
}

