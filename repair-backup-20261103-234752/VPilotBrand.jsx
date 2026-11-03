import { useRef, useState } from "react";

const APPROVED_LOGO =
  "/assets/vpilot-logo";

const APPROVED_SHIELD =
  "/assets/vpilot-approved-metallic-shield.jpg";

/**
 * Approved V Pilot corporate identity.
 *
 * The supplied SVG preserves:
 * - The approved shield
 * - Metallic V Pilot wordmark
 * - Animated NW-to-NE compass
 * - CYBER SOLUTIONS LLP descriptor
 */
export function ApprovedVPilotBrand({
  compact = false,
  inverted = false,
  className = "",
}) {
  const classes = [
    "vpilot-logo-lockup",
    compact ? "is-compact" : "",
    inverted ? "is-inverted" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {APPROVED_LOGO}
    </div>
  );
}

/**
 * Interactive shield reactor for the hero section.
 *
 * This is separate from the horizontal company logo.
 */
export function ApprovedShieldReactor() {
  const stageRef = useRef(null);

  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (event) => {
    const bounds =
      stageRef.current?.getBoundingClientRect();

    if (!bounds) {
      return;
    }

    const pointerX =
      (event.clientX - bounds.left) / bounds.width;

    const pointerY =
      (event.clientY - bounds.top) / bounds.height;

    const rotateX = (pointerY - 0.5) * -9;
    const rotateY = (pointerX - 0.5) * 9;

    setTilt({
      x: rotateX,
      y: rotateY,
    });
  };

  const resetTilt = () => {
    setTilt({
      x: 0,
      y: 0,
    });
  };

  return (
    <div
      ref={stageRef}
      className="v46-reactor"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      aria-label="V Pilot integrated cybersecurity operations"
    >
      <div
        className="v46-orbit orbit-one"
        aria-hidden="true"
      >
        <i />
      </div>

      <div
        className="v46-orbit orbit-two"
        aria-hidden="true"
      >
        <i />
      </div>

      <div
        className="v46-orbit orbit-three"
        aria-hidden="true"
      >
        <i />
      </div>

      <div
        className="v46-reactor-shield"
        style={{
          transform:
            `rotateX(${tilt.x}deg) ` +
            `rotateY(${tilt.y}deg)`,
        }}
      >
        <div
          className="v46-shield-light"
          aria-hidden="true"
        />

        {APPROVED_SHIELD}

        <div
          className="v46-metal-scan"
          aria-hidden="true"
        />
      </div>

      <div className="v46-reactor-caption">
        <span>
          V PILOT CYBER SOLUTIONS LLP
        </span>

        <b>
          Integrated Intelligence · Governed Security ·
          Resilient Business
        </b>
      </div>
    </div>
  );
}