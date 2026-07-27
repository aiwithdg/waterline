import { PORTALS, LEGISLATION, GLOSSARY } from "../content/reference";
import "./QuickReference.css";

export default function QuickReference() {
  return (
    <section className="qr" id="quick-reference">
      <div className="container">
        <p className="eyebrow">Chapter Thirteen</p>
        <h2 className="qr__heading">Quick Reference</h2>
        <p className="qr__lede">
          The portals, laws, and shorthand that everything above rests on —
          for whenever you need to look something up rather than read
          another paragraph about it.
        </p>

        <h3 className="qr__subhead">Government portals</h3>
        <div className="qr__table-wrap">
          <table className="qr__table">
            <tbody>
              {PORTALS.map((p) => (
                <tr key={p.name}>
                  <td className="qr__strong">{p.name}</td>
                  <td className="qr__mono">{p.url}</td>
                  <td>{p.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="qr__subhead">Key legislation</h3>
        <div className="qr__table-wrap">
          <table className="qr__table">
            <tbody>
              {LEGISLATION.map((l) => (
                <tr key={l.name}>
                  <td className="qr__strong">{l.name}</td>
                  <td className="qr__mono">{l.year}</td>
                  <td>{l.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="qr__subhead">Glossary</h3>
        <div className="qr__glossary">
          {GLOSSARY.map(([abbr, full]) => (
            <div className="qr__term" key={abbr}>
              <span className="qr__abbr">{abbr}</span>
              <span className="qr__full">{full}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
