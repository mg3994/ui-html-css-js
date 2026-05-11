import { store } from './state.js';

/**
 * Enhanced Cart Logic to support variants
 */
export const addToCart = (product, selectedVariants = {}) => {
    const { cart } = store.getState();

    // Create a unique key for the item based on variants
    const variantString = Object.entries(selectedVariants)
        .map(([key, val]) => {
            if (key === 'priceModifier') return '';
            return `${key}:${val}`;
        })
        .filter(s => s !== '')
        .sort()
        .join('|');

    const cartItemId = variantString ? `${product.id}-[${variantString}]` : product.id;

    const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        // Calculate final price if modifiers exist
        let finalPrice = product.price;
        if (selectedVariants.priceModifier) {
            finalPrice += selectedVariants.priceModifier;
        }

        cart.push({
            ...product,
            cartItemId,
            selectedVariants,
            price: finalPrice,
            quantity: 1
        });
    }

    store.setState({ cart: [...cart] });
    return true;
};

export const removeItem = (cartItemId) => {
    const { cart } = store.getState();
    const newCart = cart.filter(item => item.cartItemId !== cartItemId);
    store.setState({ cart: newCart });
};

export const updateQuantity = (cartItemId, delta) => {
    const { cart } = store.getState();
    const index = cart.findIndex(item => item.cartItemId === cartItemId);
    if (index > -1) {
        cart[index].quantity = Math.max(1, cart[index].quantity + delta);
        store.setState({ cart: [...cart] });
    }
};

export const getTotal = () => {
    const { cart } = store.getState();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
};

export const clear = () => {
    store.setState({ cart: [] });
};

export const Cart = {
    addItem: addToCart,
    removeItem,
    updateQuantity,
    getTotal,
    clear
};
