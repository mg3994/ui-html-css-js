import { Component } from '../utils/component.js';
import { store } from '../modules/state.js';
import { Toast } from './Toast.js';

export const ProductCard = (product) => {
    return Component.create('div', { className: 'card product-card animate-fade-in' },
        Component.create('div', { className: 'product-image-wrapper' },
            Component.create('img', {
                src: product.image || 'https://via.placeholder.com/300',
                alt: product.name,
                className: 'product-image'
            })
        ),
        Component.create('div', { className: 'product-info mt-2' },
            Component.create('div', { className: 'flex-between' },
                Component.create('h3', { style: 'font-size: 1.1rem;' }, product.name),
                Component.create('span', { className: 'badge badge-primary' }, product.category)
            ),
            Component.create('p', { className: 'text-muted mt-1', style: 'font-size: 0.9rem;' },
                product.description || 'Premium quality product for the modern lifestyle.'
            )
        ),
        Component.create('div', { className: 'product-footer mt-2 flex-between' },
            Component.create('span', { style: 'font-weight: 700; font-size: 1.2rem;' }, `$${product.price}`),
            Component.create('button', {
                className: 'btn btn-primary btn-sm',
                onClick: () => {
                    const cart = store.getState().cart;
                    const existing = cart.find(item => item.id === product.id);

                    if (existing) {
                        existing.quantity += 1;
                    } else {
                        cart.push({ ...product, quantity: 1 });
                    }

                    store.setState({ cart: [...cart] });
                    Toast.show(`${product.name} added to cart!`, 'success');
                }
            }, 'Add to Cart')
        ),
        Component.create('a', {
            href: `/pages/shop/details.html?id=${product.id}`,
            className: 'text-center mt-1 text-muted',
            style: 'font-size: 0.8rem; display: block;'
        }, 'View Details')
    );
};
