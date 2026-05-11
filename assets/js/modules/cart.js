import { store } from './state.js';

export const Cart = {
    addItem: (product) => {
        const { cart } = store.getState();
        const existing = cart.find(i => i.id === product.id);

        if (existing) {
            existing.quantity += 1;
            store.setState({ cart: [...cart] });
        } else {
            store.setState({ cart: [...cart, { ...product, quantity: 1 }] });
        }
    },

    removeItem: (productId) => {
        const { cart } = store.getState();
        const filtered = cart.filter(i => i.id !== productId);
        store.setState({ cart: filtered });
    },

    updateQuantity: (productId, quantity) => {
        const { cart } = store.getState();
        const item = cart.find(i => i.id === productId);
        if (item) {
            item.quantity = Math.max(1, quantity);
            store.setState({ cart: [...cart] });
        }
    },

    clear: () => {
        store.setState({ cart: [] });
    },

    getTotal: () => {
        const { cart } = store.getState();
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
};
