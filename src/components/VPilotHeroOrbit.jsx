import { useEffect, useRef, useState } from "react";
import {
  BadgeCheck,
  DatabaseBackup,
  Eye,
  KeyRound,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import "./VPilotHeroOrbit.css";

const pilots = [
  {
    id: "compass",
    name: "Compass Pilot",
    role: "Governance & Risk",
    icon: ShieldCheck,
    color: "#42e59b",
    x: 50,
    y: 12,
  },
  {
    id: "vigil",
    name: "Vigil Pilot",
    role: "Monitoring & Detection",
    icon: Eye,
    color: "#23c9ff",
    x: 82,
    y: 37,
  },
  {
    id: "phoenix",
    name: "Phoenix Pilot",
    role: "Response & Recovery",
    icon: DatabaseBackup,
    color: "#a96dff",
    x: 70,
    y: 78,
  },
  {
    id: "custodian",
    name: "Custodian Pilot",
    role: "Identity & Endpoint",
    icon: KeyRound,
    color: "#18dcc6",
    x: 30,
    y: 78,
  },
  {
    id: "art",
    name: "ART Pilot",
    role: "Remediation & Testing",
    icon: Wrench,
    color: "#ff9a3d",
    x: 18,
    y: 37,
  },
];

const lifecycle = [
  { label: "ANTICIPATE", x: 27, y: 13, rotate: -16 },
  { label: "OBSERVE", x: 70, y: 13, rotate: 16 },
  { label: "RESPOND", x: 88, y: 49, rotate: 0 },
  { label: "RECOVER", x: 66, y: 91, rotate: 0 },
  { label: "COMPLIANT", x: 13, y: 49, rotate: 0 },
];

export default function VPilotHeroOrbit() {
  const stageRef = useRef(null);
  const [active, setActive] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % pilots.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  function handlePointerMove(event) {
    const bounds = stageRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    setTilt({
      x: (0.5 - y) * 2.6,
      y: (x - 0.5) * 3.4,
    });
  }

  return (
    <div
      ref={stageRef}
      className="vpo-stage"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      aria-label="PUDICA integrated lifecycle connecting five specialist Pilot teams"
    >
      <div className="vpo-space" aria-hidden="true" />
      <div className="vpo-horizon" aria-hidden="true" />

      <svg className="vpo-geometry" viewBox="0 0 1000 720" aria-hidden="true">
        <defs>
          <radialGradient id="vpoSphere" cx="38%" cy="31%" r="72%">
            <stop offset="0" stopColor="#1979a6" stopOpacity="0.95" />
            <stop offset="0.55" stopColor="#075073" stopOpacity="0.98" />
            <stop offset="1" stopColor="#021a2c" stopOpacity="1" />
          </radialGradient>
          <linearGradient id="vpoLine" x1="0" x2="1">
            <stop offset="0" stopColor="#36d7ee" stopOpacity="0.05" />
            <stop offset="0.5" stopColor="#71edfb" stopOpacity="0.75" />
            <stop offset="1" stopColor="#36d7ee" stopOpacity="0.05" />
          </linearGradient>
          <filter id="vpoGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse className="vpo-guide vpo-guide-main" cx="500" cy="362" rx="348" ry="286" />
        <ellipse className="vpo-guide vpo-guide-secondary" cx="500" cy="362" rx="284" ry="232" />

        {pilots.map((pilot, index) => {
          const px = pilot.x * 10;
          const py = pilot.y * 7.2;
          return (
            <line
              key={pilot.id}
              className={`vpo-link ${index === active ? "is-active" : ""}`}
              x1="500"
              y1="362"
              x2={px}
              y2={py}
              stroke="url(#vpoLine)"
              filter="url(#vpoGlow)"
            />
          );
        })}

        <circle className="vpo-sphere-shell" cx="500" cy="362" r="145" fill="url(#vpoSphere)" />
        <ellipse className="vpo-sphere-latitude" cx="500" cy="362" rx="130" ry="48" />
        <ellipse className="vpo-sphere-longitude" cx="500" cy="362" rx="58" ry="132" />
      </svg>

      {lifecycle.map((item, index) => (
        <div
          key={item.label}
          className={`vpo-life ${index === active ? "is-active" : ""}`}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            transform: `translate(-50%, -50%) rotate(${item.rotate}deg)`,
          }}
        >
          <span>{item.label}</span>
          <i aria-hidden="true">→</i>
        </div>
      ))}

      <div className="vpo-core">
        <BadgeCheck size={32} aria-hidden="true" />
        <strong>PUDICA</strong>
        <span>Integrated Security<br />Operations Control Plane</span>
      </div>

      {pilots.map((pilot, index) => {
        const Icon = pilot.icon;
        return (
          <button
            key={pilot.id}
            type="button"
            className={`vpo-node vpo-node-${pilot.id} ${index === active ? "is-active" : ""}`}
            style={{
              left: `${pilot.x}%`,
              top: `${pilot.y}%`,
              "--node-color": pilot.color,
            }}
            onClick={() => setActive(index)}
            aria-pressed={index === active}
          >
            <span className="vpo-node-disc">
              <Icon size={27} aria-hidden="true" />
            </span>
            <b>{pilot.name}</b>
            <small>{pilot.role}</small>
          </button>
        );
      })}

      <div className="vpo-flow-dot" aria-hidden="true" />
    </div>
  );
}
