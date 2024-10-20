import { useState, useEffect } from 'react';
import CVPdf from '../../assets/CV.pdf';

export default function HeroSection() {
  const titleText1 = "Je suis SAMI";
  const titleText2Line1 = "Développeur";
  const titleText2Line2 = "FRONT-END";
  const descriptionText = "conçoit et crée l'interface visuelle et interactive des applications web, en utilisant des langages comme HTML, CSS et JavaScript pour offrir une expérience utilisateur intuitive et attrayante.";

  const [displayText, setDisplayText] = useState({ title1: '', title2Line1: '', title2Line2: '', description: '' });

  useEffect(() => {
    const typeText = async (text, key, delay) => {
      let currentText = '';
      for (let i = 0; i < text.length; i++) {
        currentText += text[i];
        setDisplayText(prev => ({ ...prev, [key]: currentText }));
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    };

    const animateTexts = async () => {
      await typeText(titleText1, 'title1', 100);
      await typeText(titleText2Line1, 'title2Line1', 100);
      await typeText(titleText2Line2, 'title2Line2', 100);
      await typeText(descriptionText, 'description', 50);
    };

    animateTexts();
  }, []);

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="hero--section--title1">{displayText.title1}</p>
          <h1 className="hero--section--title">
            {displayText.title2Line1}
            <br />
            {displayText.title2Line2}
          </h1>
          <p className="hero--section-description1">{displayText.description}</p>
        </div>
        <a href={CVPdf} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Voir mon CV
        </a>
      </div>
    </section>
  );
}
