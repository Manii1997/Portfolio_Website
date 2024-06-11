import "./App.css";
import AboutSection from "./components/AboutSection/AboutSection";
import Contact from "./components/ContactSection/Contact";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import Sidebar from "./components/Sidebar/Sidebar";
import SkillsSection from "./components/SkillsSection/SkillsSection";

function App() {
  return (
    <div className="">
      <Sidebar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <Contact />
    </div>
  );
}

export default App;
