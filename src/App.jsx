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
import Technology from "./components/Technology";
import Environment from "./components/Environment";
import Schemes from "./components/Schemes";
import WorkingWith from "./components/WorkingWith";
import QuickReference from "./components/QuickReference";

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
        <Technology />
        <Environment />
        <Schemes />
        <WorkingWith />
        <QuickReference />
        {/* Next: Beyond India (global comparison). */}
      </main>
    </>
  );
}

export default App;
