// Datos del carrusel - Fácil de modificar
// Para agregar una nueva imagen, simplemente añade un objeto al array

const carouselImages = [
    {
        src: "https://avatars.githubusercontent.com/u/77758104?s=400&u=0b552b739deb570d277d80e8f1c715b9389655ea&v=4",
        alt: "Foto profesional",
        caption: "Gabriel Gramajo - Data Analyst"
    },
    {
        src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "Trabajando con datos",
        caption: "Analizando datos y creando insights"
    },
    {
        src: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=400",
        alt: "Dashboard de análisis",
        caption: "Creando dashboards interactivos"
    }
];

// Función para renderizar el carrusel
function renderCarousel() {
    const carouselInner = document.getElementById('carousel-inner');
    
    if (!carouselInner) return;
    
    carouselInner.innerHTML = carouselImages.map((image, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${image.src}" alt="${image.alt}" class="hero__img d-block w-100">
            <div class="carousel-caption d-none d-md-block">
                <p class="carousel-caption-text">${image.caption}</p>
            </div>
        </div>
    `).join('');
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { carouselImages, renderCarousel };
}