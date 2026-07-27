import { ARRIVAL_STAGES, DEPARTURE_STAGES } from "../content/shipcall";
import "./ShipCall.css";

function Timeline({ stages }) {
  return (
    <ol className="shipcall__timeline">
      {stages.map((s, i) => (
        <li className="shipcall__stage" key={s.title}>
          <span className="shipcall__stage-num">{i + 1}</span>
          <div className="shipcall__stage-body">
            <span className="eyebrow">{s.tag}</span>
            <h4>{s.title}</h4>
            <p>{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function ShipCall() {
  return (
    <section className="shipcall" id="ship-call">
      <div className="container">
        <p className="eyebrow">Chapter Four</p>
        <h2 className="shipcall__heading">The Life of a Ship Call</h2>
        <p className="shipcall__lede">
          Every vessel that calls at an Indian port moves through the same
          defined sequence — a relay of officials, documents, and clearances
          that has to complete in order before cargo can move, and again in
          reverse before the ship can leave.
        </p>

        <h3 className="shipcall__subhead">Arrival</h3>
        <Timeline stages={ARRIVAL_STAGES} />

        <h3 className="shipcall__subhead">Departure</h3>
        <Timeline stages={DEPARTURE_STAGES} />
      </div>
    </section>
  );
}
