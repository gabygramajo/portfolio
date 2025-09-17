// Datos de skills agrupados - Fácil de modificar
// Para agregar un nuevo skill, simplemente añade un objeto al array correspondiente

const skillsGroupedData = {
    "Lenguajes & Análisis": [
        {
            name: "SQL",
            icon: "<i class=\"fa-solid fa-database\"></i>"
        },
        {
            name: "Python",
            icon: "<i class=\"fa-brands fa-python\"></i>"
        },
        {
            name: "Pandas",
            icon: "<i class=\"fa-solid fa-table\"></i>"
        },
        {
            name: "NumPy",
            icon: "<i class=\"fa-solid fa-calculator\"></i>"
        },
    ],
    "Hojas de Cálculo, Visualización & BI": [
        {
            name: "Excel",
            icon: "<i class=\"fa-solid fa-file-excel\"></i>"
        },
        {
            name: "Power BI",
            icon: "<i class=\"fa-solid fa-chart-bar\"></i>"
        },
    ],
    "Cloud": [
        {
            name: "AWS",
            icon: "<i class=\"fa-brands fa-aws\"></i>"
        }
    ],
    "Control de Versiones": [
        {
            name: "Git",
            icon: "<i class=\"fa-brands fa-git-alt\"></i>"
        },
        {
            name: "GitHub",
            icon: "<i class=\"fa-brands fa-github\"></i>"
        }
    ],
    "Herramientas de Gestión y Productividad:": [
        {
            name: "Bash",
            icon: "<i class=\"fa-solid fa-terminal\"></i>"
        },
        {
            name: "Jira Service Management",
            icon: "<i class=\"fa-brands fa-jira\"></i>"
        },
    ]
};

// Función para renderizar skills agrupados
function renderSkills() {
    const skillsContainer = document.getElementById('skills-container');
    
    if (!skillsContainer) return;
    
    const groupsArray = Object.entries(skillsGroupedData);
    
    skillsContainer.innerHTML = `
        <div class="row g-4">
            ${groupsArray.map((group, groupIndex) => {
                const [groupName, skills] = group;
                const colClass = groupsArray.length <= 2 ? 'col-lg-6' : 'col-lg-4';
                
                return `
                    <div class="col-12 ${colClass}">
                        <div class="skills-group fade-in">
                            <h3 class="skills-group__title">${groupName}</h3>
                            <div class="skills-group__items">
                                ${skills.map(skill => `
                                    <div class="skill-card">
                                        <span class="skill-card__icon">${skill.icon}</span>
                                        <h4 class="skill-card__name">${skill.name}</h4>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { skillsGroupedData, renderSkills };
}