import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
const visualMap={
  "Integrated operations":"/assets/enterprise-3d/5pilot-operating-architecture.png",
  "5Pilot Fleet":"/assets/enterprise-3d/5pilot-operating-architecture.png",
  "PUDICA fabric":"/assets/enterprise-3d/pudica-integrated-operations.png",
  "Knowledge flight":"/assets/enterprise-3d/5d-threat-intelligence.png",
  "Open a channel":"/assets/enterprise-3d/goldenvault-dynamic-proving.png"
};
export function PageHero({eyebrow,title,lead,children}){const src=visualMap[children]||visualMap["Integrated operations"];return <section className="inner-hero enterprise-3d-hero"><div className="hero-mesh"/><div className="container inner-hero-grid"><div className="hero-narrative"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{lead}</p><div className="hero-value-line"><span>Threat-informed</span><span>Accountable</span><span>Proven before production</span></div><Link className="btn primary" to="/contact">Discuss your operating need <ArrowRight size={16}/></Link></div><figure className="enterprise-3d-frame"><div className="visual-halo"/><img src={src} alt={`${children} enterprise cybersecurity operations visualization`}/><figcaption>{children}</figcaption></figure></div></section>}
export function SectionHeading({eyebrow,title,lead}){return <div className="narrative-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{lead&&<p>{lead}</p>}</div>}
export function CapabilityCard({title,label,text,items,id}){return <article className="narrative-card" id={id}><span className="card-index">{label}</span><h3>{title}</h3><p>{text}</p>{items&&<ul>{items.map(x=><li key={x}><CheckCircle2 size={15}/>{x}</li>)}</ul>}</article>}
export function CTA({title,text}){return <section className="narrative-cta"><div className="container"><div><span className="eyebrow">NEXT STEP</span><h2>{title}</h2><p>{text}</p></div><Link className="btn primary" to="/contact">Consult V Pilot <ArrowRight size={16}/></Link></div></section>}
export function VisualSection({eyebrow,title,lead,image,alt,reverse=false,children}){return <section className="narrative-section visual-story-section"><div className={`container visual-story ${reverse?'reverse':''}`}><div><SectionHeading eyebrow={eyebrow} title={title} lead={lead}/>{children}</div><figure className="visual-story-frame"><img src={image} alt={alt}/></figure></div></section>}
