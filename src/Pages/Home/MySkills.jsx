import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import data from "../../data/index.json";

export default function MySkills() {
  const skills = data.skills.icons;
  const chartRef = useRef(null);
  // Tableau de couleurs pour chaque barre
  const barColors = [
    "rgba(237,238,201, 1)",
    "rgba(221, 231, 199, 1)",
    "rgba( 191, 216, 189, 1)",
    "rgba(152, 201, 163, 1)",
    "rgba(119, 191, 163, 1)",
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
            borderWidth: 1,
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
        {/* <p className="section--title"></p> */}
        <h2 className="skills--section--heading">Mes compétences</h2>
      </div>
      <div className="skills--section--container">
        {skills.map((skill, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
            <img src={`${process.env.PUBLIC_URL}/devicon/${skill.class}.svg`} alt={skill.name} style={{ width: '60px', height: '60px' }} />

            </div>
            <div className="skills--section--card--content">
            </div>
          </div>
        ))}
      </div>
      <div className="canvas-container"  style={{ display: 'none' }}>
        <canvas ref={chartRef} className="canvas-content" />
      </div>
    </section>
  );
}
