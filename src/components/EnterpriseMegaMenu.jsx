import { useEffect, useState } from "react";
import {
  ArrowLeft, ArrowRight, CheckCircle2, CircleDot, Flame,
  Gauge, KeyRound, Pause, Play, Radar, Settings2, ShieldCheck,
  UsersRound, Workflow
} from "lucide-react";
import { Link } from "react-router-dom";
import "./vpilot-enterprise-megamenu.css";
import "./vpilot-assurance-orbit.css";
import "./vpilot-shield-orbit-integration.css";
import "./vpilot-pudica-platform-orbit.css";

const companyGroups = [
  { title: "Company Overview", links: [
    ["About V Pilot", "/company", "Managed cybersecurity operations built around accountability and measurable outcomes."],
    ["Purpose, Vision & Mission", "/company", "Purpose, strategic direction and operating commitments."],
    ["Our Story", "/company", "Closing the gap between findings, operational action and trusted recovery."],
    ["Leadership", "/company", "Strategy, platform development, governance and customer outcomes."],
  ]},
  { title: "Why V Pilot", links: [
    ["Our Difference", "/company", "From assessment through validated treatment and evidenced closure."],
    ["Security Assurance", "/company", "Risk-driven proving, accountable delivery and continuous evidence."],
    ["Operating Principles", "/company", "Governed authority, proving before production and evidence by design."],
    ["Shared Responsibility", "/company", "Clear customer, V Pilot and shared decision responsibilities."],
    ["Service Assurance Commitment", "/company", "Corrective-action and extended-support principles."],
  ]},
  { title: "5Pilot Operations", links: [
    ["5Pilot Overview", "/company", "Five specialist teams in one governed Virtual Security Operations model."],
    ["Compass Pilot", "/company", "CISO, ERM, GRC, privacy and managed ISMS."],
    ["Custodian Pilot", "/company", "Identity, privileged access, endpoint, server and Intune operations."],
    ["Vigil Pilot", "/company", "SIEM, detection engineering, monitoring and investigation."],
    ["ART Pilot", "/company", "Exposure validation, remediation, hardening and retesting."],
    ["Phoenix Pilot", "/company", "Incident response, forensics, backup and trusted restoration."],
  ]},
];


const slides = [
  { key:"assurance", eyebrow:"Security Assurance", title:"Built for Accountable Security Operations", text:"Governed responsibility, validated execution, trusted recovery, and evidence by design.", cta:"Explore Security Assurance", to:"/company" },
  { key:"pilots", eyebrow:"5Pilot Operations", title:"Five Specialist Teams. One Integrated Operation.", text:"Compass governs. Custodian administers. Vigil observes. ART remediates. Phoenix responds and restores.", cta:"Meet the 5Pilot Teams", to:"/company" },
  { key:"pudica", eyebrow:"PUDICA Platform", title:"One Platform. One Trusted Operating Record.", text:"Connect risk, workflow, approvals, automation, monitoring, response, recovery, and evidence.", cta:"Explore PUDICA", to:"/platform" },
];


function PudicaPlatformOrbit() {
  return (
    <div className="pudica-platform-orbit" aria-hidden="true">
      <img
        className="pudica-platform-orbit__shell"
        src="/assets/pudica-platform-orbit-shell-final.svg"
        alt=""
        loading="eager"
        decoding="async"
      />
      <span className="pudica-platform-orbit__core">
        <img
          className="pudica-platform-orbit__emblem"
          src="/assets/pudica-emblem-final.png"
          alt=""
          loading="eager"
          decoding="async"
        />
      </span>
    </div>
  );
}
function AssuranceOrbit({ theme }) {
  if (theme === "pudica") {
    return <PudicaPlatformOrbit />;
  }
  return (
    <div className="company-feature__visual" aria-hidden="true">
      <img
        src="/assets/vpilot-shield-orbit-premium-v2.svg"
        alt=""
        className="company-feature__orbit"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

function FeaturedSlider({ onClose }) {
  const [index,setIndex]=useState(0);
  const [paused,setPaused]=useState(false);
  useEffect(()=>{ if(paused) return; const id=setInterval(()=>setIndex(i=>(i+1)%slides.length),8000); return()=>clearInterval(id); },[paused]);
  const slide=slides[index];
  return <aside className={`vpm-feature vpa-feature ${slide.key === "pudica" ? "company-feature--pudica" : ""}`} onFocusCapture={()=>setPaused(true)} onBlurCapture={()=>setPaused(false)}>
    <AssuranceOrbit theme={slide.key}/>
    <div className="vpm-slide vpa-slide company-feature__content" key={index} aria-live="polite"><span>{slide.eyebrow}</span><h3>{slide.title}</h3><p>{slide.text}</p><Link to={slide.to} onClick={onClose}>{slide.cta}<ArrowRight size={15}/></Link></div>
    <div className="vpm-feature-controls vpa-controls">
      <button type="button" onClick={()=>setIndex((index+slides.length-1)%slides.length)} aria-label="Previous featured item"><ArrowLeft/></button>
      <div>{slides.map((_,i)=><button type="button" key={i} className={i===index?"is-active":""} onClick={()=>setIndex(i)} aria-label={`Show featured item ${i+1}`}/>)}</div>
      <button type="button" onClick={()=>setPaused(!paused)} aria-label={paused?"Play featured items":"Pause featured items"}>{paused?<Play/>:<Pause/>}</button>
      <button type="button" onClick={()=>setIndex((index+1)%slides.length)} aria-label="Next featured item"><ArrowRight/></button>
    </div>
  </aside>;
}

export default function EnterpriseMegaMenu({menuKey,onClose}) {
  if(!menuKey) return null;
  if(menuKey!=="company") return <div className="vpm-mega-wrap" id={`vph-menu-${menuKey}`}><div className="vpm-mega vpm-simple"><span>{menuKey}</span><h2>Explore {menuKey}</h2><p>Discover the relevant V Pilot capabilities, operating models and resources.</p><Link to={`/${menuKey}`} onClick={onClose}>Open {menuKey}<ArrowRight size={15}/></Link></div></div>;
  return <div className="vpm-mega-wrap" id="vph-menu-company"><div className="vpm-mega">
    <div className="vpm-mega-main">
      <div className="vpm-intro"><span>Company</span><h2>One Accountable Cybersecurity Operating Model</h2><p>V Pilot connects security leadership, specialist operations, production-relevant validation, governed execution, recovery assurance and audit evidence through managed shared responsibility.</p><Link to="/company" onClick={onClose}>Explore V Pilot<ArrowRight size={15}/></Link></div>
      <div className="vpm-columns">{companyGroups.map(group=><section key={group.title}><h3>{group.title}</h3>{group.links.map(([label,to,desc])=><Link key={label} to={to} onClick={onClose}><b>{label}</b>{desc&&<small>{desc}</small>}<ArrowRight/></Link>)}</section>)}</div>
      
    </div>
    <FeaturedSlider onClose={onClose}/>
  </div></div>;
}





