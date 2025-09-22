// Datos del carrusel - Fácil de modificar
// Para agregar una nueva imagen, simplemente añade un objeto al array

const carouselImages = [
    {
        src: "./assets/img/projects/Pescar2025.webp",
        alt: "Foto Grupal Pasantía Artech & Fundación Pescar",
    },
    {
        src: "./assets/img/projects/Pescar2025-Presentación_2.webp",
        alt: "Trabajando la comunicación y Oratoria",
    },
];

// Función para renderizar el carrusel
function renderCarousel() {
    const carouselInner = document.getElementById('carousel-inner');
    
    if (!carouselInner) return;
    
    carouselInner.innerHTML = carouselImages.map((image, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${image.src}" alt="${image.alt}" class="hero__img d-block w-100">
        </div>
    `).join('');
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { carouselImages, renderCarousel };
}