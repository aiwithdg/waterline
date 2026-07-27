import { CENTRAL_BODIES, MAJOR_PORTS, REGULATORS } from "../content/governance";
import "./Governance.css";

export default function Governance() {
  return (
    <section className="governance" id="governance">
      <div className="container">
        <p className="eyebrow">Chapter Two</p>
        <h2 className="governance__heading">Governance & Regulators</h2>
        <p className="governance__lede">
          India's port sector runs on a dual structure — Central government
          for the 12 Major Ports, and individual states for the 200+ minor
          and intermediate ports. A web of regulators then layers on top,
          each responsible for a different slice of what happens on the
          water and at the quay.
        </p>

        <h3 className="governance__subhead">Central-level bodies</h3>
        <div className="governance__grid">
          {CENTRAL_BODIES.map((b) => (
            <div className="governance__card" key={b.abbr}>
              <span className="eyebrow">{b.abbr}</span>
              <h4>{b.name}</h4>
              <p>{b.role}</p>
            </div>
          ))}
        </div>

        <h3 className="governance__subhead">The 12 Major Ports</h3>
        <p className="governance__note">
          Since the Major Port Authorities Act, 2021, all 12 converted from
          government-run Port Trusts into autonomous Port Authorities —
          giving them their own boards, commercial contracting power, and
          more flexibility to set tariffs on PPP terminals.
        </p>
        <div className="governance__table-wrap">
          <table className="governance__table">
            <thead>
              <tr>
                <th>Port Authority</th>
                <th>Location</th>
                <th>State</th>
                <th>Key Cargo</th>
              </tr>
            </thead>
            <tbody>
              {MAJOR_PORTS.map((p) => (
                <tr key={p.name}>
                  <td>{p.name}</td>
                  <td>{p.city}</td>
                  <td>{p.state}</td>
                  <td>{p.cargo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="governance__subhead">Non-major ports</h3>
        <p className="governance__note">
          The 200+ minor and intermediate ports are run by State Maritime
          Boards — Gujarat's, with 41 ports, is the largest such network.
          These operate independently of MoPSW; engagements route through
          the relevant state board instead.
        </p>

        <h3 className="governance__subhead">Who regulates what</h3>
        <div className="governance__grid">
          {REGULATORS.map((r) => (
            <div className="governance__card" key={r.abbr}>
              <span className="eyebrow">{r.abbr}</span>
              <h4>{r.name}</h4>
              <p>{r.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
