import { Component } from '../utils/component.js';

export const Toast = {
    container: null,

    init: () => {
        if (!Toast.container) {
            Toast.container = Component.create('div', { className: 'toast-container' });
            document.body.appendChild(Toast.container);
        }
    },

    show: (message, type = 'info', duration = 3000) => {
        Toast.init();

        const toast = Component.create('div', {
            className: `toast toast-${type} animate-slide-in-right`
        },
            Component.create('span', { className: 'toast-message' }, message),
            Component.create('button', {
                className: 'toast-close',
                onClick: () => toast.remove()
            }, '×')
        );

        Toast.container.appendChild(toast);

        if (duration > 0) {
            setTimeout(() => {
                toast.classList.add('fade-out');
                setTimeout(() => toast.remove(), 300);
            }, duration);
        }
    }
};
