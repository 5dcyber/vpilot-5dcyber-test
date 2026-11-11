import "./vpilot-prodsecops-infinity.css";

export default function ProdSecOpsInfinity() {
  const id = "prodsecops-framework-v2";

  return (
    <figure className="vfw-infinity-premium" aria-labelledby="prodsecops-infinity-title">
      <div className="vfw-infinity-premium__eyebrow">CONTINUOUS SECURITY OPERATIONS</div>

      <svg
        className="vfw-infinity-premium__svg"
        viewBox="42 4 266 92"
        role="img"
        aria-labelledby="prodsecops-infinity-title prodsecops-infinity-desc"
      >
        <title id="prodsecops-infinity-title">ProdSecOps Protect, Secure and Operate lifecycle</title>
        <desc id="prodsecops-infinity-desc">
          A continuous blue and green infinity lifecycle with Security governing the center.
        </desc>

        <defs>
          <linearGradient id={`${id}-protect`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#003380" />
            <stop offset=".28" stopColor="#087eeb" />
            <stop offset=".58" stopColor="#55a9ff" />
            <stop offset="1" stopColor="#004fb7" />
          </linearGradient>
          <linearGradient id={`${id}-operate`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#047857" />
            <stop offset=".34" stopColor="#16a970" />
            <stop offset=".64" stopColor="#56dfb2" />
            <stop offset="1" stopColor="#068b70" />
          </linearGradient>
          <radialGradient id={`${id}-hub`} cx="34%" cy="24%" r="79%">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".55" stopColor="#f2fbff" />
            <stop offset="1" stopColor="#c9e4f2" />
          </radialGradient>
          <filter id={`${id}-depth`} x="-25%" y="-60%" width="150%" height="230%">
            <feDropShadow dx="0" dy="4.5" stdDeviation="3.5" floodColor="#042f5d" floodOpacity=".28" />
          </filter>
          <filter id={`${id}-beam`} x="-30%" y="-70%" width="160%" height="240%">
            <feGaussianBlur stdDeviation="1.8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <ellipse className="vfw-infinity-premium__shadow" cx="175" cy="86" rx="108" ry="7" />

        <g className="vfw-infinity-premium__orbit" aria-hidden="true">
          <circle cx="175" cy="50" r="39" />
          <circle cx="175" cy="50" r="48" />
        </g>

        <g filter={`url(#${id}-depth)`}>
          <path
            className="vfw-infinity-premium__track is-protect"
            fill="none"
            stroke={`url(#${id}-protect)`}
            strokeWidth="12"
            strokeLinecap="round"
            d="M175 50C140 18 65 18 65 50s75 32 110 0"
          />
          <path
            className="vfw-infinity-premium__track is-operate"
            fill="none"
            stroke={`url(#${id}-operate)`}
            strokeWidth="12"
            strokeLinecap="round"
            d="M175 50c35-32 110-32 110 0s-75 32-110 0"
          />
        </g>

        <path
          className="vfw-infinity-premium__assurance-beam"
          pathLength="100"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.7"
          strokeLinecap="round"
          filter={`url(#${id}-beam)`}
          d="M175 50C140 18 65 18 65 50s75 32 110 0c35-32 110-32 110 0s-75 32-110 0"
        />

        <g className="vfw-infinity-premium__hub">
          <circle cx="175" cy="50" r="20" fill={`url(#${id}-hub)`} />
          <circle cx="175" cy="50" r="17" fill="none" stroke="#087eeb" strokeWidth="1.5" />
          <circle cx="175" cy="50" r="12.5" fill="none" stroke="rgba(32,197,231,.44)" strokeWidth=".8" />
        </g>

        <g className="vfw-infinity-premium__label is-prod">
          <rect x="89" y="38" width="48" height="24" rx="12" />
          <text x="113" y="54.25" textAnchor="middle">PROD</text>
        </g>
        <g className="vfw-infinity-premium__label is-ops">
          <rect x="213" y="38" width="48" height="24" rx="12" />
          <text x="237" y="54.25" textAnchor="middle">OPS</text>
        </g>
        <text className="vfw-infinity-premium__sec" x="175" y="53.5" textAnchor="middle">SEC</text>
      </svg>

      <figcaption className="vfw-infinity-premium__caption">
        <span><i className="is-blue"></i>PROTECT</span>
        <strong>SECURITY-GOVERNED CONTINUITY</strong>
        <span><i className="is-green"></i>OPERATE</span>
      </figcaption>
    </figure>
  );
}
