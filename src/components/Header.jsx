import "./Header.css";

const LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#anatomy", label: "Anatomy of a Port" },
  { href: "#governance", label: "Governance" },
  { href: "#stakeholders", label: "Stakeholders" },
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
