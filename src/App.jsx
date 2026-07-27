import Header from "./components/Header";
import Hero from "./components/Hero";
import Anatomy from "./components/Anatomy";
import Governance from "./components/Governance";
import Stakeholders from "./components/Stakeholders";

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Anatomy />
        <Governance />
        <Stakeholders />
        {/* Next chapters (The Life of a Ship Call, Six Kinds of Cargo, ...)
            will be added here one at a time. */}
      </main>
    </>
  );
}

export default App;
