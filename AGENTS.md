# Antinna Project - Senior Architect Guide

Welcome to the **Antinna** codebase. This is a high-performance, modular, vanilla JavaScript ecosystem platform.

## Architecture Guidelines

### 1. Vanilla Components
All UI components are built using `assets/js/utils/component.js`.
- **Rule:** Do not use `innerHTML` for dynamic content to avoid XSS. Use `Component.create()` which utilizes `createElement` and `textContent`.
- **Modularity:** Keep each component in `assets/js/components/`.

### 2. State Management
We use a simple, reactive state store in `assets/js/modules/state.js`.
- **Usage:** Import `store`, use `store.setState({ key: val })` and `store.subscribe(callback)`.
- **Ecosystem Sync:** The Cart and Auth modules are the primary users of the state.

### 3. CSS Architecture
- **Global Variables:** Defined in `assets/css/variables.css`. Always use these for colors, spacing, and radius to maintain the "Futuristic Premium" aesthetic.
- **Glassmorphism:** Use `.glass` or `.glass-card` classes for the signature UI style.
- **Animations:** Standard animations are in `assets/css/animations.css`. Use the `.reveal` class for scroll-triggered entrance animations.

### 4. Ecommerce & Variants
The platform supports complex variants (Colors, Sizes, Weights, Volumes).
- **Cart Key:** The `cartItemId` in `cart.js` is generated based on selected variants to ensure different versions of the same product are treated as separate line items.
- **Price Modifiers:** Variants can have `priceModifier` values that dynamically adjust the product price in the UI and the Cart.

## Development Workflows

### Adding a new page:
1. Create the HTML in the appropriate `pages/` subfolder.
2. Link the shared CSS files (`variables`, `base`, `layout`, `components`, `animations`).
3. Import and append the `Navbar` and `Footer` components.

### Adding a new module:
1. Create a new JS file in `assets/js/modules/`.
2. Ensure it interacts with the central `state.js` if it needs to share data across pages.

---
**Antinna** - *Intelligent. Integrated. Infinite.*
