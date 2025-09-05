// Datos de skills - Fácil de modificar
// Para agregar un nuevo skill, simplemente añade un objeto al array

const skillsData = [
    {
        name: "Python",
        icon: "🐍"
    },
    {
        name: "SQL",
        icon: "🐘"
    },
    {
        name: "Excel",
        icon: "📊"
    },
    {
        name: "Git",
        icon: "📝"
    },
    {
        name: "HTML5",
        icon: "🌐"
    },
    {
        name: "CSS3",
        icon: "🎨"
    },
    {
        name: "JavaScript",
        icon: "⚡"
    },
    {
        name: "AWS",
        icon: "☁️"
    },
    {
        name: "Linux",
        icon: "🐧"
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