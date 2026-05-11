import { Component } from '../utils/component.js';

export const Accordion = {
    create: (items) => {
        return Component.create('div', { className: 'accordion' },
            ...items.map((item, index) => {
                const contentId = `accordion-content-${Math.random().toString(36).substr(2, 9)}`;
                const headerId = `accordion-header-${index}`;

                return Component.create('div', { className: 'accordion-item' },
                    Component.create('button', {
                        className: 'accordion-header',
                        id: headerId,
                        'aria-expanded': 'false',
                        'aria-controls': contentId,
                        onClick: (e) => Accordion.toggle(e.currentTarget)
                    },
                        Component.create('span', {}, item.title),
                        Component.create('span', { className: 'accordion-icon' }, '+')
                    ),
                    Component.create('div', {
                        className: 'accordion-content',
                        id: contentId,
                        role: 'region',
                        'aria-labelledby': headerId
                    },
                        Component.create('div', { className: 'accordion-body' }, item.content)
                    )
                );
            })
        );
    },

    toggle: (header) => {
        const item = header.parentElement;
        const isExpanded = header.getAttribute('aria-expanded') === 'true';

        // Close other items in the same accordion if needed
        const accordion = item.closest('.accordion');
        accordion.querySelectorAll('.accordion-header').forEach(h => {
            if (h !== header) {
                h.setAttribute('aria-expanded', 'false');
                h.parentElement.classList.remove('active');
            }
        });

        header.setAttribute('aria-expanded', !isExpanded);
        item.classList.toggle('active');
    }
};
