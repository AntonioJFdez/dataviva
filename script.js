// Menú móvil
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Cerrar menú al hacer clic en enlace
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// Resetear scroll al cargar la página
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    history.scrollRestoration = 'manual'; // Desactiva el scroll automático del navegador
});
