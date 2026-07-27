import { CHARGES, KPIS } from "../content/metrics";
import "./Metrics.css";

export default function Metrics() {
  return (
    <section className="metrics" id="metrics">
      <div className="container">
        <p className="eyebrow">Chapter Seven</p>
        <h2 className="metrics__heading">Charges & Performance Metrics</h2>
        <p className="metrics__lede">
          Every service at a port is a billable line item, and every
          operation is measured against a benchmark. Together, charges and
          KPIs are the language port management, shipping lines, and
          regulators actually use to talk about performance.
        </p>

        <h3 className="metrics__subhead">What gets charged, and to whom</h3>
        <div className="metrics__table-wrap">
          <table className="metrics__table">
            <thead>
              <tr>
                <th>Charge</th>
                <th>What it covers</th>
                <th>Billed to</th>
              </tr>
            </thead>
            <tbody>
              {CHARGES.map((c) => (
                <tr key={c.category}>
                  <td>{c.category}</td>
                  <td>{c.detail}</td>
                  <td>{c.chargedTo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="metrics__subhead">How performance is measured</h3>
        <div className="metrics__grid">
          {KPIS.map((k) => (
            <div className="metrics__card" key={k.label}>
              <span className="metrics__value">{k.value}</span>
              <span className="metrics__label">{k.label}</span>
              <span className="metrics__unit">{k.unit}</span>
            </div>
          ))}
        </div>

        <div className="metrics__callout">
          <span className="eyebrow">Benchmarking note</span>
          <p>
            India's port charges are broadly competitive with regional
            peers — the real gap is inland. Getting cargo to and from the
            port, not through it, is where the country loses the most
            time and cost.
          </p>
        </div>
      </div>
    </section>
  );
}
