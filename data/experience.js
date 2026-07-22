// Datos de experiencia laboral - Fácil de modificar
// Para agregar una nueva experiencia, simplemente añade un objeto al array

const experienceData = [
    {
        position: "Pasante IT Data & Process Automation Trainee",
        company: "Artech & Fundación Pescar",
        period: "07/2025 - 12/2025",
        location: "CABA, Buenos Aires, Argentina",
        description: "Práctica formativa en análisis de Datos y Automatización de Procesos. Implementé sistemas automatizados de consulta y orquestación de datos utilizando n8n, integrando Agentes de IA y APIs. Procesos ETL utilizando Python y SQL, asegurando la calidad y consistencia de los datos para su posterior análisis.Modelos y normalización de datos y dashboards en Power BI, utilizando DAX para métricas de rendimiento.",
        technologies: ["Python", "SQL", "Power BI", "Excel", "Databricks", "Power Automate", "PowerApps", "N8N"]
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
