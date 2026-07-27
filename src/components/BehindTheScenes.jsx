import { FUNCTIONS } from "../content/behindTheScenes";
import "./BehindTheScenes.css";

export default function BehindTheScenes() {
  return (
    <section className="bts" id="behind-the-scenes">
      <div className="container">
        <p className="eyebrow">Chapter Eight</p>
        <h2 className="bts__heading">Behind the Scenes</h2>
        <p className="bts__lede">
          Cargo handling is the visible part of a port. Underneath it runs
          fifteen-odd supporting functions — some public, most private —
          that all have to work for a single ship call to go smoothly.
        </p>

        <div className="bts__grid">
          {FUNCTIONS.map((f) => (
            <div className="bts__card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
