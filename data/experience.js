// Datos de experiencia laboral - Fácil de modificar
// Para agregar una nueva experiencia, simplemente añade un objeto al array

const experienceData = [
    {
        position: "Data Analyst",
        company: "Tech Solutions Inc.",
        period: "2023 - Presente",
        location: "Buenos Aires, Argentina",
        description: "Análisis de datos de ventas y marketing, creación de dashboards interactivos en Power BI, y desarrollo de reportes automatizados para la toma de decisiones estratégicas.",
        achievements: [
            "Implementé un sistema de reportes que redujo el tiempo de análisis en un 40%",
            "Creé dashboards que mejoraron la visibilidad de KPIs clave para el equipo directivo",
            "Automaticé procesos de ETL que procesaban más de 100,000 registros diarios"
        ],
        technologies: ["Power BI", "SQL", "Python", "Excel"]
    },
    {
        position: "Junior Data Analyst",
        company: "DataCorp Solutions",
        period: "2022 - 2023",
        location: "Buenos Aires, Argentina",
        description: "Soporte en análisis de datos, limpieza y preparación de datasets, y asistencia en la creación de visualizaciones para diferentes departamentos.",
        achievements: [
            "Participé en proyectos de migración de datos a la nube (AWS)",
            "Desarrollé scripts en Python para automatizar tareas repetitivas",
            "Colaboré en la implementación de mejores prácticas de calidad de datos"
        ],
        technologies: ["Python", "SQL", "Excel", "AWS"]
    }
];

// Función para renderizar experiencias
function renderExperience() {
    const experienceContainer = document.getElementById('experience-container');
    
    if (!experienceContainer) return;
    
    experienceContainer.innerHTML = experienceData.map((exp, index) => `
        <div class="experience-card fade-in">
            <div class="experience-card__header">
                <div class="experience-card__main-info">
                    <h3 class="experience-card__position">${exp.position}</h3>
                    <h4 class="experience-card__company">${exp.company}</h4>
                    <div class="experience-card__meta">
                        <span class="experience-card__period">
                            <i class="fa-solid fa-calendar"></i>
                            ${exp.period}
                        </span>
                        <span class="experience-card__location">
                            <i class="fa-solid fa-location-dot"></i>
                            ${exp.location}
                        </span>
                    </div>
                </div>
            </div>
            
            <div class="experience-card__content">
                <p class="experience-card__description">${exp.description}</p>
                
                <div class="experience-card__achievements">
                    <h5 class="experience-card__achievements-title">Logros principales:</h5>
                    <ul class="experience-card__achievements-list">
                        ${exp.achievements.map(achievement => `
                            <li>${achievement}</li>
                        `).join('')}
                    </ul>
                </div>
                
                <div class="experience-card__technologies">
                    <h5 class="experience-card__tech-title">Tecnologías utilizadas:</h5>
                    <div class="experience-card__tech-list">
                        ${exp.technologies.map(tech => `
                            <span class="experience-card__tech-item">${tech}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { experienceData, renderExperience };
}