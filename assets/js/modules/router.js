import { store } from './state.js';

/**
 * A simple router/content switcher for dashboards
 * @param {Object} routes - Mapping of hash routes to render functions or static HTML
 * @param {string} containerId - The ID of the container where content should be injected
 */
export const initDashboardRouter = (routes, containerId = 'dashboard-content') => {
    const render = () => {
        const hash = window.location.hash || '#overview';
        const container = document.getElementById(containerId);

        if (!container) return;

        // Clean up previous view
        container.innerHTML = '';

        const route = routes[hash] || routes['#overview'];

        if (typeof route === 'function') {
            container.appendChild(route());
        } else if (typeof route === 'string') {
            container.innerHTML = route;
        } else {
            container.innerHTML = '<div class="card"><p>Section under development.</p></div>';
        }

        // Update active class in sidebar
        document.querySelectorAll('.nav-item').forEach(link => {
            const linkHash = link.getAttribute('href').split('#')[1] || 'overview';
            const currentHash = hash.replace('#', '');
            if (linkHash === currentHash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    window.addEventListener('hashchange', render);
    window.addEventListener('load', render);

    // Initial render
    render();
};
