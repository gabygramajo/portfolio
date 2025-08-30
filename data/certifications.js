// Datos de certificaciones - Fácil de modificar
// Para agregar una nueva certificación, simplemente añade un objeto al array

const certificationsData = [
    {
        title: "JavaScript Algorithms and Data Structures",
        institution: "freeCodeCamp",
        logo: "🏆",
        certificateUrl: "https://freecodecamp.org/certification/tu-usuario/javascript-algorithms-and-data-structures"
    },
    {
        title: "Responsive Web Design",
        institution: "freeCodeCamp",
        logo: "📱",
        certificateUrl: "https://freecodecamp.org/certification/tu-usuario/responsive-web-design"
    },
    {
        title: "AWS Cloud Practitioner",
        institution: "Amazon Web Services",
        logo: "☁️",
        certificateUrl: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
    },
    {
        title: "Google Analytics Certified",
        institution: "Google",
        logo: "📊",
        certificateUrl: "https://skillshop.exceedlms.com/student/catalog/list?category_ids=53-google-analytics-4"
    },
    {
        title: "Meta Front-End Developer",
        institution: "Meta (Facebook)",
        logo: "💻",
        certificateUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer"
    },
    {
        title: "MongoDB Developer",
        institution: "MongoDB University",
        logo: "🍃",
        certificateUrl: "https://university.mongodb.com/"
    }
];

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
            <a href="${cert.certificateUrl}" class="btn btn--primary certification-card__btn" 
               target="_blank" rel="noopener noreferrer">
                Ver Certificado
            </a>
        </article>
    `).join('');
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { certificationsData, renderCertifications };
}