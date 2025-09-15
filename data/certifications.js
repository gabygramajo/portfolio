// Datos de educación - Fácil de modificar
// Para agregar nuevos estudios o certificaciones, simplemente añade objetos a los arrays correspondientes

const universityData = [
    {
        degree: "Licenciatura en Informática",
        institution: "Universidad Nacional",
        period: "2020 - Presente",
        status: "En curso",
        description: "Formación integral en ciencias de la computación, programación, bases de datos y análisis de sistemas.",
        logo: "🎓"
    }
];

const certificationsData = [
    {
        title: "AWS Cloud Practitioner",
        institution: "Amazon Web Services",
        logo: "☁️",
        date: "2023",
        certificateUrl: "https://www.credly.com/users/gabriel-omar-gramajo/badges#credly"
    },
    {
        title: "IT Support Professional",
        institution: "Google",
        logo: "💻",
        date: "2023",
        certificateUrl: "https://www.credly.com/users/gabriel-omar-gramajo/badges#credly"
    },
    {
        title: "IT Essentials",
        institution: "Cisco",
        logo: "💻",
        date: "2022",
        certificateUrl: "https://www.credly.com/users/gabriel-omar-gramajo/badges#credly"
    }
];

// Función para renderizar estudios universitarios
function renderUniversityStudies() {
    const universityContainer = document.getElementById('university-container');
    
    if (!universityContainer) return;
    
    universityContainer.innerHTML = universityData.map(study => `
        <div class="education-card fade-in">
            <div class="education-card__logo">
                ${study.logo}
            </div>
            <div class="education-card__content">
                <h3 class="education-card__title">${study.degree}</h3>
                <h4 class="education-card__institution">${study.institution}</h4>
                <div class="education-card__meta">
                    <span class="education-card__period">${study.period}</span>
                    <span class="education-card__status">${study.status}</span>
                </div>
                <p class="education-card__description">${study.description}</p>
            </div>
        </div>
    `).join('');
}

// Función para renderizar certificaciones
function renderCertifications() {
    const certificationsContainer = document.getElementById('certifications-container');
    
    if (!certificationsContainer) return;
    
    certificationsContainer.innerHTML = certificationsData.map(cert => `
        <article class="certification-card fade-in">
            <div class="certification-card__logo">
                ${cert.logo}
            </div>
            <h3 class="certification-card__title">${cert.title}</h3>
            <p class="certification-card__institution">${cert.institution}</p>
            <p class="certification-card__date">${cert.date}</p>
            <a href="${cert.certificateUrl}" class="btn btn--primary certification-card__btn" 
               target="_blank" rel="noopener noreferrer">
                Ver Certificado
            </a>
        </article>
    `).join('');
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { universityData, certificationsData, renderUniversityStudies, renderCertifications };
}