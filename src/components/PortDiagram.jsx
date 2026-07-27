// A static labelled cross-section of a port, from open sea to the gate.
export default function PortDiagram() {
  return (
    <svg
      className="port-diagram"
      viewBox="0 0 1500 480"
      role="img"
      aria-label="Cross-section diagram of a port, from anchorage to gate"
    >
      <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c3644" />
          <stop offset="100%" stopColor="#10222c" />
        </linearGradient>
      </defs>

      <rect width="1500" height="480" fill="url(#sea)" rx="10" />

      {/* land mass under yard/customs/gate */}
      <path d="M980 300 L1500 300 L1500 480 L980 480 Z" fill="#0c1a22" />

      {/* waterline */}
      <line x1="0" y1="300" x2="1500" y2="300" stroke="#7c8790" strokeOpacity="0.35" />

      {/* --- ANCHORAGE --- */}
      <g>
        <ellipse cx="100" cy="270" rx="30" ry="10" fill="#e8b93e" />
        <circle cx="55" cy="252" r="5" fill="#e8b93e" />
        <circle cx="160" cy="246" r="5" fill="#e8b93e" opacity="0.6" />
        <text x="100" y="220" textAnchor="middle" className="port-diagram__label">
          Anchorage
        </text>
      </g>

      {/* --- CHANNEL --- */}
      <g>
        <path
          d="M200 280 C 280 268, 320 268, 380 258"
          stroke="#e8b93e"
          strokeWidth="2.5"
          strokeDasharray="7 7"
          fill="none"
        />
        <circle cx="330" cy="263" r="6" fill="#e8b93e" />
        <text x="300" y="220" textAnchor="middle" className="port-diagram__label">
          Channel
        </text>
      </g>

      {/* --- TURNING BASIN --- */}
      <g>
        <ellipse cx="610" cy="250" rx="70" ry="28" fill="none" stroke="#e8b93e" strokeWidth="1.5" />
        <text x="610" y="200" textAnchor="middle" className="port-diagram__label">
          Turning Basin
        </text>
      </g>

      {/* --- BERTH (ship + quay) --- */}
      <g>
        <rect x="800" y="292" width="110" height="10" fill="#e0693f" />
        <path d="M808 292 L900 292 L890 270 L818 270 Z" fill="#c1502e" />
        <rect x="850" y="255" width="18" height="16" fill="#e8b93e" opacity="0.9" />
        <text x="855" y="220" textAnchor="middle" className="port-diagram__label">
          Berth
        </text>
      </g>

      {/* --- YARD --- */}
      <g>
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={1020 + i * 30}
            y={280 - (i % 2 === 0 ? 30 : 0)}
            width="22"
            height="30"
            fill={i % 2 === 0 ? "#c1502e" : "#3f7a72"}
          />
        ))}
        <text x="1075" y="220" textAnchor="middle" className="port-diagram__label">
          Yard
        </text>
      </g>

      {/* --- CUSTOMS --- */}
      <g>
        <rect x="1190" y="265" width="60" height="35" fill="none" stroke="#e8b93e" strokeWidth="1.5" strokeDasharray="4 4" />
        <rect x="1206" y="280" width="28" height="20" fill="#e8b93e" opacity="0.6" />
        <text x="1220" y="220" textAnchor="middle" className="port-diagram__label">
          Customs
        </text>
      </g>

      {/* --- GATE --- */}
      <g>
        <rect x="1330" y="255" width="16" height="45" fill="#e8b93e" />
        <rect x="1390" y="255" width="16" height="45" fill="#e8b93e" />
        <rect x="1330" y="248" width="76" height="9" fill="#e8b93e" />
        <text x="1368" y="220" textAnchor="middle" className="port-diagram__label">
          Gate
        </text>
      </g>
    </svg>
  );
}
