import { Component } from '../utils/component.js';
import { store } from '../modules/state.js';

export const DashboardSidebar = (activePage) => {
    const user = store.getState().user || { name: 'User', role: 'customer' };

    const menuItems = {
        customer: [
            { label: 'Overview', icon: '📊', path: 'customer.html' },
            { label: 'My Orders', icon: '🛍️', path: 'customer.html#orders' },
            { label: 'Bookings', icon: '📅', path: 'customer.html#bookings' },
            { label: 'Wallet', icon: '💳', path: 'customer.html#wallet' }
        ],
        mentor: [
            { label: 'Overview', icon: '📊', path: 'mentor.html' },
            { label: 'Sessions', icon: '🎓', path: 'mentor.html#sessions' },
            { label: 'Earnings', icon: '💰', path: 'mentor.html#earnings' },
            { label: 'Availability', icon: '📅', path: 'mentor.html#availability' }
        ],
        vendor: [
            { label: 'Overview', icon: '📊', path: 'vendor.html' },
            { label: 'Products', icon: '📦', path: 'vendor.html#products' },
            { label: 'Orders', icon: '🛒', path: 'vendor.html#orders' },
            { label: 'Analytics', icon: '📈', path: 'vendor.html#analytics' }
        ],
        admin: [
            { label: 'Overview', icon: '📊', path: 'admin.html' },
            { label: 'Users', icon: '👥', path: 'admin.html#users' },
            { label: 'Platforms', icon: '🌐', path: 'admin.html#platforms' },
            { label: 'Settings', icon: '⚙️', path: 'admin.html#settings' }
        ]
    };

    const items = menuItems[user.role] || menuItems.customer;

    return Component.create('aside', { className: 'dashboard-sidebar' },
        Component.create('div', { className: 'sidebar-header' },
            Component.create('a', { href: '/', className: 'nav-logo' },
                Component.create('span', { className: 'text-gradient' }, 'ANTINNA')
            )
        ),
        Component.create('div', { className: 'sidebar-user' },
            Component.create('div', { className: 'user-avatar' }, user.name.charAt(0)),
            Component.create('div', { className: 'user-info' },
                Component.create('div', { className: 'user-name' }, user.name),
                Component.create('div', { className: 'user-role text-muted' }, user.role.toUpperCase())
            )
        ),
        Component.create('nav', { className: 'sidebar-nav' },
            ...items.map(item => Component.create('a', {
                href: item.path,
                className: `nav-item ${activePage === item.path ? 'active' : ''}`
            },
                Component.create('span', { className: 'nav-icon' }, item.icon),
                Component.create('span', {}, item.label)
            ))
        ),
        Component.create('div', { className: 'sidebar-footer' },
            Component.create('button', {
                className: 'btn btn-ghost',
                style: 'width: 100%; justify-content: flex-start; color: var(--error);',
                onClick: () => {
                    store.setState({ user: null });
                    window.location.href = '/pages/auth/login.html';
                }
            }, '🚪 Logout')
        )
    );
};
