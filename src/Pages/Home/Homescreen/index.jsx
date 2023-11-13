import React, { useState, useEffect } from "react";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../../../components/Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Navbar from "../../../components/Navbar";
import Loading from "../../../components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulation d'un chargement (setTimeout utilisé pour simuler le chargement de votre contenu)
    const timer = setTimeout(() => {
      setIsLoading(false); // Une fois le chargement simulé terminé, on met à jour l'état pour afficher le contenu
    }, 2000); // Vous pouvez ajuster le délai selon vos besoins

    return () => clearTimeout(timer); // Nettoyage du timer lors du démontage du composant
  }, []);

  return (
    <>
      {isLoading ? ( // Si isLoading est vrai, affiche le composant Loading
        <Loading />
      ) : (
        // Sinon, affiche le contenu de la page Home
        <>
          <Navbar />
          <HeroSection />
          <MySkills />
          <AboutMe />
          <MyPortfolio />
          <ContactMe />
          <Footer />
        </>
      )}
    </>
  );
}