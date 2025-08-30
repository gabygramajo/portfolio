// Animaciones de scroll y efectos visuales

class ScrollAnimations {
    constructor() {
        this.animatedElements = document.querySelectorAll('.fade-in');
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.setupScrollToTop();
    }
    
    setupIntersectionObserver() {
        // Observer para animaciones fade-in
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Delay escalonado para efecto más suave
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                    
                    // Dejar de observar el elemento una vez animado
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);
        
        // Observar todos los elementos con clase fade-in
        this.animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    setupScrollToTop() {
        // Crear botón de scroll to top
        this.createScrollToTopButton();
        
        // Mostrar/ocultar botón según scroll
        window.addEventListener('scroll', () => {
            this.toggleScrollToTopButton();
        });
    }
    
    createScrollToTopButton() {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '↑';
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.setAttribute('aria-label', 'Volver arriba');
        
        // Estilos inline para el botón
        Object.assign(scrollBtn.style, {
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            opacity: '0',
            visibility: 'hidden',
            transition: 'all 0.3s ease',
            zIndex: '50',
            boxShadow: 'var(--shadow-lg)'
        });
        
        // Event listener para scroll to top
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Hover effects
        scrollBtn.addEventListener('mouseenter', () => {
            scrollBtn.style.transform = 'scale(1.1)';
            scrollBtn.style.backgroundColor = 'var(--primary-color-dark)';
        });
        
        scrollBtn.addEventListener('mouseleave', () => {
            scrollBtn.style.transform = 'scale(1)';
            scrollBtn.style.backgroundColor = 'var(--primary-color)';
        });
        
        document.body.appendChild(scrollBtn);
        this.scrollToTopBtn = scrollBtn;
    }
    
    toggleScrollToTopButton() {
        const scrollY = window.scrollY;
        
        if (scrollY > 400) {
            this.scrollToTopBtn.style.opacity = '1';
            this.scrollToTopBtn.style.visibility = 'visible';
        } else {
            this.scrollToTopBtn.style.opacity = '0';
            this.scrollToTopBtn.style.visibility = 'hidden';
        }
    }
    
    // Método para animar elementos dinámicamente agregados
    animateNewElements() {
        const newElements = document.querySelectorAll('.fade-in:not(.visible)');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);
        
        newElements.forEach(element => observer.observe(element));
    }
    
    // Método para scroll suave a cualquier elemento
    scrollToElement(elementId, offset = 80) {
        const element = document.getElementById(elementId);
        if (element) {
            const elementTop = element.offsetTop - offset;
            window.scrollTo({
                top: elementTop,
                behavior: 'smooth'
            });
        }
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.scrollAnimations = new ScrollAnimations();
});