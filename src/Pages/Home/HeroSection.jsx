import CVPdf from '../../assets/CV.pdf';
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm SAMI</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </div>
        <a href={CVPdf} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Get In Touch
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/photo-sami.png" alt="Hero Section" />
      </div>
    </section>
  );
}
