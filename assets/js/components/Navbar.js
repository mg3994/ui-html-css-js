import { Component } from '../utils/component.js';
import { Transitions } from '../modules/transitions.js';

export const Navbar = () => {
    // Initialize transitions on every page that includes the Navbar
    Transitions.init();

    const nav = Component.create('header', { className: 'navbar' },
        Component.create('nav', { className: 'container', 'aria-label': 'Main Navigation' },
            Component.create('a', { href: '/', className: 'nav-logo' },
                Component.create('span', { className: 'text-gradient' }, 'ANTINNA')
            ),
            Component.create('div', { className: 'nav-links' },
                Component.create('a', { href: '/', className: 'nav-link' }, 'Home'),
                Component.create('a', { href: '/pages/mentor/listings.html', className: 'nav-link' }, 'Mentors'),
                Component.create('a', { href: '/pages/shop/listings.html', className: 'nav-link' }, 'Shop'),
                Component.create('a', { href: '/pages/services/listings.html', className: 'nav-link' }, 'Services')
            ),
            Component.create('div', { className: 'nav-actions' },
                Component.create('a', { href: '/pages/auth/login.html', className: 'btn btn-ghost' }, 'Login'),
                Component.create('a', { href: '/pages/auth/signup.html', className: 'btn btn-primary btn-sm' }, 'Get Started')
            ),
            Component.create('button', { className: 'mobile-nav-toggle', 'aria-label': 'Toggle Menu' },
                Component.create('i', { className: 'icon-menu' }, '☰')
            )
        )
    );

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    return nav;
};
