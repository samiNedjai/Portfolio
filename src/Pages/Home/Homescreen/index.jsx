import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../../../components/Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Navbar from "../../../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <MySkills/>
      <AboutMe/>
      <MyPortfolio/>
      <ContactMe/>
      <Footer/>
    </>
  );
}
