import CVPdf from '../../assets/CV.pdf';
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Je suis SAMI</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Développeur</span>{" "}
            <br />
            FRONT-END
          </h1>
          <p className="hero--section-description">
          conçoit et crée l'interface visuelle et interactive des applications web, 
          en utilisant des langages comme HTML, CSS et JavaScript pour offrir une expérience utilisateur intuitive et attrayante. 
          </p>
        </div>
        <a href={CVPdf} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Voir mon CV
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/photo-sami.webp" alt="Hero Section" />
      </div>
    </section>
  );
}
