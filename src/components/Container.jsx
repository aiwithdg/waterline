import { IMPORT_STEPS, EXPORT_STEPS } from "../content/container";
import "./Container.css";

function Track({ label, steps }) {
  return (
    <div className="container-track">
      <span className="eyebrow">{label}</span>
      <ol className="container-track__list">
        {steps.map((s, i) => (
          <li key={s.title}>
            <span className="container-track__num">{i + 1}</span>
            <div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Container() {
  return (
    <section className="container-journey" id="container-journey">
      <div className="container">
        <p className="eyebrow">Chapter Six</p>
        <h2 className="container-journey__heading">Follow a Container</h2>
        <p className="container-journey__lede">
          Behind every box moving through customs is a paper trail as long
          as the physical journey — a relay between exporter, shipping
          line, Customs House Agent, and Customs itself. Here's what that
          relay looks like in each direction.
        </p>

        <div className="container-journey__tracks">
          <Track label="Import — factory abroad to Indian warehouse" steps={IMPORT_STEPS} />
          <Track label="Export — Indian factory to the ship" steps={EXPORT_STEPS} />
        </div>

        <div className="container-journey__callout">
          <span className="eyebrow">Dwell time insight</span>
          <p>
            The single biggest cause of delay at Indian ports isn't
            equipment or congestion — it's documentation mismatch. A wrong
            HS code, an incorrect declared value, or a discrepancy between
            the invoice and the Bill of Entry can hold up a container far
            longer than any physical bottleneck.
          </p>
        </div>
      </div>
    </section>
  );
}
