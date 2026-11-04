import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Compass,
  Eye,
  KeyRound,
  LifeBuoy,
  Radar,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./vpilot-hero-ops.css";

const ROTATION_MS = 5200;

const pilots = [
  {
    id: "compass",
    name: "Compass Pilot",
    role: "Govern & Direct",
    short: "CISO, GRC & ISMS operations",
    icon: Compass,
    color: "#35d7ff",
    glow: "rgba(53,215,255,.38)",
  },
  {
    id: "art",
    name: "ART Pilot",
    role: "Reduce Exposure",
    short: "Vulnerability treatment and remediation",
    icon: Wrench,
    color: "#78e5a7",
    glow: "rgba(120,229,167,.36)",
  },
  {
    id: "vigil",
    name: "Vigil Pilot",
    role: "Detect & Respond",
    short: "Managed SIEM, detection and response",
    icon: Radar,
    color: "#7c8cff",
    glow: "rgba(124,140,255,.40)",
  },
  {
    id: "custodian",
    name: "Custodian Pilot",
    role: "Administer & Protect",
    short: "Identity, endpoint and cloud administration",
    icon: KeyRound,
    color: "#b781ff",
    glow: "rgba(183,129,255,.38)",
  },
  {
    id: "phoenix",
    name: "Phoenix Pilot",
    role: "Recover & Assure",
    short: "Incident recovery and cyber resilience",
    icon: LifeBuoy,
    color: "#ffb55e",
    glow: "rgba(255,181,94,.38)",
  },
];

const orbit = [
  { x: 0, y: -192 },
  { x: 184, y: -58 },
  { x: 112, y: 158 },
  { x: -112, y: 158 },
  { x: -184, y: -58 },
];

function PilotNode({ pilot, position, active, onSelect, reduceMotion }) {
  const Icon = pilot.icon;

  return (
    <motion.button
      type="button"
      className={`vph-pilot-node ${active ? "is-active" : ""}`}
      style={{
        "--pilot-color": pilot.color,
        "--pilot-glow": pilot.glow,
      }}
      initial={false}
      animate={
        reduceMotion
          ? { x: position.x, y: position.y }
          : {
              x: position.x,
              y: position.y,
              scale: active ? 1.09 : 1,
              z: active ? 38 : 0,
            }
      }
      whileHover={reduceMotion ? undefined : { scale: 1.07, z: 32 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      onClick={onSelect}
      aria-pressed={active}
      aria-label={`${pilot.name}: ${pilot.role}`}
    >
      <span className="vph-node-icon" aria-hidden="true">
        <Icon size={24} strokeWidth={1.8} />
      </span>
      <span className="vph-node-copy">
        <strong>{pilot.name}</strong>
        <small>{pilot.role}</small>
      </span>
      {active && !reduceMotion && (
        <motion.span
          className="vph-node-signal"
          aria-hidden="true"
          initial={{ opacity: 0.7, scale: 1 }}
          animate={{ opacity: 0, scale: 1.3 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </motion.button>
  );
}

export default function VPilotHeroOps() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const active = pilots[activeIndex];
  const ActiveIcon = active.icon;

  useEffect(() => {
    if (paused || reduceMotion) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % pilots.length);
    }, ROTATION_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        left: `${(index * 47) % 100}%`,
        top: `${(index * 71) % 96}%`,
        delay: (index % 6) * 0.55,
        size: 1 + (index % 3),
      })),
    [],
  );

  return (
    <section
      className="vph-hero"
      aria-labelledby="vpilot-hero-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="vph-grid" aria-hidden="true" />
      <div className="vph-cyan-halo" aria-hidden="true" />
      <div className="vph-blue-halo" aria-hidden="true" />

      {!reduceMotion &&
        particles.map((particle, index) => (
          <motion.i
            key={index}
            className="vph-particle"
            aria-hidden="true"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{ opacity: [0.08, 0.62, 0.08], y: [0, -13, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}

      <div className="vph-shell">
        <div className="vph-copy">
          <div className="vph-eyebrow">
            <Sparkles size={16} aria-hidden="true" />
            Virtual security leadership. Accountable operations.
          </div>

          <h1 id="vpilot-hero-heading">
            Your virtual security team,
            <span> operating as one accountable force.</span>
          </h1>

          <p className="vph-lead">
            V Pilot extends the customer security team with five coordinated
            specialist Pilots. Shared context, governed decisions and systematic
            execution turn fragmented security work into an integrated operating
            capability.
          </p>

          <div className="vph-promises" aria-label="V Pilot operating promise">
            <span><Eye size={16} /> Anticipate</span>
            <span><Activity size={16} /> Operate</span>
            <span><ShieldCheck size={16} /> Assure</span>
          </div>

          <div className="vph-actions">
            <Link className="vph-primary" to="/contact">
              Build your virtual security team <ArrowRight size={17} />
            </Link>
            <Link className="vph-secondary" to="/services">
              Explore 5Pilot operations
            </Link>
          </div>

          <div className="vph-responsibility">
            <ShieldCheck size={21} aria-hidden="true" />
            <p>
              <strong>Customer security becomes our operating responsibility.</strong>
              V Pilot coordinates people, process, technology, evidence and
              recovery through one accountable service model.
            </p>
          </div>
        </div>

        <div className="vph-visual-column">
          <div className="vph-visual-label">
            <span>5Pilot Operations</span>
            <strong>One shared operational context</strong>
          </div>

          <div className="vph-stage">
            <motion.div
              className="vph-orbit vph-orbit-one"
              aria-hidden="true"
              animate={reduceMotion ? undefined : { rotateZ: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="vph-orbit vph-orbit-two"
              aria-hidden="true"
              animate={reduceMotion ? undefined : { rotateZ: -360 }}
              transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
            />

            {pilots.map((pilot, index) => {
              const position = orbit[index];
              const length = Math.max(70, Math.hypot(position.x, position.y) - 78);
              const angle = (Math.atan2(position.y, position.x) * 180) / Math.PI;
              return (
                <motion.span
                  key={`beam-${pilot.id}`}
                  className="vph-beam"
                  aria-hidden="true"
                  style={{
                    width: length,
                    rotate: `${angle}deg`,
                    background: `linear-gradient(90deg, ${pilot.color}aa, transparent)`,
                  }}
                  animate={{ opacity: index === activeIndex ? [0.35, 1, 0.35] : 0.12 }}
                  transition={{ duration: 1.7, repeat: reduceMotion ? 0 : Infinity }}
                />
              );
            })}

            <motion.div
              className="vph-core"
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -8, 0], rotateY: [0, 6, 0, -6, 0] }
              }
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="vph-core-ring" aria-hidden="true" />
              <img
                src="/assets/vpilot-hero-shield.png"
                alt="V Pilot virtual security operations shield"
                width="410"
                height="490"
              />
              <div>
                <small>Virtual Pilot</small>
                <strong>Accountable command</strong>
                <span>Customer-aligned ownership</span>
              </div>
            </motion.div>

            {pilots.map((pilot, index) => (
              <PilotNode
                key={pilot.id}
                pilot={pilot}
                position={orbit[index]}
                active={index === activeIndex}
                reduceMotion={reduceMotion}
                onSelect={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <motion.div
            className="vph-active-panel"
            key={active.id}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ "--pilot-color": active.color, "--pilot-glow": active.glow }}
            aria-live="polite"
          >
            <span className="vph-active-icon"><ActiveIcon size={23} /></span>
            <div>
              <small>{active.name}</small>
              <strong>{active.role}</strong>
              <p>{active.short}</p>
            </div>
            <span className="vph-progress" aria-hidden="true">
              <motion.i
                key={`${active.id}-progress`}
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: reduceMotion ? 0 : ROTATION_MS / 1000, ease: "linear" }}
              />
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

