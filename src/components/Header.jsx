import { useEffect, useRef, useState } from "react";
import "./Header.css";

const LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#anatomy", label: "Anatomy of a Port" },
  { href: "#governance", label: "Governance & Regulators" },
  { href: "#stakeholders", label: "Stakeholders" },
  { href: "#ship-call", label: "The Life of a Ship Call" },
  { href: "#cargo", label: "Six Kinds of Cargo" },
  { href: "#container-journey", label: "Follow a Container" },
  { href: "#metrics", label: "Charges & Metrics" },
  { href: "#behind-the-scenes", label: "Behind the Scenes" },
  { href: "#technology", label: "Technology & Hinterland" },
  { href: "#environment", label: "Environment & Green Ports" },
  { href: "#schemes", label: "Schemes & Programs" },
  { href: "#working-with-ports", label: "Working With Ports" },
  { href: "#quick-reference", label: "Quick Reference" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClickOutside = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [open]);

  return (
    <header className="site-header" ref={rootRef}>
      <div className="site-header__inner container">
        <a className="site-header__mark" href="#top" onClick={() => setOpen(false)}>
          Waterline
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="chapter-menu"
          onClick={() => setOpen((v) => !v)}
        >
          Chapters
          <span className={`site-header__caret ${open ? "is-open" : ""}`} aria-hidden="true" />
        </button>
      </div>

      {open && (
        <nav id="chapter-menu" className="chapter-menu">
          <ol className="chapter-menu__list">
            {LINKS.map((link, i) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  <span className="chapter-menu__num">{String(i).padStart(2, "0")}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}
    </header>
  );
}
