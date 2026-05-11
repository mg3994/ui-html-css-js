import { Component } from '../utils/component.js';

export const ProductCard = (product) => {
    return Component.create('div', { className: 'glass-card animate-fade-in', style: 'padding: 0; display: flex; flex-direction: column;' },
        // Image
        Component.create('div', {
            style: 'width: 100%; aspect-ratio: 1; overflow: hidden; position: relative;'
        },
            Component.create('img', {
                src: product.image,
                alt: product.name,
                style: 'width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);',
                className: 'hover-scale'
            }),
            Component.create('div', {
                className: 'badge',
                style: 'position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);'
            }, product.category)
        ),
        // Content
        Component.create('div', { style: 'padding: 1.5rem; flex: 1; display: flex; flex-direction: column;' },
            Component.create('div', { className: 'flex-between mb-1' },
                Component.create('h3', { style: 'font-size: 1.1rem; font-weight: 600;' }, product.name),
                Component.create('span', { className: 'text-gradient', style: 'font-weight: 700;' }, `$${product.price}`)
            ),
            Component.create('p', { className: 'text-muted', style: 'font-size: 0.85rem; line-height: 1.4; margin-bottom: 1.5rem;' },
                product.description
            ),
            Component.create('div', { className: 'mt-auto' },
                Component.create('a', {
                    href: `/pages/shop/details.html?id=${product.id}`,
                    className: 'btn btn-glass w-full',
                    style: 'font-size: 0.9rem;'
                }, 'Configure & Buy')
            )
        )
    );
};
