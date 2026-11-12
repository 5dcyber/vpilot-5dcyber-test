import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const files = {
  home: path.join(root, "src", "pages", "HomePage.jsx"),
  component: path.join(root, "src", "pages", "FinalHomeNarrative.jsx"),
  css: path.join(root, "src", "pages", "vpilot-final-home.css"),
  footer: path.join(root, "src", "components", "Footer.jsx"),
  header: path.join(root, "src", "components", "Header.jsx"),
  main: path.join(root, "src", "main.jsx"),
  package: path.join(root, "package.json"),
};
const stamp = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
const archive = path.join(process.env.USERPROFILE || root, "Documents", "V-Pilot-Source-Archive", `final-home-before-${stamp}`);

function fail(msg) { throw new Error(msg); }
function read(file) { if (!fs.existsSync(file)) fail(`Required file not found: ${file}`); return fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""); }
function write(file, text) { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, text.replace(/\r?\n/g, "\n"), "utf8"); }
function backup(file) { if (!fs.existsSync(file)) return; const target = path.join(archive, path.relative(root, file)); fs.mkdirSync(path.dirname(target), { recursive: true }); fs.copyFileSync(file, target); }
function restore() { if (!fs.existsSync(archive)) return; for (const entry of fs.readdirSync(archive, { recursive: true })) { const from = path.join(archive, entry); if (!fs.statSync(from).isFile()) continue; const to = path.join(root, entry); fs.mkdirSync(path.dirname(to), { recursive: true }); fs.copyFileSync(from, to); } }

// Prefer an existing V Pilot shield asset. The component provides a branded CSS fallback if none exists.
const assetDir = path.join(root, "public", "assets");
let shieldUrl = "";
if (fs.existsSync(assetDir)) {
  const candidates = fs.readdirSync(assetDir).filter(name => /v.?pilot.*shield|shield.*v.?pilot/i.test(name) && /\.(svg|png|webp|avif)$/i.test(name));
  if (candidates.length) shieldUrl = `/assets/${candidates.sort()[0]}`;
}

const component = `import { Link } from "react-router-dom";
import {
  ArrowRight, BadgeCheck, BrainCircuit, Building2, CheckCircle2,
  DatabaseBackup, Eye, FileCheck2, Flag, Gauge, KeyRound, Network,
  RotateCcw, Scale, ShieldCheck, Sparkles, Target, UsersRound, Workflow,
  Wrench
} from "lucide-react";
import "./vpilot-final-home.css";

const SHIELD_URL = ${JSON.stringify(shieldUrl)};

function ShieldMark({ className = "" }) {
  if (SHIELD_URL) return <img className={\`vpfh-shield-img \${className}\`} src={SHIELD_URL} alt="V Pilot shield" loading="lazy" decoding="async" />;
  return <span className={\`vpfh-shield-fallback \${className}\`} aria-label="V Pilot shield"><ShieldCheck aria-hidden="true" /></span>;
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
  ["compass", "Compass Pilot", "GRC, Risk and Managed ISMS", "Security leadership, enterprise risk, ISO/IEC 27001 readiness, privacy, supplier assurance and policy governance.", ["CISO as a Service", "ISO 27001 readiness", "Enterprise risk", "Privacy and supplier assurance"]],
  ["custodian", "Custodian Pilot", "Identity and Endpoint Operations", "Identity lifecycle, privileged access, endpoints, device hardening, application access and secure configuration.", ["Entra ID and Active Directory", "Intune and endpoint operations", "Privileged access", "Device and application hardening"]],
  ["vigil", "Vigil Pilot", "SIEM and Detection Operations", "Continuous monitoring, detection engineering, threat hunting, alert triage and security telemetry.", ["SIEM administration", "Detection engineering", "Threat hunting", "Telemetry and analytics"]],
  ["art", "ART Pilot", "Remediation and Threat Response", "Exposure validation, vulnerability remediation, configuration treatment and threat-informed response.", ["VAPT and exposure validation", "Patch and configuration treatment", "Compatibility testing", "Verified risk reduction"]],
  ["phoenix", "Phoenix Pilot", "Incident, Forensics and Recovery", "Incident readiness, containment, digital forensics, backup validation, restoration and trusted recovery.", ["Incident response", "Digital and cloud forensics", "Backup validation", "Ransomware recovery"]],
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
  return <div className={\`vpfh-heading \${align === "center" ? "is-center" : ""}\`}><span>{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
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

    <section className="vpfh-section vpfh-purpose">
      <div className="vpfh-shell">
        <Heading eyebrow="OUR PURPOSE, VISION AND MISSION" title="A Clearer, Safer, More Resilient Tomorrow" />
        <div className="vpfh-purpose-grid">
          <article><Target /><span>OUR PURPOSE</span><h3>Security Assurance Through Continuous Operations.</h3><p>Help organizations convert security requirements into continuously operated, measured and evidenced controls.</p></article>
          <article><Eye /><span>OUR VISION</span><h3>A Trusted Global Security Operations Partner.</h3><p>Become a trusted partner recognized for accountable service, operational excellence, validated outcomes and continuous assurance.</p></article>
          <article><Flag /><span>OUR MISSION</span><h3>Operate. Assure. Improve.</h3><p>Pilot customer security operations through risk-driven governance, specialist expertise, production-relevant validation, responsive support and continual improvement.</p></article>
        </div>
      </div>
    </section>

    <section className="vpfh-assurance" id="security-assurance">
      <div className="vpfh-assurance-left">
        <span>OUR SPECIAL OBJECTIVE</span><h2>Security Assurance</h2><p>Security work is not complete when a report, alert or patch is delivered. Work continues until an authorized control is implemented, the result is verified, recovery is protected, evidence is recorded and remaining risk is clearly communicated.</p>
        <div className="vpfh-assurance-pillars"><b>Risk-Driven Operations</b><b>Production-Relevant Proving</b><b>Continuous Evidence</b><b>Stronger Resilience</b></div>
      </div>
      <div className="vpfh-shield-stage"><ShieldMark /><small>SECURITY ASSURANCE IS IN OUR DNA</small></div>
      <div className="vpfh-assurance-right"><span>OUR SERVICE ASSURANCE COMMITMENT</span><div className="vpfh-title-with-shield"><ShieldMark /><h2>We Stand Behind the Security Operations We Deliver.</h2></div><p>V Pilot operates capabilities assigned through the applicable service agreement and Responsibility Assignment Matrix. Customers retain business ownership, executive authority, legal accountability and final risk acceptance.</p><p>Eligible verified service failures receive transparent review, corrective action and applicable extended assurance support under the service agreement.</p><strong>Corrective action. Stronger controls. Continued assurance.</strong></div>
    </section>

    <section className="vpfh-section vpfh-pilots" id="five-pilot-operations">
      <div className="vpfh-shell"><Heading eyebrow="THE 5PILOT TEAMS" title="Specialized Expertise. Integrated Outcomes." copy="Different domains. One governed operation. One accountable partner." />
        <div className="vpfh-pilot-grid">{pilots.map(([kind,name,sub,copy,items]) => <article className={kind} key={name}><div className="vpfh-pilot-visual"><ShieldMark /><span>{name}</span></div><h3>{name}</h3><b>{sub}</b><p>{copy}</p><ul>{items.map(x => <li key={x}>{x}</li>)}</ul></article>)}</div>
      </div>
    </section>

    <section className="vpfh-section vpfh-lifecycle"><div className="vpfh-shell"><Heading eyebrow="HOW 5PILOT OPERATIONS WORKS" title="One Lifecycle. Every Pilot. Better Security Outcomes." />
      <div className="vpfh-lifecycle-row">{lifecycle.map(([Icon,t,d],i) => <article key={t}><Icon /><h3>{t}</h3><p>{d}</p>{i < lifecycle.length-1 && <ArrowRight className="vpfh-flow-arrow" />}</article>)}</div>
    </div></section>

    <section className="vpfh-section vpfh-engagement"><div className="vpfh-shell"><Heading eyebrow="ENGAGEMENT OPTIONS" title="Start with One. Build Your Fleet. Or Transfer the Operation." />
      <div className="vpfh-engagement-grid">
        <article><Gauge /><h3>Single Pilot</h3><p>One specialist team for a defined requirement.</p><ul><li>Clear scope and service levels</li><li>Dedicated specialists</li><li>Fast time to value</li><li>Full evidence and reporting</li></ul><Link to="/services">Choose a Pilot <ArrowRight /></Link></article>
        <article><Network /><h3>Integrated Fleet</h3><p>Two or more Pilots around a shared risk.</p><ul><li>Coordinated operations</li><li>Shared intelligence and workflows</li><li>Consolidated reporting</li><li>Greater operational impact</li></ul><Link to="/contact?intent=integrated-fleet">Design Your Fleet <ArrowRight /></Link></article>
        <article><Sparkles /><h3>Complete 5Pilot Operations</h3><p>All five teams as an integrated managed-security function.</p><ul><li>End-to-end security operations</li><li>Unified governance and service levels</li><li>Shared responsibility model</li><li>Continuous assurance</li></ul><Link to="/services/complete-5pilot-operations">Explore Complete 5Pilot <ArrowRight /></Link></article>
      </div>
    </div></section>

    <section className="vpfh-section vpfh-model"><div className="vpfh-shell"><Heading eyebrow="THE V PILOT ADVANTAGE" title="Your Challenges. Our Commitment." copy="Security tools, policies and teams alone do not finish the work. V Pilot connects specialist teams, accountable operations, controlled automation, trusted recovery and continuous evidence through PUDICA." />
      <div className="vpfh-model-grid"><div className="vpfh-model-list">{["End-to-end security operations", "Aligned to business risk and compliance", "Validated through SecLabs and GoldenVault", "Recovery-aware and evidence-driven", "Operational accountability and service assurance"].map(x => <p key={x}><CheckCircle2 />{x}</p>)}<Link to="/solutions">See Our Customer Impact <ArrowRight /></Link></div>
      <div className="vpfh-pudica-orbit"><div className="vpfh-pudica-core"><strong>PUDICA</strong><span>Integrated Cybersecurity Operations</span></div>{pilots.map(([,name],i)=><div className={\`node n\${i+1}\`} key={name}><ShieldMark /><span>{name}</span></div>)}</div>
      <div className="vpfh-outcomes"><span>CUSTOMER OUTCOMES</span>{["Reduced cyber risk and exposure", "Faster, validated remediation", "Stronger detection and response", "Resilient backup and recovery", "Continuous compliance posture", "Audit-ready evidence", "Operational efficiency", "Greater management confidence"].map(x => <p key={x}><CheckCircle2 />{x}</p>)}</div></div>
    </div></section>

    <section className="vpfh-section vpfh-journey"><div className="vpfh-shell"><Heading eyebrow="OUR JOURNEY" title="From Vision to a Trusted Security Partner." />
      <div className="vpfh-timeline">{[["MAR 2024","V Pilot Established"],["MID 2024","Operating Framework Formalized"],["LATE 2024","PUDICA Development Initiated"],["2025","5Pilot Operating Model Structured"],["CURRENT DIRECTION","Portfolio and Assurance Expansion"],["BEYOND","Continuous Innovation"]].map(([d,t])=><article key={d}><span>{d}</span><h3>{t}</h3></article>)}</div>
    </div></section>

    <section className="vpfh-section vpfh-principles"><div className="vpfh-shell"><Heading eyebrow="OUR OPERATING PRINCIPLES" title="Principles That Guide Everything We Do." />
      <div className="vpfh-principle-grid">{principles.map(([Icon,n,t,d])=><article key={n}><Icon /><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
    </div></section>

    <section className="vpfh-people"><div className="vpfh-people-copy"><span>OUR PEOPLE</span><h2>Expertise with Purpose.</h2><p>V Pilot brings together technical expertise, operational experience and a shared commitment to security assurance. The Virtual Pilot Operations Team works as a unified force to deliver measurable outcomes.</p><Link to="/5pilot-operations">Meet the 5Pilot Teams <ArrowRight /></Link></div><div className="vpfh-industries"><span>INDUSTRY CONTEXT</span><h2>Security Operations Adapted to Your Business.</h2><div>{industries.map(x=><b key={x}><Building2 />{x}</b>)}</div></div></section>

    <section className="vpfh-final"><div className="vpfh-shell"><div><span>READY TO STRENGTHEN YOUR SECURITY OPERATIONS?</span><h2>Let’s Build a Safer, Stronger Tomorrow.</h2><p>Discover how V Pilot can deliver accountable security operations and continuous assurance for your organization.</p></div><div><Link className="primary" to="/contact?intent=executive-briefing">Schedule Executive Briefing <ArrowRight /></Link><Link className="secondary" to="/contact?intent=operating-gap-assessment">Request Operating-Gap Assessment</Link></div></div></section>
  </div>;
}
`;

const css = `:root{--vpfh-navy:#03162d;--vpfh-deep:#062b56;--vpfh-text:#071f63;--vpfh-blue:#087eeb;--vpfh-cyan:#20c5e7;--vpfh-ice:#edf8ff;--vpfh-line:#cfe3f3;--vpfh-surface:#f7fbff}.vpfh-home{color:var(--vpfh-text);background:#fff;font-family:Inter,sans-serif}.vpfh-shell{width:min(1440px,calc(100% - 80px));margin:auto}.vpfh-section{padding:84px 0}.vpfh-heading{max-width:880px;margin-bottom:36px}.vpfh-heading>span,.vpfh-assurance span,.vpfh-people span,.vpfh-final span{display:block;color:var(--vpfh-blue);font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.vpfh-heading h2,.vpfh-assurance h2,.vpfh-people h2,.vpfh-final h2{margin:9px 0 14px;font-family:"Space Grotesk",Inter,sans-serif;font-size:clamp(2rem,3.2vw,3.35rem);line-height:1.05;letter-spacing:-.04em}.vpfh-heading p{margin:0;color:#4f6b87;font-size:16px;line-height:1.65}.vpfh-difference{background:linear-gradient(145deg,#fff,#eef8ff)}.vpfh-difference-head{display:grid;grid-template-columns:1.1fr .9fr;gap:32px}.vpfh-difference-head aside{padding:26px;border:1px solid var(--vpfh-line);border-radius:14px;text-align:center;background:linear-gradient(145deg,#eef8ff,#fff)}.vpfh-difference-head aside span{color:var(--vpfh-blue);font-size:12px;font-weight:800;letter-spacing:.12em}.vpfh-difference-head aside strong{display:block;margin:12px 0;color:var(--vpfh-text);font-size:25px}.vpfh-difference-head aside p{margin:0;color:#526f8c}.vpfh-difference-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.vpfh-difference-grid article,.vpfh-engagement-grid article{padding:22px;border:1px solid var(--vpfh-line);border-radius:12px;background:#fff;box-shadow:0 14px 35px rgba(5,52,99,.07)}.vpfh-difference-grid article>div{display:flex;align-items:center;gap:12px}.vpfh-difference-grid svg{width:42px;height:42px;padding:9px;border-radius:50%;color:#fff;background:var(--vpfh-blue)}.vpfh-difference-grid h3{font-size:16px}.vpfh-difference-grid p{color:#526f8c;font-size:13px;line-height:1.55}.vpfh-purpose-grid{display:grid;grid-template-columns:repeat(3,1fr)}.vpfh-purpose-grid article{padding:12px 38px;border-right:1px solid var(--vpfh-line)}.vpfh-purpose-grid article:last-child{border:0}.vpfh-purpose-grid svg{width:50px;height:50px;padding:12px;border-radius:50%;color:var(--vpfh-blue);background:#e8f5ff}.vpfh-purpose-grid span{display:block;margin-top:15px;color:var(--vpfh-blue);font-size:11px;font-weight:800;letter-spacing:.12em}.vpfh-purpose-grid h3{font-size:20px}.vpfh-purpose-grid p{color:#526f8c;line-height:1.55}.vpfh-assurance{display:grid;grid-template-columns:1.05fr .72fr 1.05fr;color:#fff;background:var(--vpfh-navy)}.vpfh-assurance>div{min-height:480px;padding:58px 6vw}.vpfh-assurance-left p,.vpfh-assurance-right p{color:#c4d5e4;line-height:1.65}.vpfh-assurance-pillars{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:24px}.vpfh-assurance-pillars b{padding:15px;border:1px solid rgba(90,220,240,.35);border-radius:8px;font-size:12px}.vpfh-shield-stage{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:30px!important;background:radial-gradient(circle,#0a5ea4,#03162d 68%)}.vpfh-shield-stage small{margin-top:14px;letter-spacing:.12em}.vpfh-shield-img{display:block;object-fit:contain}.vpfh-shield-stage .vpfh-shield-img{width:min(270px,75%);max-height:320px}.vpfh-shield-fallback{display:grid;width:120px;height:140px;place-items:center;border:4px solid #20c5e7;border-radius:55% 55% 45% 45%;box-shadow:0 0 35px rgba(32,197,231,.45)}.vpfh-shield-fallback svg{width:70px;height:70px;color:#fff}.vpfh-assurance-right{border-left:1px solid rgba(60,210,235,.4)}.vpfh-title-with-shield{display:flex;gap:16px;align-items:flex-start}.vpfh-title-with-shield .vpfh-shield-img{width:58px;height:68px}.vpfh-title-with-shield .vpfh-shield-fallback{width:58px;height:68px;border-width:2px;flex:none}.vpfh-title-with-shield .vpfh-shield-fallback svg{width:34px}.vpfh-assurance-right>strong{display:block;margin-top:24px;color:#5fe0ec}.vpfh-pilot-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}.vpfh-pilot-grid article{overflow:hidden;border:1px solid var(--vpfh-line);border-radius:11px;background:#fff}.vpfh-pilot-visual{display:flex;height:148px;align-items:center;justify-content:center;gap:10px;color:#fff;background:linear-gradient(145deg,#342175,#7159d8)}.vpfh-pilot-visual .vpfh-shield-img{width:64px;height:76px}.vpfh-pilot-visual .vpfh-shield-fallback{width:54px;height:64px;border-width:2px}.vpfh-pilot-visual .vpfh-shield-fallback svg{width:30px}.vpfh-pilot-visual span{font-weight:800}.vpfh-pilot-grid article>h3,.vpfh-pilot-grid article>b,.vpfh-pilot-grid article>p,.vpfh-pilot-grid article>ul{margin-left:18px;margin-right:18px}.vpfh-pilot-grid article>b{display:block;color:var(--vpfh-blue);font-size:12px}.vpfh-pilot-grid article>p,.vpfh-pilot-grid li{color:#526f8c;font-size:12px;line-height:1.5}.vpfh-pilot-grid ul{padding-left:16px;margin-bottom:20px}.vpfh-pilot-grid .custodian .vpfh-pilot-visual{background:linear-gradient(145deg,#064a37,#13a477)}.vpfh-pilot-grid .vigil .vpfh-pilot-visual{background:linear-gradient(145deg,#063b68,#087eeb)}.vpfh-pilot-grid .art .vpfh-pilot-visual{background:linear-gradient(145deg,#62101b,#e52e3e)}.vpfh-pilot-grid .phoenix .vpfh-pilot-visual{background:linear-gradient(145deg,#7d2d05,#f18b12)}.vpfh-lifecycle{background:#eef8ff}.vpfh-lifecycle-row{display:grid;grid-template-columns:repeat(6,1fr)}.vpfh-lifecycle-row article{position:relative;text-align:center;padding:12px 22px}.vpfh-lifecycle-row article>svg:first-child{width:58px;height:58px;padding:13px;border:2px solid #2b95f4;border-radius:50%;color:#087eeb;background:#fff}.vpfh-lifecycle-row h3{margin:12px 0 4px}.vpfh-lifecycle-row p{margin:0;color:#526f8c;font-size:12px}.vpfh-flow-arrow{position:absolute;right:-14px;top:38px;color:#087eeb}.vpfh-engagement-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.vpfh-engagement-grid article>svg{color:var(--vpfh-blue)}.vpfh-engagement-grid p,.vpfh-engagement-grid li{color:#526f8c;line-height:1.55}.vpfh-engagement-grid a,.vpfh-model-list a,.vpfh-people a{display:flex;align-items:center;justify-content:center;gap:8px;min-height:46px;border-radius:7px;color:#fff;background:#087eeb;text-decoration:none;font-weight:750}.vpfh-model{background:#f2f9fe}.vpfh-model-grid{display:grid;grid-template-columns:.8fr 1.15fr .8fr;gap:30px;align-items:center}.vpfh-model-list p,.vpfh-outcomes p{display:flex;gap:9px;align-items:flex-start;color:#385a79}.vpfh-model-list svg,.vpfh-outcomes svg{width:18px;flex:none;color:#069b8b}.vpfh-pudica-orbit{position:relative;min-height:470px;border-radius:18px;background:radial-gradient(circle,#fff,#e4f4fe)}.vpfh-pudica-core{position:absolute;left:50%;top:50%;display:grid;width:170px;height:170px;place-items:center;align-content:center;transform:translate(-50%,-50%);border:1px solid #95d9f7;border-radius:50%;background:#fff;box-shadow:0 0 35px rgba(8,126,235,.2)}.vpfh-pudica-core strong{font-size:28px;color:#087eeb}.vpfh-pudica-core span{text-align:center;font-size:10px}.vpfh-pudica-orbit .node{position:absolute;display:flex;flex-direction:column;align-items:center;width:120px;text-align:center;font-size:11px;font-weight:750}.vpfh-pudica-orbit .node .vpfh-shield-img{width:54px;height:62px}.vpfh-pudica-orbit .node .vpfh-shield-fallback{width:48px;height:56px;border-width:2px;background:#06345f}.vpfh-pudica-orbit .node .vpfh-shield-fallback svg{width:27px}.vpfh-pudica-orbit .n1{left:50%;top:4%;transform:translateX(-50%)}.vpfh-pudica-orbit .n2{right:5%;top:28%}.vpfh-pudica-orbit .n3{right:14%;bottom:5%}.vpfh-pudica-orbit .n4{left:14%;bottom:5%}.vpfh-pudica-orbit .n5{left:5%;top:28%}.vpfh-outcomes{padding:24px;border:1px solid var(--vpfh-line);border-radius:12px;background:#fff}.vpfh-outcomes>span{color:var(--vpfh-blue);font-size:12px;font-weight:800}.vpfh-journey{background:#fff}.vpfh-timeline{display:grid;grid-template-columns:repeat(6,1fr);border-top:2px solid #73c8f6}.vpfh-timeline article{position:relative;padding:22px 18px;border-right:1px solid var(--vpfh-line)}.vpfh-timeline article::before{position:absolute;top:-7px;left:18px;width:12px;height:12px;border-radius:50%;content:"";background:#087eeb}.vpfh-timeline span{color:#087eeb;font-size:11px;font-weight:800}.vpfh-timeline h3{font-size:14px}.vpfh-principles{background:#eef8ff}.vpfh-principle-grid{display:grid;grid-template-columns:repeat(8,1fr)}.vpfh-principle-grid article{padding:18px 12px;border:1px solid var(--vpfh-line);text-align:center;background:#fff}.vpfh-principle-grid svg{color:#087eeb}.vpfh-principle-grid b{display:block;color:#087eeb}.vpfh-principle-grid h3{font-size:13px}.vpfh-principle-grid p{color:#526f8c;font-size:11px}.vpfh-people{display:grid;grid-template-columns:1fr 1fr;color:#fff;background:linear-gradient(135deg,#03162d,#07447b)}.vpfh-people>div{padding:68px 6vw}.vpfh-people p{color:#c4d5e4;line-height:1.65}.vpfh-industries{border-left:1px solid rgba(60,210,235,.35)}.vpfh-industries>div{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.vpfh-industries b{display:flex;gap:8px;align-items:center;font-size:12px}.vpfh-industries svg{width:18px;color:#20c5e7}.vpfh-final{padding:64px 0;color:#fff;background:linear-gradient(110deg,#03162d,#07518b)}.vpfh-final .vpfh-shell{display:flex;align-items:center;justify-content:space-between;gap:40px}.vpfh-final p{color:#c4d5e4}.vpfh-final .vpfh-shell>div:last-child{display:flex;gap:12px}.vpfh-final a{display:flex;min-height:48px;align-items:center;justify-content:center;padding:0 24px;border-radius:7px;text-decoration:none;font-weight:750}.vpfh-final .primary{color:#fff;background:#087eeb}.vpfh-final .secondary{color:#fff;border:1px solid rgba(255,255,255,.7)}@media(max-width:1150px){.vpfh-shell{width:min(100% - 48px,980px)}.vpfh-difference-grid{grid-template-columns:1fr 1fr}.vpfh-assurance{grid-template-columns:1fr 1fr}.vpfh-shield-stage{grid-column:1/-1;grid-row:2}.vpfh-pilot-grid{grid-template-columns:repeat(3,1fr)}.vpfh-lifecycle-row{grid-template-columns:repeat(3,1fr);gap:25px}.vpfh-flow-arrow{display:none}.vpfh-model-grid{grid-template-columns:1fr}.vpfh-principle-grid{grid-template-columns:repeat(4,1fr)}.vpfh-timeline{grid-template-columns:repeat(3,1fr)}}@media(max-width:720px){.vpfh-shell{width:min(100% - 30px,620px)}.vpfh-section{padding:58px 0}.vpfh-difference-head,.vpfh-purpose-grid,.vpfh-assurance,.vpfh-pilot-grid,.vpfh-engagement-grid,.vpfh-people{grid-template-columns:1fr}.vpfh-difference-grid{grid-template-columns:1fr}.vpfh-purpose-grid article{border-right:0;border-bottom:1px solid var(--vpfh-line);padding:22px 0}.vpfh-assurance>div{min-height:auto;padding:44px 24px}.vpfh-shield-stage{grid-column:auto;grid-row:auto}.vpfh-assurance-right,.vpfh-industries{border-left:0;border-top:1px solid rgba(60,210,235,.35)}.vpfh-lifecycle-row,.vpfh-timeline{grid-template-columns:1fr 1fr}.vpfh-principle-grid{grid-template-columns:1fr 1fr}.vpfh-pudica-orbit{min-height:430px}.vpfh-final .vpfh-shell{display:block}.vpfh-final .vpfh-shell>div:last-child{display:grid;margin-top:24px}.vpfh-final a{width:100%}}
`;

try {
  Object.values(files).forEach(backup);
  read(files.package);

  write(files.component, component);
  write(files.css, css);

  let home = read(files.home);
  home = home.replace(/import PremiumHomeNarrative from "\.\/PremiumHomeNarrative\.jsx";\s*/g, 'import FinalHomeNarrative from "./FinalHomeNarrative.jsx";\n');
  if (!home.includes('import FinalHomeNarrative from "./FinalHomeNarrative.jsx";')) {
    home = home.replace(/import \{ useEffect \} from "react";\s*/, 'import { useEffect } from "react";\nimport FinalHomeNarrative from "./FinalHomeNarrative.jsx";\n');
  }
  home = home.replaceAll("Â·", "·").replaceAll("â€™", "’").replaceAll("â€“", "–").replaceAll("â€”", "—");

  // Ensure route-driven scrolling works with the current App routes.
  home = home.replace(/export default function HomePage\(\)\{return <div className="vph2-page">/, `export default function HomePage({ initialSection = null }){\n  const location = useLocation();\n  useEffect(() => {\n    const section = initialSection || new URLSearchParams(location.search).get("section");\n    if (!section) { window.scrollTo({ top: 0, behavior: "auto" }); return; }\n    const timer = window.setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);\n    return () => window.clearTimeout(timer);\n  }, [initialSection, location.pathname, location.search]);\n  return <div className="vph2-page">`);

  const heroEnd = "{/* VPILOT_SOC_HERO_END */}";
  const heroIndex = home.indexOf(heroEnd);
  if (heroIndex < 0) fail("The finalized SOC hero marker was not found in HomePage.jsx.");
  home = home.slice(0, heroIndex + heroEnd.length) + "\n  <FinalHomeNarrative />\n</div>}\n";
  write(files.home, home);

  // Correct internal links now that Company is canonicalized to the homepage.
  let footer = read(files.footer);
  footer = footer.replaceAll('"/company/security-assurance"', '"/security-assurance"');
  footer = footer.replaceAll('"/company/5pilot-operations"', '"/5pilot-operations"');
  footer = footer.replace('["About V Pilot", "/company"]', '["About V Pilot", "/about-v-pilot"]');
  write(files.footer, footer);

  let header = read(files.header);
  header = header.replaceAll('to="/contact">Schedule Executive Briefing', 'to="/contact?intent=executive-briefing">Schedule Executive Briefing');
  write(files.header, header);

  // Remove BOM from main entry without changing behavior.
  write(files.main, read(files.main));

  const checks = [
    [files.home, "<FinalHomeNarrative />"], [files.component, "Why Organizations Choose V Pilot"],
    [files.component, "Specialized Expertise. Integrated Outcomes."], [files.component, "Principles That Guide Everything We Do."],
    [files.component, "Let’s Build a Safer, Stronger Tomorrow."], [files.css, ".vpfh-pilot-grid"],
  ];
  for (const [file, text] of checks) if (!read(file).includes(text)) fail(`Validation failed: ${text}`);

  const build = spawnSync("cmd.exe", ["/d", "/s", "/c", "npm.cmd run build"], { cwd: root, stdio: "inherit", windowsHide: true });
  if (build.error) fail(`Build could not start: ${build.error.message}`);
  if (build.status !== 0) fail(`Production build exited with code ${build.status}.`);

  console.log("\nFinal enterprise homepage installed successfully.");
  console.log(`Backup archive: ${archive}`);
  console.log(shieldUrl ? `V Pilot shield asset used: ${shieldUrl}` : "No dedicated V Pilot shield asset was found; branded shield fallback is active.");
} catch (error) {
  console.error(`\nInstallation failed: ${error.message}`);
  console.error("Restoring previous files...");
  restore();
  process.exit(1);
}
