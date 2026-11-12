import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { ArrowRight, Bell, BookOpen, BriefcaseBusiness, CheckSquare, FileText, Filter, FolderOpen, GraduationCap, Search, ShieldAlert, SlidersHorizontal, Wrench } from "lucide-react";
import "./vpilot-resources-enterprise.css";

const categories=["All Resources","Insights","Research Notes","Framework Guides","Solution Briefs","Technical Guides","Operational Checklists","Case Studies","Webinars & Events"];
const featured=[
    {
        type: "Research Note",
        title: "The Evolving Threat Landscape",
        image: "/assets/vpilot-resources-insight-research-note.png",
        summary:
            "How emerging threats should influence remediation, monitoring, response, recovery and assurance.",
        meta: "6 min read",
    },
    {
        type: "Insight",
        title: "Securing Enterprise AI Adoption",
        image: "/assets/vpilot-resources-insight-ai.png",
        summary:
            "Risk, identity, data, integration, monitoring, incident and governance considerations.",
        meta: "7 min read",
    },
    {
        type: "Solution Brief",
        title: "NativeTrust Workspace",
        image: "/assets/vpilot-resources-nativetrust.png",
        summary:
            "Trusted corporate workspaces for qualified endpoint use cases.",
        meta: "5 min read",
    },
    {
        type: "Illustrative Scenario",
        title: "From Vulnerability to Verified Closure",
        image: "/assets/vpilot-resources-vulnerability-closure.png",
        summary:
            "How findings become risk decisions, validated treatment, controlled change and evidence.",
        meta: "6 min read",
    },
];
const frameworkGuides=[
 ["ProdSecOps Guide","Modern Infrastructure Security Operations","Context, trusted state, 5D risk, proving, authority, controlled execution, recovery and assurance."],
 ["ProdSecApps Guide","Application Security Operations","Application risk, secure design, testing, release governance, runtime monitoring and evidence."],
 ["5D Threat Intelligence Brief","Anticipate. Observe. Respond. Restore. Prove.","Apply threat information across prevention, detection, response, recovery and management assurance."],
 ["SecLabs Operating Model","Independent Proving","Proving for remediation, detection, response, identity, endpoint, application and recovery operations."],
 ["GoldenVault Architecture","Dynamic Validation Workspace","Production-relevant testing, rollback, recovery and reusable assurance evidence."],
 ["Shared Responsibility Guide","Clear Ownership. Better Outcomes.","Customer ownership, V Pilot operations, shared decisions and final risk acceptance."],
];
const technical=[
 ["Endpoint & Intune Deployment Guide","Enrollment, compliance, Defender, firewall, BitLocker, LAPS, applications, updates and evidence."],
 ["SIEM Detection Engineering Guide","Move from required telemetry and threat scenarios to validated detections and measurable coverage."],
 ["Vulnerability Remediation Guide","Prioritize, validate, approve, deploy, retest and evidence security treatments."],
 ["Backup & Recovery Recommended Practices","Govern coverage, immutable copies, restore tests, RTO, RPO and ransomware recovery."],
 ["Incident Response Playbook Guide","Prepare classification, authority, containment, forensic evidence, recovery and lessons learned."],
];
const templates=["Risk Assessment Template","Security Policy Template","Incident Response Checklist","Vendor Security Assessment","ISMS Implementation Checklist","Business Continuity Planning Template","Responsibility Assignment Matrix","GoldenVault Validation Plan"];
const docs=[
 ["PUDICA Platform","Architecture, Shared Operations Fabric, NativeTrust, ARC Remediation, Incident Center, Evidence Vault and integrations."],
 ["ProdSecOps","Lifecycle, 5D risk, SecLabs, GoldenVault, authority, evidence and continual improvement."],
 ["ProdSecApps","Application context, threat modelling, secure delivery, testing, release, runtime and assurance."],
 ["Service Documentation","Service scope, responsibility matrix, onboarding, service levels, escalation, reporting and dependencies."],
];
const learning=[
 ["For CISOs",["Enterprise Risk","Security Operating Model","ISO/IEC 27001","Shared Responsibility","Executive Reporting"]],
 ["For Security Operations",["5D Threat Intelligence","SIEM Engineering","Incident Response","Threat Hunting","Forensics","Recovery"]],
 ["For IT & Endpoint Teams",["NativeTrust","Intune","Entra ID","BitLocker","LAPS","Patch Remediation"]],
 ["For Application Teams",["ProdSecApps","Threat Modelling","SAST/DAST/SCA","API Security","Release Assurance"]],
 ["For Auditors & GRC",["Control Mapping","Evidence Vault","Exceptions","Risk Treatment","Management Review"]],
];
function SectionHead({eyebrow,title,action}){return <div className="rsc-head"><div><span>{eyebrow}</span><h2>{title}</h2></div>{action&&<Link to={action}>View all <ArrowRight/></Link>}</div>}
function Card({type,title,summary,cta="Read resource"}){return <article className="rsc-card"><span>{type}</span><h3>{title}</h3><p>{summary}</p><div className="rsc-meta"><small>Version 1.0</small><small>Reviewed 12 Nov 2026</small></div><Link to="/contact">{cta}<ArrowRight/></Link></article>}
export default function ResourcesPage(){
 const [query,setQuery]=useState("");const [active,setActive]=useState("All Resources");
 const searchResults=useMemo(()=>{const q=query.trim().toLowerCase();if(!q)return [];return [...frameworkGuides,...technical].filter(x=>x.join(" ").toLowerCase().includes(q))},[query]);
 return <div className="rsc-page" id="resources-top">
  <section className="rsc-hero"><div className="rsc-shell rsc-hero-grid"><div><span className="rsc-kicker light">V PILOT RESOURCE CENTER</span><h1>Knowledge for <em>Stronger Security Operations.</em></h1><h2>Insights. Frameworks. Practical Guidance. Operational Experience.</h2><p>Explore research, framework guidance, technical implementation material, operational checklists, customer scenarios, security advisories and platform documentation developed from V Pilot’s integrated security-operations model.</p><div className="rsc-actions"><a className="rsc-btn primary" href="#resource-library">Explore All Resources<ArrowRight/></a><Link className="rsc-btn secondary" to="/subscribe"><Bell/>Subscribe for Updates</Link></div></div></div><div className="rsc-proof">{["Practitioner Insights","Framework Guidance","Technical Implementation","Operational Tools","Customer Scenarios","Continuous Learning"].map(x=><span key={x}>{x}</span>)}</div></section>

  <section className="rsc-nav" id="resource-library"><div className="rsc-shell"><div className="rsc-tabs">{categories.map(x=><button className={active===x?"is-active":""} onClick={()=>setActive(x)} key={x}>{x}</button>)}</div><div className="rsc-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search insights, guides, advisories, frameworks and templates"/><button><SlidersHorizontal/>Filters</button></div>{query&&<div className="rsc-search-results">{searchResults.length?searchResults.map(x=><Card key={x[0]} type="Search result" title={x[0]} summary={x[1]}/>):<p>No matching resources. Try a broader phrase.</p>}</div>}</div></section>

  <section className="rsc-section"><div className="rsc-shell"><SectionHead eyebrow="FEATURED CONTENT" title="Latest Insights and Perspectives" action="/resources/insights"/><div className="rsc-feature-grid"><article className="rsc-feature-main"><img src="/assets/vpilot-resources-featured.png" alt="Mountain summit representing the journey from risk to resilience."/><div><span>FEATURED INSIGHT</span><h3>From Risk to Resilience: Making Security Operations Finish the Work</h3><p>How integrated governance, production-relevant validation, controlled automation, recovery planning and evidence close the gap between findings and verified outcomes.</p><div><small>8-minute read</small><small>Security Operations</small><small>Risk & Strategy</small></div></div></article><div className="rsc-feature-list">{featured.map(x=><article key={x.title}><img src={x.image} alt=""/><div><span>{x.type}</span><h3>{x.title}</h3><p>{x.summary}</p><small>{x.meta}</small></div></article>)}</div><aside className="rsc-spotlight"><span>FEATURED RESOURCE</span><div className="rsc-book rsc-book--guide"><img src="/assets/pudica-platform-overview-cover.png" alt="Cover of the PUDICA Platform Overview Guide" /></div><h3>PUDICA Platform Overview</h3><p>Discover how PUDICA connects people, process, automation, evidence and recovery through one integrated operating model.</p><div className="rsc-doc-meta">Solution Guide · 14 pages · PDF<br/>Updated quarterly</div><a className="rsc-guide-download" href="/downloads/PUDICA_Platform_Overview_Guide_2026.pdf" download="PUDICA_Platform_Overview_Guide_2026.pdf">Download Platform Guide<ArrowRight/></a></aside></div></div></section>

  <section className="rsc-section alt"><div className="rsc-shell"><SectionHead eyebrow="FRAMEWORK GUIDES" title="Practical Frameworks for Real Operations" action="/resources/framework-guides"/><div className="rsc-grid three">{frameworkGuides.map(x=><Card key={x[0]} type="Framework Guide" title={x[0]} summary={`${x[1]}. ${x[2]}`} cta="Read the guide"/>)}</div></div></section>
  <section className="rsc-section"><div className="rsc-shell"><SectionHead eyebrow="TECHNICAL GUIDES" title="Step-by-Step Implementation Guidance" action="/resources/technical-guides"/><div className="rsc-grid five">{technical.map(x=><Card key={x[0]} type="Technical Guide" title={x[0]} summary={x[1]} cta="Download"/>)}</div></div></section>
  <section className="rsc-section alt"><div className="rsc-shell"><SectionHead eyebrow="TOOLS AND TEMPLATES" title="Ready-to-Use Resources" action="/resources/templates"/><div className="rsc-template-grid">{templates.map(x=><Link to="/contact" key={x}><CheckSquare/><span>{x}</span><ArrowRight/></Link>)}</div></div></section>

  <section className="rsc-section"><div className="rsc-shell"><SectionHead eyebrow="OPERATIONAL SCENARIOS" title="See How the Operating Model Applies"/><div className="rsc-grid five">{["Retail","Telecom","Manufacturing","Financial Services","Healthcare"].map(x=><Card key={x} type="Illustrative Scenario" title={x} summary="Operationally informed guidance for identity, endpoints, monitoring, supplier risk, incidents, resilience and recovery." cta="Explore scenario"/>)}</div></div></section>
  <section className="rsc-section advisory"><div className="rsc-shell rsc-advisory-grid"><div><span className="rsc-kicker light">SECURITY ADVISORIES</span><h2>Actionable Guidance for Emerging Security Conditions</h2><p>Each advisory includes affected technologies, severity, exploitation status, customer relevance, detection guidance, recommended treatment, compensating controls, recovery considerations and revision history.</p><Link className="rsc-btn secondary" to="/resources/security-advisories">View Security Advisories<ArrowRight/></Link></div><div className="rsc-advisory-levels">{["Informational","Important","Critical","Emergency"].map((x,i)=><span className={`l${i}`} key={x}><ShieldAlert/>{x}</span>)}</div></div></section>

  <section className="rsc-section alt"><div className="rsc-shell"><SectionHead eyebrow="DOCUMENTATION" title="Product, Framework and Service Documentation"/><div className="rsc-grid four">{docs.map(x=><Card key={x[0]} type="Documentation" title={x[0]} summary={x[1]} cta="Open documentation"/>)}</div></div></section>
  <section className="rsc-section"><div className="rsc-shell"><SectionHead eyebrow="ROLE-BASED LEARNING" title="Start with Guidance Relevant to Your Role"/><div className="rsc-grid five">{learning.map(([title,items])=><article className="rsc-learning" key={title}><GraduationCap/><h3>{title}</h3>{items.map(x=><span key={x}>{x}</span>)}</article>)}</div></div></section>
  <section className="rsc-section governance"><div className="rsc-shell rsc-governance-grid"><div><span className="rsc-kicker">CONTENT GOVERNANCE</span><h2>Current, Reviewed and Traceable Guidance</h2><p>Every resource is owned, reviewed, versioned, dated, referenced and traceable through approval and revision history.</p></div><div className="rsc-governance-tags">{["Resource ID","Version","Owner","Technical reviewer","Publication date","Last reviewed","Next review","Audience","Revision history","References"].map(x=><span key={x}>{x}</span>)}</div></div></section>

  <section className="rsc-subscribe" id="subscribe"><div className="rsc-shell rsc-subscribe-grid"><div><span className="rsc-kicker light">CONTINUOUS LEARNING</span><h2>Stay Informed. Stay Ahead.</h2><p>Receive V Pilot insights, security advisories, framework updates, technical guidance and event invitations.</p></div><form onSubmit={e=>e.preventDefault()}><div><input type="email" placeholder="Enter your business email" aria-label="Business email"/><button type="submit">Subscribe</button></div><label><input type="checkbox"/> Insights and Research</label><label><input type="checkbox"/> Security Advisories</label><label><input type="checkbox"/> Events and Webinars</label></form><strong>Knowledge Today.<br/>A Safer Tomorrow.</strong></div></section>
  <section className="rsc-final"><div className="rsc-shell"><span className="rsc-kicker light">NEED GUIDANCE FOR A SPECIFIC SECURITY CHALLENGE?</span><h2>Turn Knowledge into Operational Action</h2><p>Discuss how V Pilot frameworks, PUDICA and specialist teams can apply the guidance to your environment, risk context and operating objectives.</p><div className="rsc-actions"><Link className="rsc-btn primary" to="/contact">Schedule Executive Briefing<ArrowRight/></Link><Link className="rsc-btn secondary" to="/contact">Request Technical Briefing</Link></div></div></section>
 </div>
}
