// Gestión de la navegación y menú móvil

class NavbarManager {
    constructor() {
        this.header = document.getElementById('header');
        this.navMenu = document.getElementById('nav-menu');
        this.navToggle = document.getElementById('nav-toggle');
        this.navClose = document.getElementById('nav-close');
        this.navLinks = document.querySelectorAll('.nav__link');
        
        this.init();
    }
    
    init() {
        // Event listeners
        this.setupEventListeners();
        
        // Scroll effect para el header
        this.setupScrollEffect();
        
        // Active link management
        this.setupActiveLinkManagement();
    }
    
    setupEventListeners() {
        // Abrir menú móvil
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => this.openMobileMenu());
        }
        
        // Cerrar menú móvil
        if (this.navClose) {
            this.navClose.addEventListener('click', () => this.closeMobileMenu());
        }
        
        // Cerrar menú al hacer click en un link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });
        
        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (!this.navMenu.contains(e.target) && !this.navToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }
    
    setupScrollEffect() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Agregar clase 'scrolled' cuando se hace scroll
            if (currentScrollY > 50) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    setupActiveLinkManagement() {
        // Intersection Observer para detectar sección activa
        const sections = document.querySelectorAll('.section');
        
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-80px 0px -80px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.setActiveLink(entry.target.id);
                }
            });
        }, observerOptions);
        
        sections.forEach(section => observer.observe(section));
    }
    
    setActiveLink(sectionId) {
        // Remover clase active de todos los links
        this.navLinks.forEach(link => link.classList.remove('active'));
        
        // Agregar clase active al link correspondiente
        const activeLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    openMobileMenu() {
        if (this.navMenu) {
            this.navMenu.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevenir scroll
        }
    }
    
    closeMobileMenu() {
        if (this.navMenu) {
            this.navMenu.classList.remove('show');
            document.body.style.overflow = 'auto'; // Restaurar scroll
        }
    }
    
    // Método público para scroll suave a sección
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = this.header.offsetHeight;
            const sectionTop = section.offsetTop - headerHeight;
            
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.navbarManager = new NavbarManager();
    
    // Setup smooth scroll para todos los links internos
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            if (window.navbarManager) {
                window.navbarManager.scrollToSection(targetId);
            }
        });
    });
});