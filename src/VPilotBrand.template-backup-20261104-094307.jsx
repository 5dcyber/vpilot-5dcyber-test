import { useRef, useState } from "react";

const APPROVED_LOGO_LIGHT =
  "/assets/vpilot-approved-3d-compass-nw-ne.svg";

const APPROVED_LOGO_DARK =
  "/assets/vpilot-approved-3d-compass-nw-ne-dark-v2.svg";

const APPROVED_SHIELD =
  "/assets/vpilot-approved-metallic-shield.jpg";

export function ApprovedVPilotBrand({
  compact = false,
  inverted = false,
  theme,
  className = "",
}) {
  const resolvedTheme =
    theme || (inverted ? "dark" : "light");

  const logoSource =
    resolvedTheme === "dark"
      ? APPROVED_LOGO_DARK
      : APPROVED_LOGO_LIGHT;

  const classes = [
    "vpilot-logo-lockup",
    compact ? "is-compact" : "",
    resolvedTheme === "dark"
      ? "is-dark-theme"
      : "is-light-theme",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={classes}
      data-logo-theme={resolvedTheme}
    >
      <img
        src={logoSource}
        alt="V Pilot Cyber Solutions LLP"
        width="1501"
        height="691"
        decoding="async"
        fetchPriority={compact ? "high" : "auto"}
      />
    </div>
  );
}

export function ApprovedShieldReactor() {
  const stageRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const bounds =
      stageRef.current?.getBoundingClientRect();

    if (!bounds) return;

    const x =
      ((event.clientY - bounds.top) / bounds.height - 0.5) * -9;

    const y =
      ((event.clientX - bounds.left) / bounds.width - 0.5) * 9;

    setTilt({ x, y });
  };

  return (
    <div
      ref={stageRef}
      className="v46-reactor"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      aria-label="V Pilot integrated cybersecurity operations"
    >
      <div className="v46-orbit orbit-one" aria-hidden="true">
        <i />
      </div>

      <div className="v46-orbit orbit-two" aria-hidden="true">
        <i />
      </div>

      <div className="v46-orbit orbit-three" aria-hidden="true">
        <i />
      </div>

      <div
        className="v46-reactor-shield"
        style={{
          transform: otateX(deg) rotateY(deg),
        }}
      >
        <div className="v46-shield-light" aria-hidden="true" />

        <img
          src={APPROVED_SHIELD}
          alt="V Pilot metallic shield"
          width="410"
          height="490"
        />

        <div className="v46-metal-scan" aria-hidden="true" />
      </div>

      <div className="v46-reactor-caption">
        <span>V PILOT CYBER SOLUTIONS LLP</span>
        <b>
          Integrated Intelligence Â· Governed Security Â· Resilient Business
        </b>
      </div>
    </div>
  );
}
