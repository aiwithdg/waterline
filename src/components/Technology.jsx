import { TECH_LANDSCAPE, HINTERLAND_MODES } from "../content/technology";
import "./Technology.css";

export default function Technology() {
  return (
    <section className="tech" id="technology">
      <div className="container">
        <p className="eyebrow">Chapter Nine</p>
        <h2 className="tech__heading">Technology & Hinterland</h2>
        <p className="tech__lede">
          A port's competitiveness is only half about what happens on the
          quay. The other half is how far behind the world's automation
          curve it sits, and how badly served it is by the roads, rails,
          and waterways that connect it to the country beyond.
        </p>

        <h3 className="tech__subhead">Where the technology gap sits</h3>
        <div className="tech__table-wrap">
          <table className="tech__table">
            <thead>
              <tr>
                <th>Function</th>
                <th>What's in use today</th>
                <th>Where it's headed</th>
              </tr>
            </thead>
            <tbody>
              {TECH_LANDSCAPE.map((t) => (
                <tr key={t.area}>
                  <td>{t.area}</td>
                  <td>{t.current}</td>
                  <td>{t.next}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="tech__subhead">Getting cargo to and from the port</h3>
        <div className="tech__grid">
          {HINTERLAND_MODES.map((m) => (
            <div className="tech__card" key={m.mode}>
              <span className="tech__share">{m.share}</span>
              <h4>{m.mode}</h4>
              <p>{m.note}</p>
            </div>
          ))}
        </div>

        <div className="tech__callout">
          <span className="eyebrow">The real number</span>
          <p>
            Logistics costs run at 13–14% of India's GDP, against roughly
            8% in developed economies. Most of that gap isn't at the port
            gate — it's poor first/last-mile connectivity, patchy rail
            access at smaller ports, and a road network still carrying the
            bulk of cargo that rail or coastal shipping could move cheaper.
          </p>
        </div>
      </div>
    </section>
  );
}
