// Gestión del formulario de contacto

class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.nameInput = document.getElementById('name');
        this.emailInput = document.getElementById('email');
        this.messageInput = document.getElementById('message');
        this.formMessage = document.getElementById('form-message');
        
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            
            // Validación en tiempo real
            this.setupRealTimeValidation();
        }
    }
    
    setupRealTimeValidation() {
        // Validar nombre
        if (this.nameInput) {
            this.nameInput.addEventListener('blur', () => this.validateName());
            this.nameInput.addEventListener('input', () => this.clearError('name'));
        }
        
        // Validar email
        if (this.emailInput) {
            this.emailInput.addEventListener('blur', () => this.validateEmail());
            this.emailInput.addEventListener('input', () => this.clearError('email'));
        }
        
        // Validar mensaje
        if (this.messageInput) {
            this.messageInput.addEventListener('blur', () => this.validateMessage());
            this.messageInput.addEventListener('input', () => this.clearError('message'));
        }
    }
    
    validateName() {
        const name = this.nameInput.value.trim();
        const errorElement = document.getElementById('name-error');
        
        if (name.length < 2) {
            this.showFieldError('name', 'El nombre debe tener al menos 2 caracteres');
            return false;
        }
        
        if (name.length > 50) {
            this.showFieldError('name', 'El nombre no puede exceder 50 caracteres');
            return false;
        }
        
        this.clearError('name');
        return true;
    }
    
    validateEmail() {
        const email = this.emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email) {
            this.showFieldError('email', 'El email es requerido');
            return false;
        }
        
        if (!emailRegex.test(email)) {
            this.showFieldError('email', 'Por favor ingresa un email válido');
            return false;
        }
        
        this.clearError('email');
        return true;
    }
    
    validateMessage() {
        const message = this.messageInput.value.trim();
        
        if (message.length < 10) {
            this.showFieldError('message', 'El mensaje debe tener al menos 10 caracteres');
            return false;
        }
        
        if (message.length > 500) {
            this.showFieldError('message', 'El mensaje no puede exceder 500 caracteres');
            return false;
        }
        
        this.clearError('message');
        return true;
    }
    
    showFieldError(fieldName, message) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        const inputElement = document.getElementById(fieldName);
        
        if (errorElement) {
            errorElement.textContent = message;
        }
        
        if (inputElement) {
            inputElement.style.borderColor = '#ef4444';
        }
    }
    
    clearError(fieldName) {
        const errorElement = document.getElementById(`${fieldName}-error`);
        const inputElement = document.getElementById(fieldName);
        
        if (errorElement) {
            errorElement.textContent = '';
        }
        
        if (inputElement) {
            inputElement.style.borderColor = 'var(--border-color)';
        }
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        // Validar todos los campos
        const isNameValid = this.validateName();
        const isEmailValid = this.validateEmail();
        const isMessageValid = this.validateMessage();
        
        if (!isNameValid || !isEmailValid || !isMessageValid) {
            this.showFormMessage('Por favor corrige los errores antes de enviar', 'error');
            return;
        }
        
        // Mostrar estado de carga
        this.setLoadingState(true);
        
        try {
            // Simular envío (aquí integrarías con EmailJS o tu API)
            await this.simulateFormSubmission();
            
            // Éxito
            this.showFormMessage('¡Mensaje enviado correctamente! Te responderé pronto.', 'success');
            this.resetForm();
            
        } catch (error) {
            // Error
            this.showFormMessage('Error al enviar el mensaje. Por favor intenta nuevamente.', 'error');
            console.error('Error al enviar formulario:', error);
        } finally {
            this.setLoadingState(false);
        }
    }
    
    async simulateFormSubmission() {
        // Simular delay de red
        return new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });
    }
    
    setLoadingState(isLoading) {
        const submitBtn = this.form.querySelector('.contact__form-button');
        
        if (isLoading) {
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            this.form.classList.add('loading');
        } else {
            submitBtn.textContent = 'Enviar Mensaje';
            submitBtn.disabled = false;
            this.form.classList.remove('loading');
        }
    }
    
    showFormMessage(message, type) {
        if (this.formMessage) {
            this.formMessage.textContent = message;
            this.formMessage.className = `contact__form-message ${type}`;
            
            // Auto-ocultar después de 5 segundos
            setTimeout(() => {
                this.formMessage.textContent = '';
                this.formMessage.className = 'contact__form-message';
            }, 5000);
        }
    }
    
    resetForm() {
        if (this.form) {
            this.form.reset();
            this.clearError('name');
            this.clearError('email');
            this.clearError('message');
        }
    }
    
    // Método público para integración con EmailJS
    setupEmailJS(publicKey, serviceId, templateId) {
        this.emailJSConfig = {
            publicKey,
            serviceId,
            templateId
        };
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.contactForm = new ContactForm();
    
    // Ejemplo de configuración de EmailJS (descomenta y configura)
    // window.contactForm.setupEmailJS('tu_public_key', 'tu_service_id', 'tu_template_id');
});