import { Component } from '../utils/component.js';

export const Modal = {
    create: (title, content, actions = []) => {
        const modalId = `modal-${Math.random().toString(36).substr(2, 9)}`;

        const modalOverlay = Component.create('div', {
            className: 'modal-overlay',
            id: modalId,
            onClick: (e) => {
                if (e.target.id === modalId) Modal.close(modalId);
            }
        },
            Component.create('div', { className: 'modal-content animate-fade-in-up' },
                Component.create('div', { className: 'modal-header' },
                    Component.create('h3', {}, title),
                    Component.create('button', {
                        className: 'modal-close',
                        onClick: () => Modal.close(modalId)
                    }, '×')
                ),
                Component.create('div', { className: 'modal-body' }, content),
                Component.create('div', { className: 'modal-actions' },
                    ...actions.map(action => Component.create('button', {
                        className: `btn ${action.className || 'btn-secondary'}`,
                        onClick: () => {
                            if (action.onClick) action.onClick();
                            if (action.closeOnClick !== false) Modal.close(modalId);
                        }
                    }, action.label))
                )
            )
        );

        return modalOverlay;
    },

    open: (modalElement) => {
        document.body.appendChild(modalElement);
        document.body.style.overflow = 'hidden';
        setTimeout(() => modalElement.classList.add('active'), 10);
    },

    close: (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => modal.remove(), 300);
        }
    }
};
