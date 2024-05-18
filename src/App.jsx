import Creations from "./components/Creations";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InteractiveVR from "./components/InteractiveVR";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <InteractiveVR />
        <Creations />
      </main>
      <Footer />
    </>
  );
}

export default App;
