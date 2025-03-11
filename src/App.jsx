import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import FaqSection from "./components/FaqSection";

function App() {
  return (
    <>
      <div className="font-display text-right min-h-screen" dir="rtl">
        <Header />
        <HeroSection />
        <MainSection />
        <FaqSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
