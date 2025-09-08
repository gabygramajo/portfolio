// Datos de skills - Fácil de modificar
// Para agregar un nuevo skill, simplemente añade un objeto al array

const skillsData = [
    {
        name: "Python",
        icon: "<i class=\"fa-brands fa-python\"></i>"
    },
    {
        name: "SQL",
        icon: "<i class=\"fa-solid fa-database\"></i>"
    },
    {
        name: "Excel",
        icon: "<i class=\"fa-solid fa-file-excel\"></i>"
    },
    {
        name: "Git",
        icon: "<i class=\"fa-brands fa-square-git\"></i>"
    },
    {
        name: "HTML5",
        icon: "<i class=\"fa-brands fa-html5\"></i>"
    },
    {
        name: "CSS3",
        icon: "<i class=\"fa-brands fa-css3-alt\"></i>"
    },
    {
        name: "JavaScript",
        icon: "<i class=\"fa-brands fa-js\"></i>"
    },
    {
        name: "AWS",
        icon: "<i class=\"fa-brands fa-aws\"></i>"
    },
    {
        name: "Linux",
        icon: "<i class=\"fa-brands fa-linux\"></i>"
    }
];

// Función para renderizar skills
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    if (!skillsContainer) return;
    
    skillsContainer.innerHTML = skillsData.map(skill => `
        <div class="skill-card fade-in">
            <span class="skill-card__icon">${skill.icon}</span>
            <h3 class="skill-card__name">${skill.name}</h3>
        </div>
    `).join('');
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { skillsData, renderSkills };
}