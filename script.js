/**
 * LÓGICA DE INTERACCIÓN - CHAPUZAS BIEN HECHAS
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Manejo del Menú Móvil
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = menuToggle.querySelector('i');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        
        // Cambio de icono entre hamburguesa (bars) y cerrar (times)
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.className = 'fas fa-bars';
        } else {
            menuIcon.className = 'fas fa-times';
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Cerrar menú al hacer clic en un enlace (en móvil)
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    // 2. Manejo del Formulario de Contacto
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que la página se recargue

            // Efecto de carga en el botón
            const submitBtn = this.querySelector('button');
            const originalText = submitBtn.innerText;
            
            submitBtn.innerText = 'Enviando...';
            submitBtn.disabled = true;
            this.classList.add('opacity-50', 'pointer-events-none');

            // Simulación de envío a servidor (API call)
            setTimeout(() => {
                // Escondemos el formulario y mostramos éxito
                this.classList.add('hidden');
                formStatus.classList.remove('hidden');
                
                // Limpieza del formulario
                this.reset();
                
                // Podrías redirigir o mostrar un modal aquí
                console.log('Formulario enviado con éxito a las ' + new Date().toLocaleTimeString());
            }, 1500);
        });
    }

    // 3. Efecto de Scroll en el Header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header-nav');
        if (window.scrollY > 50) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }
    });

    // 4. Smooth Scroll para navegadores antiguos
    // (Opcional, ya que usamos scroll-behavior: smooth en CSS)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});