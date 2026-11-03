import { useRef, useState } from "react";
import shield from "./assets/vpilot-approved-metallic-shield.jpg";

export function ApprovedVPilotBrand({ compact = false, inverted = false }) {
  return (
    <div className={`v46-brand ${compact ? "compact" : ""} ${inverted ? "inverted" : ""}`}>
      <div className="v46-brand-shield" aria-hidden="true"><img src={shield} alt="" /></div>
      <div className="v46-wordmark">
        <div className="v46-wordmark-line" aria-label="V Pilot">
          <span className="v46-v">V</span>
          <span className="v46-pilot">Pil<span className="v46-compass" aria-hidden="true"><span className="v46-compass-star"/><span className="v46-compass-needle"/><span className="v46-compass-pivot"/></span>t</span>
        </div>
        <small>CYBER SOLUTIONS LLP</small>
      </div>
    </div>
  );
}

export function ApprovedShieldReactor() {
  const stageRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMove = (event) => {
    const bounds = stageRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = ((event.clientY - bounds.top) / bounds.height - 0.5) * -9;
    const y = ((event.clientX - bounds.left) / bounds.width - 0.5) * 9;
    setTilt({ x, y });
  };
  return (
    <div ref={stageRef} className="v46-reactor" onPointerMove={handleMove} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
      <div className="v46-orbit orbit-one"><i/></div><div className="v46-orbit orbit-two"><i/></div><div className="v46-orbit orbit-three"><i/></div>
      <div className="v46-reactor-shield" style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
        <div className="v46-shield-light"/><img src={shield} alt="V Pilot Cyber Solutions metallic shield logo"/><div className="v46-metal-scan"/>
      </div>
      <div className="v46-reactor-caption"><span>V PILOT CYBER SOLUTIONS LLP</span><b>Integrated Intelligence · Governed Security · Resilient Business</b></div>
    </div>
  );
}
