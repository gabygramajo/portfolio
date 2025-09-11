// Datos de proyectos - Fácil de modificar
// Para agregar un nuevo proyecto, simplemente añade un objeto al array

const projectsData = [
    {
        title: "Dashboard de Ventas Globales",
        description: "Dashboard interactivo en Power BI para analizar las ventas mensuales, tendencias de productos y rendimiento de sucursales en distintas regiones, con KPIs dinámicos y filtros personalizados.",
        image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=600",
        technologies: ["Power BI", "SQL", "Excel", "DAX"],
        githubUrl: "https://github.com/tu-usuario/dashboard-ventas-globales",
        demoUrl: "https://tu-dashboard-ventas-demo.netlify.app"
    },
    {
        title: "Dashboard de Recursos Humanos",
        description: "Dashboard interactivo que analiza métricas clave de empleados, como rotación, ausentismo, antigüedad y desempeño, proporcionando visualizaciones dinámicas y reportes automáticos.",
        image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
        technologies: ["Power BI", "SQL", "Excel"],
        githubUrl: "https://github.com/tu-usuario/dashboard-recursos-humanos",
        demoUrl: "https://tu-dashboard-rh-demo.netlify.app"
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