// Menú móvil
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
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
