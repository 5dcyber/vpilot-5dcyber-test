import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Radar, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import "./vpilot-enterprise-home.css";

const proof = [
  "Five accountable Pilot teams",
  "Shared operational context",
  "Governed execution and evidence",
];

export default function VPilotHero3D() {
  const stageRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-5.5, 5.5]), { stiffness: 120, damping: 22 });
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [4.2, -4.2]), { stiffness: 120, damping: 22 });
  const glowX = useTransform(pointerX, [0, 1], [20, 80]);
  const glowY = useTransform(pointerY, [0, 1], [15, 85]);

  useEffect(() => {
    if (reduceMotion) {
      pointerX.set(0.5);
      pointerY.set(0.5);
    }
  }, [reduceMotion, pointerX, pointerY]);

  const handlePointerMove = (event) => {
    if (reduceMotion) return;
    const bounds = stageRef.current?.getBoundingClientRect();
    if (!bounds) return;
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  };

  const resetTilt = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
    setActive(false);
  };

  return (
    <section className="vpe-hero" aria-labelledby="vpe-hero-title">
      <div className="vpe-grid" aria-hidden="true" />
      <div className="vpe-hero-shell">
        <div className="vpe-hero-copy">
          <div className="vpe-kicker">
            <Sparkles size={16} aria-hidden="true" />
            One accountable virtual security team
          </div>

          <h1 id="vpe-hero-title">
            Security operations,
            <span> coordinated through five specialist Pilots.</span>
          </h1>

          <p className="vpe-lead">
            V Pilot extends the customer security organization with shared context,
            governed decisions and accountable execution across governance,
            remediation, detection, administration and recovery.
          </p>

          <div className="vpe-proof" aria-label="V Pilot operating model">
            {proof.map((item) => (
              <span key={item}>
                <CheckCircle2 size={16} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>

          <div className="vpe-actions">
            <Link className="vpe-primary" to="/contact">
              Build your operating model <ArrowRight size={17} />
            </Link>
            <Link className="vpe-secondary" to="/services">
              Explore 5Pilot operations
            </Link>
          </div>

          <div className="vpe-assurance">
            <ShieldCheck size={22} aria-hidden="true" />
            <p>
              <strong>Responsibility does not stop at advice.</strong>
              V Pilot works as an extension of the customer team to operate,
              evidence and continuously improve security outcomes.
            </p>
          </div>
        </div>

        <div className="vpe-visual-wrap">
          <div className="vpe-visual-caption">
            <span>Virtual Pilot Command</span>
            <strong>Five teams. One operating picture.</strong>
          </div>

          <motion.div
            ref={stageRef}
            className={`vpe-visual-stage ${active ? "is-active" : ""}`}
            onPointerMove={handlePointerMove}
            onPointerEnter={() => setActive(true)}
            onPointerLeave={resetTilt}
            onFocus={() => setActive(true)}
            onBlur={resetTilt}
            tabIndex={0}
            style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 1250 }}
            aria-label="Interactive three-dimensional V Pilot five-team operations model"
          >
            <motion.div
              className="vpe-specular"
              aria-hidden="true"
              style={{ left: `${glowX}%`, top: `${glowY}%` }}
            />
            <img
              className="vpe-operations-image"
              src="/assets/vpilot-5pilot-operations.png"
              alt="V Pilot shield at the center of five connected cybersecurity operating domains"
              width="1536"
              height="1024"
            />
            <div className="vpe-glass-edge" aria-hidden="true" />
            <motion.div
              className="vpe-scan-ring"
              aria-hidden="true"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="vpe-signal vpe-signal-one"
              aria-hidden="true"
              animate={reduceMotion ? undefined : { opacity: [0, 1, 0], scale: [0.8, 1.12, 0.8] }}
              transition={{ duration: 3.4, repeat: Infinity, delay: 0.2 }}
            />
            <motion.div
              className="vpe-signal vpe-signal-two"
              aria-hidden="true"
              animate={reduceMotion ? undefined : { opacity: [0, 1, 0], scale: [0.8, 1.12, 0.8] }}
              transition={{ duration: 3.4, repeat: Infinity, delay: 1.3 }}
            />
            <motion.div
              className="vpe-signal vpe-signal-three"
              aria-hidden="true"
              animate={reduceMotion ? undefined : { opacity: [0, 1, 0], scale: [0.8, 1.12, 0.8] }}
              transition={{ duration: 3.4, repeat: Infinity, delay: 2.4 }}
            />
          </motion.div>

          <div className="vpe-visual-status">
            <Radar size={18} aria-hidden="true" />
            <span>Continuous context</span>
            <i aria-hidden="true" />
            <span>Governed action</span>
            <i aria-hidden="true" />
            <span>Assured recovery</span>
          </div>
        </div>
      </div>
    </section>
  );
}
