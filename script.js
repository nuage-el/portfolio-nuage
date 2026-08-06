document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('burger-btn');
    const navContainer = document.getElementById('nav-container');
    const overlay = document.getElementById('overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    // Fonction pour ouvrir/fermer le menu
    const toggleMenu = () => {
        burgerBtn.classList.toggle('active');
        navContainer.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Empêche le scroll en arrière-plan lorsque le menu est ouvert
        document.body.style.overflow = navContainer.classList.contains('active') ? 'hidden' : 'auto';
    };

    // Événement au clic sur le bouton burger
    burgerBtn.addEventListener('click', toggleMenu);

    // Événement au clic sur l'overlay (ferme le menu)
    overlay.addEventListener('click', toggleMenu);

    // Ferme le menu mobile automatiquement lorsqu'un lien est cliqué
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navContainer.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});