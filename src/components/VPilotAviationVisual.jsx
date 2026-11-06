import { useRef, useState } from "react";
import { Navigation, ShieldCheck } from "lucide-react";
import "./VPilotAviationVisual.css";

export default function VPilotAviationVisual() {
  const stageRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handlePointerMove(event) {
    const box = stageRef.current?.getBoundingClientRect();
    if (!box) return;
    const px = (event.clientX - box.left) / box.width;
    const py = (event.clientY - box.top) / box.height;
    setTilt({ x: (0.5 - py) * 2.4, y: (px - 0.5) * 3.2 });
  }

  return (
    <div
      ref={stageRef}
      className="vpa-stage"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      style={{ transform: `perspective(1500px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      aria-label="V Pilot navigating integrated cybersecurity operations toward trusted outcomes"
    >
      <img
        className="vpa-scene"
        src="/assets/enterprise-3d/vpilot-aviation-command-visual.png"
        alt="Aviation command visual with PUDICA connecting five specialist Pilot teams over a guided mountain route"
      />
      <div className="vpa-depth" aria-hidden="true" />
      <div className="vpa-flight-path" aria-hidden="true"><i/><i/><i/></div>
      <div className="vpa-beacon" aria-hidden="true" />
      <div className="vpa-hud vpa-hud-left"><Navigation size={16}/><span>NAVIGATION VERIFIED</span></div>
      <div className="vpa-hud vpa-hud-right"><ShieldCheck size={16}/><span>TRUSTED OPERATIONS AHEAD</span></div>
      <div className="vpa-status" aria-hidden="true">
        <span>SECURE</span><i/> <span>OPERATE</span><i/> <span>RECOVER</span><i/> <span>ASSURE</span>
      </div>
    </div>
  );
}
