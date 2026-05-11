import { Component } from '../utils/component.js';

export const ServiceCard = (service) => {
    return Component.create('div', { className: 'card service-card animate-fade-in' },
        Component.create('div', { className: 'service-icon-wrapper' },
            Component.create('span', { className: 'service-emoji' }, service.icon || '🛠️')
        ),
        Component.create('div', { className: 'service-info mt-2' },
            Component.create('h3', {}, service.name),
            Component.create('p', { className: 'text-muted mt-1', style: 'font-size: 0.9rem;' }, service.description),
            Component.create('div', { className: 'mt-1 flex-between' },
                Component.create('span', { className: 'badge badge-primary' }, service.category),
                Component.create('span', { style: 'font-weight: 600;' }, `From $${service.basePrice}`)
            )
        ),
        Component.create('div', { className: 'service-footer mt-2' },
            Component.create('a', {
                href: `/pages/services/details.html?id=${service.id}`,
                className: 'btn btn-secondary',
                style: 'width: 100%;'
            }, 'Book Service')
        )
    );
};
