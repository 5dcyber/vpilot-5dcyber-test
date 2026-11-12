import { Link } from "react-router-dom";
import "./vpilot-frameworks-mock-final.css";

const ecosystem = [
  ["01","ProdSecOps","Modern infrastructure security operations framework","/frameworks/prodsecops","blue"],
  ["02","ProdSecApps","Application security operations framework","/frameworks/prodsecapps","violet"],
  ["03","5D Threat Intelligence","Anticipate · Observe · Respond · Restore · Prove","/frameworks/5d-threat-intelligence","coral"],
  ["04","SecLabs","Independent security-proving model","/frameworks/seclabs","green"],
  ["05","GoldenVault","Dynamic validation workspace","/frameworks/goldenvault","gold"],
  ["06","Shared Responsibility","Clear ownership and effective governance","/frameworks/shared-responsibility","teal"],
];
const prodStages=["Establish Context","Acquire Trusted State","Analyze 5D Risk","Prove in SecLabs","Authorize Treatment","Execute Domain Operation","Observe and Recover","Assure and Improve"];
const appStages=["Plan","Build","Test","Release","Run","Respond"];
const fiveD=[
  ["Anticipate","Reduce exposure before exploitation"],
  ["Observe","Make risk visible and measurable"],
  ["Respond","Contain and investigate"],
  ["Restore","Recover trusted operations"],
  ["Prove","Demonstrate effectiveness"],
];
const outcomes=["Risk-informed decisions","Production-relevant validation","Controlled execution with rollback","Observable and measurable outcomes","Recovery-protected operations","Audit-ready evidence","Continuous improvement"];
const businessValue=["Reduced application risk","Faster, safer releases","Stronger compliance posture","Integrated infrastructure security","Aligned with business objectives"];

function Arrow(){return <span aria-hidden="true">→</span>}
function Checks({items}){return <ul className="fw-checks">{items.map(x=><li key={x}><b>✓</b>{x}</li>)}</ul>}

export default function FrameworksPage(){return <div className="fw-page">
  <section className="fw-hero" id="frameworks-top">
    <div className="fw-shell fw-hero-grid">
      <div className="fw-hero-copy">
        <span className="fw-kicker light">FRAMEWORKS</span>
        <h1>Proven Frameworks<br/>for Continuous Security Operations</h1>
        <h2>Structured. Repeatable. Evidence-driven.</h2>
        <p>V Pilot’s frameworks bring order, context and accountability to security operations, connecting threat intelligence, technology, people and process to real business outcomes.</p>
        <div className="fw-actions"><Link className="fw-btn primary" to="/frameworks#framework-ecosystem">Explore Our Frameworks <Arrow/></Link><Link className="fw-btn secondary" to="/contact">Download Framework Overview</Link></div>
      </div>
      <div className="fw-hero-message"><strong>A CLEARER<br/>PATH TO A MORE<br/>SECURE TOMORROW</strong></div>
    </div>
  </section>

  <section className="fw-section fw-ecosystem" id="framework-ecosystem"><div className="fw-shell">
    <div className="fw-heading-row"><h2>Our Framework Ecosystem</h2><p>V Pilot develops and applies integrated frameworks to manage infrastructure and application security operations in a systematic, measurable and resilient way.</p></div>
    <div className="fw-eco-grid">{ecosystem.map(([n,t,d,to,c])=><Link className={`fw-eco-card ${c}`} to={to} key={t}><span className="fw-eco-icon">{n}</span><div><h3>{t}</h3><p>{d}</p></div><Arrow/></Link>)}</div>
  </div></section>

  <section className="fw-section fw-prod" id="frameworks-prodsecops"><div className="fw-shell fw-prod-grid">
    <div className="fw-prod-copy"><span className="fw-brand-title">◇ <b>ProdSecOps</b></span><span className="fw-kicker">INFRASTRUCTURE SECURITY OPERATIONS FRAMEWORK</span><h2>Secure What Runs<br/>the Business</h2><p>ProdSecOps applies agile principles to production and infrastructure security operations, ensuring every security decision is based on actual operating context, independently validated and measured after deployment.</p><Link className="fw-btn primary" to="/frameworks/prodsecops">Explore ProdSecOps <Arrow/></Link></div>
    <div className="fw-prod-model"><div className="fw-infinity"><div className="fw-loop protect"><b>PROD</b><span>PROTECT</span></div><div className="fw-center">SEC</div><div className="fw-loop operate"><b>OPS</b><span>OPERATE</span></div></div>{prodStages.map((x,i)=><div className={`fw-stage stage-${i+1}`} key={x}><b>{String(i+1).padStart(2,'0')}</b><span>{x}</span></div>)}</div>
    <aside className="fw-side-card"><h3>Framework Outcomes</h3><Checks items={outcomes}/></aside>
  </div></section>

  <section className="fw-section fw-apps" id="frameworks-prodsecapps"><div className="fw-shell fw-apps-grid">
    <div className="fw-prod-copy"><span className="fw-brand-title violet">▱ <b>ProdSecApps</b></span><span className="fw-kicker">APPLICATION SECURITY OPERATIONS FRAMEWORK</span><h2>Build Secure Applications<br/>for a Resilient Future</h2><p>ProdSecApps integrates security into the complete application lifecycle, from design to runtime, ensuring controlled adoption, continuous testing and operational assurance.</p><Link className="fw-btn primary" to="/frameworks/prodsecapps">Explore ProdSecApps <Arrow/></Link></div>
    <div><div className="fw-app-flow">{appStages.map((x,i)=><div className={`fw-app-step s${i}`} key={x}><b>{String(i+1).padStart(2,'0')}</b><i>◇</i><strong>{x}</strong><span>{["Threat modelling and secure design","SAST, SCA and secure coding","DAST, API and penetration testing","Pre-production assurance","Runtime security and monitoring","Incident and vulnerability response"][i]}</span></div>)}</div><div className="fw-cap-grid">{["Application inventory","Supply-chain security","API and cloud-native security","Runtime protection","Continuous assurance"].map(x=><span key={x}>▣ {x}</span>)}</div></div>
    <aside className="fw-side-card"><h3>Business Value</h3><Checks items={businessValue}/></aside>
  </div></section>

  <section className="fw-section fw-three"><div className="fw-shell fw-three-grid">
    <article id="frameworks-5d-threat-intelligence"><span className="fw-brand-title">◇ <b>5D Threat Intelligence</b></span><span className="fw-kicker">INTELLIGENCE TO ACTION</span><h2>Turn Threat Information<br/>into Operational Decisions</h2><p>5D Threat Intelligence connects threat information to every stage of security operations, before, during and after an attack.</p><div className="fw-five-d">{fiveD.map(([x,d],i)=><div className={`d${i}`} key={x}><b>{i+1}</b><strong>{x}</strong><span>{d}</span></div>)}</div><Link className="fw-btn primary" to="/frameworks/5d-threat-intelligence">Explore 5D Threat Intelligence <Arrow/></Link></article>
    <article className="fw-seclabs" id="frameworks-seclabs"><div className="fw-seclabs-photo" aria-hidden="true"></div><span className="fw-brand-title green">◇ <b>SecLabs</b></span><span className="fw-kicker">INDEPENDENT PROVING MODEL</span><h2>Prove Before You<br/>Go to Production</h2><p>SecLabs provides a controlled proving model for security changes, real-world scenarios and operational evidence. GoldenVault supplies the reusable validation workspace.</p><Checks items={["Vulnerability and exploit validation","Patch and configuration testing","Application compatibility assessment","SIEM detection engineering","Incident response exercises","Backup and recovery validation","Rollback and business impact analysis"]}/><Link className="fw-btn primary" to="/frameworks/seclabs">Explore SecLabs <Arrow/></Link></article>
    <article id="frameworks-shared-responsibility"><span className="fw-brand-title teal">◇ <b>Shared Responsibility</b></span><span className="fw-kicker">CLEAR OWNERSHIP. EFFECTIVE SECURITY.</span><h2>Stronger Security Through Shared Responsibility</h2><p>V Pilot operates contracted security capabilities while customers retain business ownership, executive authority, legal accountability and final risk acceptance.</p><div className="fw-responsibility"><div><b>Customer Responsibilities</b><span>Business ownership<br/>Executive authority<br/>Legal accountability<br/>Risk acceptance</span></div><div><b>Shared Decisions</b><span>Priorities<br/>Change approval<br/>Major incidents<br/>Exceptions</span></div><div><b>V Pilot Responsibilities</b><span>Operate services<br/>Monitor and remediate<br/>Coordinate incidents<br/>Report evidence</span></div></div><Link className="fw-btn primary" to="/frameworks/shared-responsibility">View Responsibility Model <Arrow/></Link></article>
  </div></section>

  <section className="fw-final"><div className="fw-shell fw-final-grid"><div><span className="fw-kicker light">READY TO STRUCTURE YOUR SECURITY OPERATIONS?</span><h2>Let’s Build a More Secure Future Together</h2><p>Discover how V Pilot frameworks can establish measurable security excellence, operational resilience and accountable business value.</p><div className="fw-actions"><Link className="fw-btn primary" to="/contact">Schedule Executive Briefing <Arrow/></Link><Link className="fw-btn dark" to="/contact">Download Framework Guide</Link></div></div><div className="fw-proof-mini"><span>Framework-driven<br/>Execution</span><span>Proven in<br/>Real-World Operations</span><span>Trusted by<br/>Forward-Thinking Leaders</span></div></div></section>
</div>}
