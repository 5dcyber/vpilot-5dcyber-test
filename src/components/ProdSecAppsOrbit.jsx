import "./vpilot-prodsecapps-orbit.css";

const stages = [
  ["01", "PLAN", "Context & Architecture"],
  ["02", "BUILD", "Code & Supply Chain"],
  ["03", "TEST", "SAST · DAST · API"],
  ["04", "RELEASE", "Authority & Evidence"],
  ["05", "RUN", "Runtime Assurance"],
  ["06", "RESPOND", "Contain · Recover · Learn"],
];

export default function ProdSecAppsOrbit() {
  return (
    <div className="vfw-apps-orbit" aria-label="ProdSecApps secure application lifecycle">
      <div className="vfw-apps-orbit__scene">
        <div className="vfw-apps-orbit__ring vfw-apps-orbit__ring--outer" />
        <div className="vfw-apps-orbit__ring vfw-apps-orbit__ring--inner" />
        <div className="vfw-apps-orbit__beam" />
        <div className="vfw-apps-orbit__core">
          <span>PRODSECAPPS</span>
          <strong>SECURE</strong>
          <small>DESIGN · BUILD · RUN</small>
        </div>
        {stages.map(([number, title, detail], index) => (
          <article key={title} className={`vfw-apps-orbit__node vfw-apps-orbit__node--${index + 1}`}>
            <b>{number}</b>
            <strong>{title}</strong>
            <span>{detail}</span>
          </article>
        ))}
      </div>
      <div className="vfw-apps-orbit__caption">
        <span>SECURE BY DESIGN</span><i />
        <span>GOVERNED RELEASE</span><i />
        <span>CONTINUOUS ASSURANCE</span>
      </div>
    </div>
  );
}
