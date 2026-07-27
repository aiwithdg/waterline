import PortDiagram from "./PortDiagram";
import { ZONES } from "../content/anatomy";
import "./Anatomy.css";

export default function Anatomy() {
  return (
    <section className="anatomy" id="anatomy">
      <div className="container">
        <p className="eyebrow">Chapter One</p>
        <h2 className="anatomy__heading">Anatomy of a Port</h2>
        <p className="anatomy__lede">
          A port isn't a building — it's a sequence of specialised zones,
          each with its own operator, equipment, and rules, running from the
          open sea to the factory gate.
        </p>

        <div className="anatomy__diagram-wrap">
          <PortDiagram />
        </div>

        <div className="anatomy__grid">
          {ZONES.map((zone, i) => (
            <div className="anatomy__card" key={zone.id}>
              <span className="anatomy__card-index">0{i + 1}</span>
              <span className="eyebrow">{zone.tag}</span>
              <h3>{zone.title}</h3>
              <p>{zone.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
