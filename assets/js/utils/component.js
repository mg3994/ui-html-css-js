/**
 * UI Component Creator
 */
export const Component = {
    /**
     * Create an element with classes and attributes
     */
    create: (tag, props = {}, ...children) => {
        const element = document.createElement(tag);

        Object.entries(props).forEach(([key, value]) => {
            if (key === 'className') {
                element.className = value;
            } else if (key === 'dataset') {
                Object.entries(value).forEach(([dataKey, dataValue]) => {
                    element.dataset[dataKey] = dataValue;
                });
            } else if (key.startsWith('on') && typeof value === 'function') {
                element.addEventListener(key.substring(2).toLowerCase(), value);
            } else {
                element.setAttribute(key, value);
            }
        });

        children.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else if (child instanceof HTMLElement) {
                element.appendChild(child);
            }
        });

        return element;
    },

    /**
     * Render a component to a container
     */
    render: (component, container) => {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }
        container.innerHTML = '';
        container.appendChild(component);
    }
};
