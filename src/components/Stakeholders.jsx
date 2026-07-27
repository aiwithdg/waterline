import { INTERNAL, PRIVATE_PLAYERS, INSTITUTIONAL } from "../content/stakeholders";
import "./Stakeholders.css";

export default function Stakeholders() {
  return (
    <section className="stakeholders" id="stakeholders">
      <div className="container">
        <p className="eyebrow">Chapter Three</p>
        <h2 className="stakeholders__heading">Who's Actually in the Room</h2>
        <p className="stakeholders__lede">
          A port is not one organisation making decisions — it's a web of
          public officials, private operators, and institutional funders,
          each with their own authority and their own timeline. Getting
          anything done means knowing which of them you actually need.
        </p>

        <h3 className="stakeholders__subhead">Inside the Port Authority</h3>
        <div className="stakeholders__table-wrap">
          <table className="stakeholders__table">
            <tbody>
              {INTERNAL.map((row) => (
                <tr key={row.role}>
                  <td className="stakeholders__role">{row.role}</td>
                  <td>{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="stakeholders__subhead">The private sector on the ground</h3>
        <div className="stakeholders__grid">
          {PRIVATE_PLAYERS.map((p) => (
            <div className="stakeholders__card" key={p.group}>
              <h4>{p.group}</h4>
              <p>{p.names}</p>
            </div>
          ))}
        </div>

        <h3 className="stakeholders__subhead">Institutional & government partners</h3>
        <div className="stakeholders__grid">
          {INSTITUTIONAL.map((p) => (
            <div className="stakeholders__card" key={p.group}>
              <h4>{p.group}</h4>
              <p>{p.names}</p>
            </div>
          ))}
        </div>

        <div className="stakeholders__callout">
          <span className="eyebrow">On the ground</span>
          <p>
            Indian port organisations remain hierarchical even after the
            2021 reforms. Decisions move through committees and formal
            "office notes" rather than single approvals — and a champion
            officer being transferred mid-project is one of the biggest
            risks in any long engagement, since institutional relationships
            outlast personal ones.
          </p>
        </div>
      </div>
    </section>
  );
}
