/**
 * carousel.js
 * Funcionalidad del carrusel de productos
 */

document.addEventListener('DOMContentLoaded', function() {
    const carouselTrack = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn--prev');
    const nextBtn = document.querySelector('.carousel-btn--next');
    const slides = document.querySelectorAll('.carousel__slide');
    
    if (!carouselTrack || !prevBtn || !nextBtn || slides.length === 0) {
        return;
    }

    let currentIndex = 0;
    let slidesToShow = 3;
    
    // Ajustar según el tamaño de pantalla
    function getSlidesToShow() {
        if (window.innerWidth <= 768) {
            return 1;
        } else if (window.innerWidth <= 1024) {
            return 2;
        }
        return 3;
    }
    
    slidesToShow = getSlidesToShow();
    const totalSlides = slides.length;
    let maxIndex = Math.max(0, totalSlides - slidesToShow);

    // Función para actualizar la posición del carrusel
    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(carouselTrack).gap);
        const translateX = -currentIndex * slideWidth;
        carouselTrack.style.transform = `translateX(${translateX}px)`;
        
        // Actualizar maxIndex antes de verificar
        slidesToShow = getSlidesToShow();
        maxIndex = Math.max(0, totalSlides - slidesToShow);
        
        // No deshabilitar botones ya que ahora hay bucle infinito
        prevBtn.style.opacity = '1';
        prevBtn.style.cursor = 'pointer';
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
    }

    // Botón anterior
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // Si está al inicio, ir al final
            slidesToShow = getSlidesToShow();
            maxIndex = Math.max(0, totalSlides - slidesToShow);
            currentIndex = maxIndex;
        }
        updateCarousel();
    });

    // Botón siguiente
    nextBtn.addEventListener('click', function() {
        slidesToShow = getSlidesToShow();
        maxIndex = Math.max(0, totalSlides - slidesToShow);
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            // Si está al final, volver al inicio
            currentIndex = 0;
        }
        updateCarousel();
    });

    // Actualizar en resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            slidesToShow = getSlidesToShow();
            maxIndex = Math.max(0, totalSlides - slidesToShow);
            // Asegurar que currentIndex no exceda el máximo
            if (currentIndex > maxIndex) {
                currentIndex = maxIndex;
            }
            updateCarousel();
        }, 250);
    });

    // Inicializar
    updateCarousel();
});

