import { Component } from '../utils/component.js';

export const Navbar = () => {
    const nav = Component.create('nav', { className: 'navbar' },
        Component.create('div', { className: 'container' },
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
