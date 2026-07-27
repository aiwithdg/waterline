import "./Header.css";

const LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#anatomy", label: "Anatomy of a Port" },
  { href: "#governance", label: "Governance" },
  { href: "#stakeholders", label: "Stakeholders" },
  { href: "#ship-call", label: "Ship Call" },
  { href: "#cargo", label: "Cargo Types" },
  { href: "#container-journey", label: "Follow a Container" },
  { href: "#metrics", label: "Charges & Metrics" },
  { href: "#behind-the-scenes", label: "Behind the Scenes" },
  { href: "#technology", label: "Technology" },
  { href: "#environment", label: "Environment" },
  { href: "#schemes", label: "Schemes" },
  { href: "#working-with-ports", label: "Working With Ports" },
  { href: "#quick-reference", label: "Reference" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <a className="site-header__mark" href="#top">
          Waterline
        </a>
        <nav className="site-header__nav">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
