// Archivo principal - Orquesta toda la funcionalidad

class PortfolioApp {
    constructor() {
        this.isLoaded = false;
        this.init();
    }
    
    async init() {
        try {
            // Esperar a que el DOM esté completamente cargado
            await this.waitForDOM();
            
            // Configurar funcionalidad del portafolio
            this.setupPortfolioFunctionality();

            // Renderizar contenido dinámico
            this.renderDynamicContent();
            
            // Configurar performance optimizations
            this.setupPerformanceOptimizations();
            
            // Configurar accesibilidad
            this.setupAccessibility();
            
            // Marcar como cargado
            this.isLoaded = true;
            
            console.log('✅ Portfolio cargado correctamente');
            
        } catch (error) {
            console.error('❌ Error al cargar el portfolio:', error);
        }
    }
    
    waitForDOM() {
        return new Promise((resolve) => {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', resolve);
            } else {
                resolve();
            }
        });
    }

    setupPortfolioFunctionality() {
        // Configurar la funcionalidad de copiar el correo
        this.setupSocialLinks();
    }

    // Método para manejar la interacción con los enlaces sociales
    setupSocialLinks() {
        const emailContainer = document.querySelector('.hero__social-link[title="Copiar Mail"]');

        if (emailContainer) {
            emailContainer.addEventListener('click', async () => {
                const emailTextElement = emailContainer.querySelector('.hero__social-text');
                if (!emailTextElement) return;

                const email = emailTextElement.textContent.trim();
                
                try {
                    await navigator.clipboard.writeText(email);
                    this.announce('Correo electrónico copiado al portapapeles.');

                    // Feedback visual al usuario
                    const originalTitle = emailContainer.getAttribute('title');
                    emailContainer.setAttribute('title', '¡Copiado!');
                    setTimeout(() => {
                        emailContainer.setAttribute('title', originalTitle);
                    }, 2000);

                } catch (err) {
                    console.error('Error al intentar copiar el correo:', err);
                    this.announce('Error al intentar copiar el correo.');
                }
            });
        }
    }
    
    renderDynamicContent() {
        // Renderizar carrusel
        if (typeof renderCarousel === 'function') {
            renderCarousel();
        }
        
        // Renderizar skills
        if (typeof renderSkills === 'function') {
            renderSkills();
        }
        
        // Renderizar experiencia
        if (typeof renderExperience === 'function') {
            renderExperience();
        }
        
        // Renderizar proyectos
        if (typeof renderProjects === 'function') {
            renderProjects();
        }
        
        // Renderizar estudios universitarios
        if (typeof renderUniversityStudies === 'function') {
            renderUniversityStudies();
        }
        
        // Renderizar certificaciones  
        if (typeof renderCertifications === 'function') {
            renderCertifications();
        }
        
        // Re-animar elementos nuevos
        setTimeout(() => {
            if (window.scrollAnimations) {
                window.scrollAnimations.animateNewElements();
            }
        }, 100);
    }
    
    setupPerformanceOptimizations() {
        // Lazy loading para imágenes
        this.setupLazyLoading();
        
        // Preload de recursos críticos
        this.preloadCriticalResources();
    }
    
    setupLazyLoading() {
        const images = document.querySelectorAll('img[src]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    }
    
    preloadCriticalResources() {
        // Precargar fuentes críticas
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
        fontLink.as = 'style';
        document.head.appendChild(fontLink);
    }
    
    setupAccessibility() {
        // Navegación por teclado
        this.setupKeyboardNavigation();
        
        // Anuncios para lectores de pantalla
        this.setupScreenReaderAnnouncements();
        
        // Skip links
        this.createSkipLinks();
    }
    
    setupKeyboardNavigation() {
        // Escape para cerrar menú móvil
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && window.navbarManager) {
                window.navbarManager.closeMobileMenu();
            }
        });
        
        // Enter y Space para botones personalizados
        document.querySelectorAll('[role="button"]').forEach(button => {
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    button.click();
                }
            });
        });
    }
    
    setupScreenReaderAnnouncements() {
        // Crear elemento para anuncios
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        announcer.className = 'sr-only';
        
        Object.assign(announcer.style, {
            position: 'absolute',
            left: '-10000px',
            width: '1px',
            height: '1px',
            overflow: 'hidden'
        });
        
        document.body.appendChild(announcer);
        this.announcer = announcer;
    }
    
    createSkipLinks() {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.textContent = 'Saltar al contenido principal';
        skipLink.className = 'skip-link';
        
        Object.assign(skipLink.style, {
            position: 'absolute',
            top: '-40px',
            left: '6px',
            background: 'var(--primary-color)',
            color: 'white',
            padding: '8px',
            textDecoration: 'none',
            borderRadius: '4px',
            zIndex: '1000'
        });
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
    
    // Método público para anunciar cambios a lectores de pantalla
    announce(message) {
        if (this.announcer) {
            this.announcer.textContent = message;
        }
    }
    
    // Método público para verificar si la app está cargada
    isAppLoaded() {
        return this.isLoaded;
    }
    
    // Método para actualizar contenido dinámico
    updateDynamicContent() {
        this.renderDynamicContent();
    }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();
});

// Manejar errores globales
window.addEventListener('error', (e) => {
    console.error('Error global capturado:', e.error);
});

// Manejar promesas rechazadas
window.addEventListener('unhandledrejection', (e) => {
    console.error('Promesa rechazada no manejada:', e.reason);
    e.preventDefault();
});