/**
 * main.js
 * Funcionalidad principal de la página
 */

document.addEventListener('DOMContentLoaded', function() {
    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    const animateElements = document.querySelectorAll(
        '.product-card, .wd-product, .feature, .gallery__item, .contact__form, .contact__info'
    );

    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí puedes agregar la lógica para enviar el formulario
            // Por ejemplo, usando Fetch API o un servicio de formularios
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Mensaje de éxito (puedes personalizar esto)
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            
            // Limpiar formulario
            contactForm.reset();
            
            // En un entorno real, aquí harías una petición al servidor:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                alert('¡Mensaje enviado con éxito!');
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
            });
            */
        });
    }

    // Lazy loading para imágenes (cuando las agregues)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Agregar clase de carga completa al body
    document.body.classList.add('loaded');

    // Manejo de botones "Comprar" y "Ver producto" - Redirige a WhatsApp
    const comprarButtons = document.querySelectorAll('.btn-comprar, .view-product');
    const whatsappNumber = '51930128724'; // Número de WhatsApp

    comprarButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Buscar la tarjeta de producto padre (nueva estructura o antigua)
            const productCard = this.closest('.carousel-product') || this.closest('.product-card');
            
            if (productCard) {
                // Obtener datos del producto
                const productName = productCard.getAttribute('data-product-name') || '';
                const productPrice = productCard.getAttribute('data-product-price') || '';
                
                // Construir el mensaje de WhatsApp
                const messageText = `Hola, me interesa comprar:\n\n📦 *${productName}*\n💰 Precio: ${productPrice}\n\n¿Está disponible?`;
                
                // Codificar el mensaje para URL
                const encodedMessage = encodeURIComponent(messageText);
                
                // Construir la URL de WhatsApp
                const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodedMessage}`;
                
                // Abrir WhatsApp en una nueva ventana
                window.open(whatsappUrl, '_blank');
            }
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq__item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Cerrar todos los items
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                });
                
                // Abrir el item clickeado si no estaba activo
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
});

