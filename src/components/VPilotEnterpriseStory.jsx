import { ArrowRight, BookOpen, FlaskConical, Layers3, Lightbulb, ShieldCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import "./vpilot-enterprise-home.css";

const pillars = [
  {
    eyebrow: "Platform",
    title: "PUDICA unifies the operating picture",
    text: "A shared context and orchestration layer connecting threat intelligence, exposure, detection, identity, production risk, evidence and recovery decisions.",
    icon: Layers3,
    link: "/solutions",
  },
  {
    eyebrow: "Services",
    title: "Accountable specialists operate alongside your team",
    text: "Five Pilot teams provide continuous governance, remediation, monitoring, administration, incident response and resilience operations.",
    icon: Users,
    link: "/services",
  },
  {
    eyebrow: "Solutions",
    title: "Outcomes structured around enterprise risk",
    text: "Integrated solutions address exposure reduction, managed detection, regulated operations, privileged administration and cyber recovery without fragmented ownership.",
    icon: ShieldCheck,
    link: "/solutions",
  },
  {
    eyebrow: "SecLabs",
    title: "Prove change before production",
    text: "GoldenVault provides reusable, isolated and production-like validation for remediation, detection, recovery, configuration and evidence workflows.",
    icon: FlaskConical,
    link: "/insights#frameworks",
  },
  {
    eyebrow: "Insights",
    title: "Frontline learning becomes operating improvement",
    text: "Operational evidence, threat intelligence, test results and recovery lessons continuously refine controls, runbooks and executive decisions.",
    icon: Lightbulb,
    link: "/insights",
  },
];

export default function VPilotEnterpriseStory() {
  return (
    <section className="vpe-story" aria-labelledby="vpe-story-title">
      <div className="vpe-story-shell">
        <header className="vpe-story-head">
          <div>
            <span>Integrated cybersecurity firm</span>
            <h2 id="vpe-story-title">One operating model from intelligence to resilience.</h2>
          </div>
          <p>
            V Pilot combines platform context, specialist services, outcome-led
            solutions, production-safe validation and operational insight into one
            accountable customer security capability.
          </p>
        </header>

        <div className="vpe-pillar-grid">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article className="vpe-pillar" key={pillar.eyebrow}>
                <div className="vpe-pillar-icon"><Icon size={25} aria-hidden="true" /></div>
                <span>{pillar.eyebrow}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
                <Link to={pillar.link}>
                  Explore {pillar.eyebrow} <ArrowRight size={15} />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="vpe-story-close">
          <BookOpen size={21} aria-hidden="true" />
          <p>
            <strong>Recommended navigation:</strong> Platform explains PUDICA and
            GoldenVault; Services explains the 5Pilot operating teams; Solutions
            explains customer outcomes; SecLabs explains proving and assurance;
            Insights demonstrates expertise through evidence, research and guidance.
          </p>
        </div>
      </div>
    </section>
  );
}
