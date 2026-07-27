import Header from "./components/Header";
import Hero from "./components/Hero";
import Anatomy from "./components/Anatomy";
import Governance from "./components/Governance";
import Stakeholders from "./components/Stakeholders";
import ShipCall from "./components/ShipCall";
import Cargo from "./components/Cargo";
import Container from "./components/Container";

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
        {/* Next chapters (Charges & Metrics, Behind the Scenes, ...)
            will be added here one at a time. */}
      </main>
    </>
  );
}

export default App;
