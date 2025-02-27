document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const headerHeight = document.querySelector('header').offsetHeight; // Ajusta el selector
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Actualiza la URL sin saltar
      history.pushState(null, null, targetId);
    }
  });
});
