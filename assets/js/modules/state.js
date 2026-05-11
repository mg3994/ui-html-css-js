/**
 * Simple State Management Pattern
 */
export class State {
    constructor(initialState = {}) {
        this.state = initialState;
        this.listeners = [];
    }

    getState() {
        return this.state;
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.notify();
    }

    subscribe(listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    notify() {
        this.listeners.forEach(listener => listener(this.state));
    }
}

// Global Application State Store
export const store = new State({
    user: JSON.parse(localStorage.getItem('antinna_user')) || null,
    cart: JSON.parse(localStorage.getItem('antinna_cart')) || [],
    notifications: []
});

// Auto-persist to localStorage
store.subscribe((state) => {
    localStorage.setItem('antinna_user', JSON.stringify(state.user));
    localStorage.setItem('antinna_cart', JSON.stringify(state.cart));
});
