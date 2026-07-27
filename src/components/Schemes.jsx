import { SCHEMES } from "../content/schemes";
import "./Schemes.css";

export default function Schemes() {
  return (
    <section className="schemes" id="schemes">
      <div className="container">
        <p className="eyebrow">Chapter Eleven</p>
        <h2 className="schemes__heading">Schemes & Programs</h2>
        <p className="schemes__lede">
          A handful of government programmes shape where money, policy
          attention, and startup activity in the sector actually flow.
          Knowing them is the fastest way to understand where India's
          maritime ambitions are backed by real funding.
        </p>

        <div className="schemes__list">
          {SCHEMES.map((s) => (
            <div className="schemes__row" key={s.name}>
              <div className="schemes__row-head">
                <h3>{s.name}</h3>
                <span className="eyebrow">{s.tag}</span>
              </div>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
