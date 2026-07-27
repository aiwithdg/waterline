import { useEffect, useState } from "react";
import { CHAPTERS } from "../content/chapters";
import "./Sidebar.css";

const OFFSET = 90;

export default function Sidebar() {
  const [activeHref, setActiveHref] = useState(CHAPTERS[0].href);

  useEffect(() => {
    const sections = CHAPTERS.map((c) =>
      document.querySelector(c.href)
    ).filter(Boolean);

    let ticking = false;

    const update = () => {
      ticking = false;
      let current = sections[0];
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= OFFSET) {
          current = el;
        } else {
          break;
        }
      }
      if (current) setActiveHref(`#${current.id}`);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav className="sidebar" aria-label="Chapters">
      <a className="sidebar__mark" href="#top">
        Waterline
      </a>
      <ol className="sidebar__list">
        {CHAPTERS.map((c, i) => (
          <li key={c.href}>
            <a
              href={c.href}
              className={c.href === activeHref ? "is-active" : ""}
            >
              <span className="sidebar__num">{String(i).padStart(2, "0")}</span>
              {c.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
