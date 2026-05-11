export const Transitions = {
    init() {
        // Prevent multiple initializations
        if (document.querySelector('.page-transition-overlay')) return;

        const overlay = document.createElement('div');
        overlay.className = 'page-transition-overlay';
        document.body.appendChild(overlay);

        // Use event delegation for dynamic links
        document.addEventListener('click', e => {
            const link = e.target.closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            if (!href) return;

            // Check if it's an internal link
            const isInternal = link.hostname === window.location.hostname || !link.hostname;
            const isSpecial = link.hash || link.target || href.startsWith('javascript:') || href.startsWith('tel:') || href.startsWith('mailto:');

            if (isInternal && !isSpecial) {
                e.preventDefault();
                overlay.classList.add('active');
                setTimeout(() => {
                    window.location.href = href;
                }, 600);
            }
        });

        // Entrance animation
        window.addEventListener('load', () => {
            overlay.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                overlay.remove();
            }, 600);
        });

        // Fallback for fast cached loads
        if (document.readyState === 'complete') {
            overlay.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                if (overlay.parentElement) overlay.remove();
            }, 600);
        }
    }
};
