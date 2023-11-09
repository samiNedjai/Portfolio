import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import data from "../../data/index.json";

export default function MySkills() {
  const skills = data.skills.icons;
  const chartRef = useRef(null);
  // Tableau de couleurs pour chaque barre
  const barColors = [
    "rgba(0, 255, 255, 1)",
    "rgba(100, 149, 237, 1)",
    "rgba( 0, 139, 139, 1)",
    "rgba(30, 144, 255, 1)",
    "rgba(143, 188, 143, 1)",
    "rgba(173, 216, 230, 1)",
  ];

  useEffect(() => {
    const skillNames = skills.map((skill) => skill.name);
    const skillLevels = skills.map((skill) => skill.level);

    const ctx = chartRef.current.getContext("2d");

    if (chartRef.current.chart) {
      chartRef.current.chart.destroy(); // Détruire le graphique précédent s'il existe
    }

    const newChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: skillNames,
        datasets: [
          {
            label: "Niveau de compétence en pourcentage",
            data: skillLevels,
            backgroundColor: barColors,
            borderColor: barColors.map((color) => color.replace("0.2", "1")),
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    chartRef.current.chart = newChart; // Stocker la référence au nouveau graphique
  }, [skills]);

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">Mes compétences</p>
        <h2 className="skills--section--heading">Mon expertise</h2>
      </div>
      <div className="skills--section--container">
        {skills.map((skill, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
            <img src={`${process.env.PUBLIC_URL}/devicon/${skill.class}.svg`} alt={skill.name} style={{ width: '60px', height: '60px' }} />

            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{skill.name}</h3>
              <p className="skills--section--description">{skill.level}%</p>
            </div>
          </div>
        ))}
      </div>
      <div className="canvas-container">
        <canvas ref={chartRef} className="canvas-content" />
      </div>
    </section>
  );
}
