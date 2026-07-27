import Header from "./components/Header";
import Hero from "./components/Hero";
import Anatomy from "./components/Anatomy";
import Governance from "./components/Governance";

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Anatomy />
        <Governance />
        {/* Next chapters (Stakeholder Ecosystem, The Life of a Ship Call, ...)
            will be added here one at a time. */}
      </main>
    </>
  );
}

export default App;
