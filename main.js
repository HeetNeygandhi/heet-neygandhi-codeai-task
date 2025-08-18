// Particles.js setup
particlesJS('particles-js', {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#60a5fa" },
        shape: { type: "circle" },
        opacity: { value: 0.6 },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#60a5fa", opacity: 0.5, width: 1 },
        move: { enable: true, speed: 2 }
    }
});

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.classList.toggle('open');
  menuToggle.setAttribute(
    'aria-expanded',
    menuToggle.classList.contains('open')
  );
});
