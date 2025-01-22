/* filepath: /c:/Users/suraj/OneDrive/Desktop/java Scrpit/mymusic/Music/js/script.js */
const hamburger = document.querySelector('.hamburger');
const menuSide = document.querySelector('.menu-side');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menuSide.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuSide.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        menuSide.classList.remove('active');
    }
});