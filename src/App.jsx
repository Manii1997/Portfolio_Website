import "./App.css";
import AboutSection from "./components/AboutSection/AboutSection";
import Contact from "./components/ContactSection/Contact";
import HeroSection from "./components/HeroSection/HeroSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import Sidebar from "./components/Sidebar/Sidebar";
import SkillsSection from "./components/SkillsSection/SkillsSection";

import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="">
      <Sidebar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <Contact />
      <SpeedInsights />
    </div>
  );
}

export default App;
