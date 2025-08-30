// Datos de proyectos - Fácil de modificar
// Para agregar un nuevo proyecto, simplemente añade un objeto al array

const projectsData = [
    {
        title: "E-commerce Moderno",
        description: "Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración. Diseño responsive y optimizado para SEO.",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        githubUrl: "https://github.com/tu-usuario/ecommerce-project",
        demoUrl: "https://tu-ecommerce-demo.netlify.app"
    },
    {
        title: "Dashboard Analytics",
        description: "Dashboard interactivo para visualización de datos con gráficos en tiempo real, filtros avanzados y exportación de reportes en múltiples formatos.",
        image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600",
        technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
        githubUrl: "https://github.com/tu-usuario/dashboard-analytics",
        demoUrl: "https://tu-dashboard-demo.netlify.app"
    },
    {
        title: "App de Gestión de Tareas",
        description: "Aplicación web para gestión de proyectos y tareas con funcionalidades de colaboración en equipo, notificaciones y seguimiento de progreso.",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
        technologies: ["JavaScript", "Firebase", "CSS Grid", "PWA"],
        githubUrl: "https://github.com/tu-usuario/task-manager",
        demoUrl: "https://tu-taskmanager-demo.netlify.app"
    },
    {
        title: "Portfolio Interactivo",
        description: "Sitio web portfolio con animaciones avanzadas, modo oscuro/claro, formulario de contacto funcional y optimización completa para dispositivos móviles.",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
        technologies: ["HTML5", "CSS3", "JavaScript", "EmailJS"],
        githubUrl: "https://github.com/tu-usuario/interactive-portfolio",
        demoUrl: "https://tu-portfolio-demo.netlify.app"
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