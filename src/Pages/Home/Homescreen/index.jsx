import { useState } from "react";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";

export default function Home() {
  const [activeSection, setActiveSection] = useState('HeroSection');
  return (
    <>
      <HeroSection setActiveSection={setActiveSection} />
      <MySkills setActiveSection={setActiveSection} />
      <AboutMe setActiveSection={setActiveSection} />
      <MyPortfolio setActiveSection={setActiveSection} activeSection={activeSection} />
      <ContactMe setActiveSection={setActiveSection} />
      <Footer />
    </>
  );
}
