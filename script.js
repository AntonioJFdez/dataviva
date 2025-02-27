// Forzar scroll al inicio al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    window.scrollTo(0, 0);
    history.scrollRestoration = 'manual'; // Desactiva comportamiento por defecto
});

// Resetear scroll al recargar
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};
