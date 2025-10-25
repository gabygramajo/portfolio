// Datos de proyectos - Fácil de modificar
// Para agregar un nuevo proyecto, simplemente añade un objeto al array

const projectsData = [
    {
        title: "ETL con Python",
        description: "Extraí datos desde una API, transforme los daots utilizando pandas y lo cargué en una BD. Luego utilice FastAPI para crear una API REST y consumir los datos",
        image: "./assets/img/projects/ETL.webp",
        technologies: ["Python", "", "Pandas", "Fastapi"],
        githubUrl: "https://github.com/gabygramajo/Python_ETL",
        demoUrl: "https://github.com/gabygramajo/Python_ETL"
    },
    {
        title: "Reporte de Amenazas Globales a la Ciberseguridad de 2015 a 2024",
        description: "Dashboard interactivo que analiza métricas clave que responde al 'qué, dónde y cuánto' del impacto de los ciberataques, mostrando los países más afectados, las industrias más vulnerables, se puede filtrar por un tipo de ataque específico para analizar en detalle las vulnerabilidades que explota, las defensas más comunes y los actores de amenaza detrás de ellos.",
        image: "./assets/img/projects/ReportedeAmenazasCiberseguridad.png",
        technologies: ["Power BI", "DAX", "Powerquery"],
        githubUrl: "https://github.com/gabygramajo/Dashboard_Global_Cybersecurity_Threats/tree/main",
        demoUrl: "https://github.com/gabygramajo/Dashboard_Global_Cybersecurity_Threats/tree/main"
    }
];

// Función para renderizar proyectos
function renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    
    if (!projectsContainer) return;
    
    projectsContainer.innerHTML = projectsData.map(project => `
        <article class="project-card fade-in">
            <div class="project-card__image">
                <img src="${project.image}" alt="${project.title}" class="project-card__img">
            </div>
            <div class="project-card__content">
                <h3 class="project-card__title">${project.title}</h3>
                <p class="project-card__description">${project.description}</p>
                <div class="project-card__tech">
                    ${project.technologies.map(tech => `
                        <span class="project-card__tech-item">${tech}</span>
                    `).join('')}
                </div>
                <div class="project-card__buttons">
                    <a href="${project.githubUrl}" class="btn btn--secondary project-card__btn" 
                       target="_blank" rel="noopener noreferrer">
                        Ver Código
                    </a>
                    <a href="${project.demoUrl}" class="btn btn--primary project-card__btn" 
                       target="_blank" rel="noopener noreferrer">
                        Ver Demo
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectsData, renderProjects };
}