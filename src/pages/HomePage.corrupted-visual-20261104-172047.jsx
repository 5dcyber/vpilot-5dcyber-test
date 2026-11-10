import { Link } from "react-router-dom";
import VPilotHero3D from "../components/VPilotHero3D.jsx";
import VPilotEnterpriseStory from "../components/VPilotEnterpriseStory.jsx";
import { ArrowRight } from "lucide-react";

import { pilots, solutions } from "../data/siteContent.js";
import { SectionHeading, CTA, VisualSection } from "../components/PageParts.jsx";
export default function HomePage(){return <>
<VPilotHero3D />
<VPilotEnterpriseStory />
<VisualSection eyebrow="THE CISO OPERATING GAP" title="Security investment is high. Operational accountability remains fragmented." lead="Threat intelligence is often restricted to reactive monitoring. Vulnerability treatment, identity administration, detection, response, recovery and compliance then operate with different context, queues and evidence." image="/assets/enterprise-3d/5d-threat-intelligence.png" alt="Five-dimensional threat intelligence integrating proactive and reactive security operations"><div className="benefit-list"><p><b>Proactive:</b> use threat relevance to prioritize exposure reduction, hardening and treatment.</p><p><b>Detective:</b> engineer telemetry and monitoring around the same validated scenario.</p><p><b>Reactive:</b> prepare triage, containment, evidence and escalation before impact.</p><p><b>Recovery:</b> verify backup, dependencies, restoration sequence and trusted restart.</p><p><b>Assurance:</b> retain authority, outcomes, residual risk and corrective action.</p></div></VisualSection>
<VisualSection reverse eyebrow="PUDICA + GOLDENVAULT" title="One vulnerability becomes a complete operational package." lead="GoldenVault reproduces the trusted state needed to test compatibility, impact, rollback, telemetry, response and restoration. PUDICA then coordinates authority, Pilot execution and reusable evidence." image="/assets/enterprise-3d/goldenvault-dynamic-proving.png" alt="GoldenVault dynamic active-active proving and cyber resilience environment"><div className="outcome-tags"><span>Remediation profile</span><span>SIEM monitoring profile</span><span>Incident-response profile</span><span>Backup and recovery profile</span><span>Configuration baseline</span><span>Assurance record</span></div></VisualSection>
<section className="narrative-section tinted"><div className="container"><SectionHeading eyebrow="5PILOT VIRTUAL TEAM" title="Five specialist teams. One shared production condition." lead="PUDICA preserves cross-domain context while each Pilot owns a clear operating responsibility."/><div className="compact-grid">{pilots.map(p=><Link className="compact-card" to={`/services#${p.id}`} key={p.id}><span>{p.name}</span><b>{p.label}</b><p>{p.summary}</p><ArrowRight size={16}/></Link>)}</div></div></section>
<section className="narrative-section"><div className="container"><SectionHeading eyebrow="CISO-RELEVANT SOLUTIONS" title="Designed around operating outcomes, not isolated tools." lead="Each solution defines the customer problem, responsible Pilots, GoldenVault proving, controlled execution and evidence required for management assurance."/><div className="solution-preview">{solutions.slice(0,4).map(s=><article key={s.id}><span>{s.pilots}</span><h3>{s.title}</h3><p>{s.text}</p><Link to={`/solutions#${s.id}`}>View solution <ArrowRight size={14}/></Link></article>)}</div></div></section>
<CTA title="Begin with a 5D operating-gap assessment." text="Identify fragmented responsibilities, threat-intelligence blind spots, unproven change, recovery dependencies and evidence gaps. Then select one Pilot, an Integrated Fleet or Complete 5Pilot Operations."/>
</>}


