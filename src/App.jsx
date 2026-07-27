import Header from "./components/Header";
import Hero from "./components/Hero";
import Anatomy from "./components/Anatomy";
import Governance from "./components/Governance";
import Stakeholders from "./components/Stakeholders";
import ShipCall from "./components/ShipCall";
import Cargo from "./components/Cargo";
import Container from "./components/Container";
import Metrics from "./components/Metrics";
import BehindTheScenes from "./components/BehindTheScenes";

function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Anatomy />
        <Governance />
        <Stakeholders />
        <ShipCall />
        <Cargo />
        <Container />
        <Metrics />
        <BehindTheScenes />
        {/* Next chapters (Technology & Hinterland, Environment,
            Schemes, Working With Ports, Quick Reference, Beyond India)
            will be added here one at a time. */}
      </main>
    </>
  );
}

export default App;
