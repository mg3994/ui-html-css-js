import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    // Header
    const header = document.createElement('header');
    header.appendChild(Navbar());
    document.body.prepend(header);

    // Footer
    const footer = Footer();
    document.body.appendChild(footer);

    // Initialize animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
