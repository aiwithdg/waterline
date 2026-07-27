import { REQUIREMENTS, GREEN_INITIATIVES } from "../content/environment";
import "./Environment.css";

export default function Environment() {
  return (
    <section className="env" id="environment">
      <div className="container">
        <p className="eyebrow">Chapter Ten</p>
        <h2 className="env__heading">Environment & Green Ports</h2>
        <p className="env__lede">
          Ports carry a real environmental footprint — air emissions, water
          pollution, habitat disruption — and both regulation and ESG
          pressure on them are rising fast. India has committed to
          net-zero shipping by 2070.
        </p>

        <div className="env__columns">
          <div>
            <h3 className="env__subhead">What's required</h3>
            <ul className="env__list">
              {REQUIREMENTS.map((r) => (
                <li key={r.name}>
                  <h4>{r.name}</h4>
                  <p>{r.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="env__subhead">What ports are doing about it</h3>
            <ul className="env__list">
              {GREEN_INITIATIVES.map((g) => (
                <li key={g.name}>
                  <h4>{g.name}</h4>
                  <p>{g.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
