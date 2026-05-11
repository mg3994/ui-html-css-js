import { Component } from '../utils/component.js';

export const Footer = () => {
    return Component.create('footer', { className: 'footer' },
        Component.create('div', { className: 'container' },
            Component.create('div', { className: 'footer-grid' },
                Component.create('div', { className: 'footer-col' },
                    Component.create('div', { className: 'footer-logo' },
                        Component.create('span', { className: 'text-gradient' }, 'ANTINNA')
                    ),
                    Component.create('p', { className: 'text-muted' },
                        'The futuristic ecosystem for growth, commerce, and services.'
                    )
                ),
                Component.create('div', { className: 'footer-col' },
                    Component.create('h4', {}, 'Platform'),
                    Component.create('ul', { className: 'footer-links' },
                        Component.create('li', {}, Component.create('a', { href: '#' }, 'Mentors')),
                        Component.create('li', {}, Component.create('a', { href: '#' }, 'Marketplace')),
                        Component.create('li', {}, Component.create('a', { href: '#' }, 'Handy Services'))
                    )
                ),
                Component.create('div', { className: 'footer-col' },
                    Component.create('h4', {}, 'Company'),
                    Component.create('ul', { className: 'footer-links' },
                        Component.create('li', {}, Component.create('a', { href: '#' }, 'About Us')),
                        Component.create('li', {}, Component.create('a', { href: '#' }, 'Careers')),
                        Component.create('li', {}, Component.create('a', { href: '#' }, 'Contact'))
                    )
                ),
                Component.create('div', { className: 'footer-col' },
                    Component.create('h4', {}, 'Legal'),
                    Component.create('ul', { className: 'footer-links' },
                        Component.create('li', {}, Component.create('a', { href: '#' }, 'Privacy Policy')),
                        Component.create('li', {}, Component.create('a', { href: '#' }, 'Terms of Service'))
                    )
                )
            ),
            Component.create('div', { className: 'footer-bottom' },
                Component.create('p', {}, `© ${new Date().getFullYear()} Antinna. All rights reserved.`)
            )
        )
    );
};
