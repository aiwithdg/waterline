import { CARGO_TYPES } from "../content/cargo";
import "./Cargo.css";

export default function Cargo() {
  return (
    <section className="cargo" id="cargo">
      <div className="container">
        <p className="eyebrow">Chapter Five</p>
        <h2 className="cargo__heading">Six Kinds of Cargo</h2>
        <p className="cargo__lede">
          "Cargo" isn't one thing at a port — it's six distinct operations,
          each with its own equipment, choreography, and regulatory
          requirements. Knowing which one you're looking at explains almost
          everything else about how a berth is run.
        </p>

        <div className="cargo__grid">
          {CARGO_TYPES.map((c) => (
            <div className="cargo__card" key={c.letter}>
              <span className="cargo__letter">{c.letter}</span>
              <h3>{c.name}</h3>
              <span className="cargo__stat">{c.stat}</span>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
