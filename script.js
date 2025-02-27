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
