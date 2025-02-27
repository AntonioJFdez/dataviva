// En tu script.js
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        // Cierra el menú móvil al hacer clic
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Scroll suave mejorado
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll reveal
const sr = ScrollReveal({
    distance: '30px',
    duration: 1000,
    reset: true
});

sr.reveal('.fade-in', {
    origin: 'bottom',
    interval: 100
});

// Scroll to top
const scrollTop = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('active', window.scrollY > 500);
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
