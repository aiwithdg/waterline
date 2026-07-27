import "./Hero.css";

const STATS = [
  { value: "12", label: "Major Ports" },
  { value: "200+", label: "Minor & Intermediate Ports" },
  { value: "~1,500", label: "Million Tonnes Handled / Year" },
];

export default function Hero() {
  return (
    <section className="hero" id="overview">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">A field guide to Indian maritime trade</p>
          <h1 className="hero__title">
            How India's ports actually work
          </h1>
          <p className="hero__subhead">
            Ninety-five percent of India's trade by volume moves through its
            ports, yet the sector runs almost entirely out of public view —
            a choreography of pilots, cranes, customs officers, and dock
            workers most of us never see. This is a plain guide to how it
            fits together.
          </p>

          <div className="hero__stats">
            {STATS.map((s) => (
              <div className="hero__stat" key={s.label}>
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__scene">
          <svg
            viewBox="0 0 620 420"
            role="img"
            aria-label="Illustration of a container ship at berth"
          >
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1c3644" />
                <stop offset="100%" stopColor="#10222c" />
              </linearGradient>
            </defs>
            <rect width="620" height="420" fill="url(#sky)" rx="10" />

            <line x1="0" y1="270" x2="620" y2="270" stroke="#7c8790" strokeOpacity="0.35" />

            {/* hull */}
            <path d="M90 300 L520 300 L490 340 L120 340 Z" fill="#faf6ee" fillOpacity="0.92" />

            {/* bridge */}
            <rect x="420" y="240" width="60" height="60" fill="#faf6ee" fillOpacity="0.92" />
            <rect x="432" y="252" width="12" height="10" fill="#e8b93e" />
            <rect x="452" y="252" width="12" height="10" fill="#e8b93e" />

            {/* containers */}
            <g>
              <rect x="140" y="260" width="40" height="36" fill="#b8532e" />
              <rect x="140" y="222" width="40" height="36" fill="#b8532e" opacity="0.85" />
              <rect x="184" y="260" width="40" height="36" fill="#3f7a72" />
              <rect x="184" y="222" width="40" height="36" fill="#3f7a72" opacity="0.85" />
              <rect x="228" y="260" width="40" height="36" fill="#e8b93e" />
              <rect x="272" y="260" width="40" height="36" fill="#b8532e" opacity="0.7" />
              <rect x="272" y="222" width="40" height="36" fill="#3f7a72" opacity="0.7" />
              <rect x="316" y="260" width="40" height="36" fill="#e8b93e" opacity="0.85" />
              <rect x="316" y="222" width="40" height="36" fill="#b8532e" />
              <rect x="360" y="260" width="40" height="36" fill="#3f7a72" opacity="0.85" />
            </g>

            {/* water */}
            <path d="M0 350 Q 155 340 310 350 T 620 350 V420 H0 Z" fill="#0c1a22" />
          </svg>
        </div>
      </div>
    </section>
  );
}
