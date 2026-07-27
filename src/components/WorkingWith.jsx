import { GROUPS } from "../content/workingwith";
import "./WorkingWith.css";

export default function WorkingWith() {
  return (
    <section className="ww" id="working-with-ports">
      <div className="container">
        <p className="eyebrow">Chapter Twelve</p>
        <h2 className="ww__heading">Working With Ports</h2>
        <p className="ww__lede">
          For anyone actually doing business with a Port Authority — a
          consultant, a startup, a technology vendor — the unwritten rules
          matter as much as the written ones. Five things worth knowing
          before you show up.
        </p>

        <div className="ww__grid">
          {GROUPS.map((g) => (
            <div className="ww__card" key={g.title}>
              <h3>{g.title}</h3>
              <ul>
                {g.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
