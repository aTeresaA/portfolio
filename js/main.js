"use strict";  // aktiverar strikt läge
// Enkel bildväxling om du vill ha flera hero-bilder
const hero = document.querySelector('.hero');
const images = ['images/hero1.webp', 'images/hero2.webp']; // Lägg till fler senare
let current = 0;

setInterval(() => {
  current = (current + 1) % images.length;
  hero.style.backgroundImage = `url('${images[current]}')`;
}, 7000); // växlar var 7:e sekund
