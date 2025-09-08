// Datos de certificaciones - Fácil de modificar
// Para agregar una nueva certificación, simplemente añade un objeto al array

const certificationsData = [
    // {
    //     title: "JavaScript Algorithms and Data Structures",
    //     institution: "freeCodeCamp",
    //     logo: "🏆",
    //     certificateUrl: "https://freecodecamp.org/certification/tu-usuario/javascript-algorithms-and-data-structures"
    // },
    // {
    //     title: "Responsive Web Design",
    //     institution: "freeCodeCamp",
    //     logo: "📱",
    //     certificateUrl: "https://freecodecamp.org/certification/tu-usuario/responsive-web-design"
    // },
    {
        title: "AWS Cloud Practitioner",
        institution: "Amazon Web Services",
        logo: "☁️",
        certificateUrl: "https://www.credly.com/users/gabriel-omar-gramajo/badges#credly"
    },
    {
        title: "IT Support Professional",
        institution: "Google",
        logo: "💻",
        certificateUrl: "https://www.credly.com/users/gabriel-omar-gramajo/badges#credly"
    },
    {
        title: "IT Essentials",
        institution: "Cisco",
        logo: "💻",
        certificateUrl: "https://www.credly.com/users/gabriel-omar-gramajo/badges#credly"
    },
    // {
    //     title: "MongoDB Developer",
    //     institution: "MongoDB University",
    //     logo: "🍃",
    //     certificateUrl: "https://university.mongodb.com/"
    // }
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