// Cerrar menú al hacer scroll
window.addEventListener('scroll', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
});

// Scroll suave profesional
document.querySelectorAll('a[href^="#"], a[href^="tecnicas.html#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').split('#')[1];
        const target = document.getElementById(targetId);
        
        if (target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Resetear scroll al cargar
window.onload = () => window.scrollTo(0, 0);

// Scroll suave mejorado para enlaces del header
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
