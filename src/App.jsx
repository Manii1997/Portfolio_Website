import "./App.css";
import AboutSection from "./components/AboutSection/AboutSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Sidebar from "./components/Sidebar/Sidebar";
import SkillsSection from "./components/SkillsSection/SkillsSection";

function App() {
  return (
    <div className="">
      <Sidebar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
}

export default App;
