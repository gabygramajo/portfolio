// Datos de skills - Fácil de modificar
// Para agregar un nuevo skill, simplemente añade un objeto al array

const skillsData = [
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
        name: "React",
        icon: "⚛️"
    },
    {
        name: "Node.js",
        icon: "🟢"
    },
    {
        name: "Python",
        icon: "🐍"
    },
    {
        name: "Git",
        icon: "📝"
    },
    {
        name: "MongoDB",
        icon: "🍃"
    },
    {
        name: "PostgreSQL",
        icon: "🐘"
    },
    {
        name: "Docker",
        icon: "🐳"
    },
    {
        name: "AWS",
        icon: "☁️"
    },
    {
        name: "TypeScript",
        icon: "📘"
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