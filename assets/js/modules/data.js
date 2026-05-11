/**
 * Enhanced mock database with complex variants
 */
export const MOCK_PRODUCTS = [
    {
        id: 'cloth-001',
        name: 'Essential Oversized Tee',
        category: 'Fashion',
        subCategory: 'Apparel',
        price: 45,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
        description: 'Premium heavyweight cotton tee with a perfect boxy fit.',
        vendor: 'Aesthetic Wear',
        type: 'clothing',
        variants: {
            colors: [
                { name: 'Onyx', hex: '#1a1a1a' },
                { name: 'Ivory', hex: '#f5f5f5' },
                { name: 'Sage', hex: '#8a9a5b' }
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL']
        }
    },
    {
        id: 'gro-001',
        name: 'Organic Almond Milk',
        category: 'Grocery',
        subCategory: 'Dairy Alternatives',
        price: 6.50,
        image: 'https://images.unsplash.com/photo-1550583724-125581f77833?w=800',
        description: 'Freshly pressed organic almonds. No added sugars.',
        vendor: 'Green Earth Market',
        type: 'unit-based',
        variants: {
            units: [
                { label: '500ml', priceModifier: 0 },
                { label: '1 Litre', priceModifier: 4.50 },
                { label: 'Bulk (5L)', priceModifier: 20.00 }
            ]
        }
    },
    {
        id: 'veg-001',
        name: 'Heirloom Tomatoes',
        category: 'Grocery',
        subCategory: 'Vegetables',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800',
        description: 'Farm-fresh heirloom tomatoes. Sweet and juicy.',
        vendor: 'Local Farm Co',
        type: 'weight-based',
        variants: {
            weights: [
                { label: '250g', priceModifier: 0 },
                { label: '500g', priceModifier: 4.00 },
                { label: '1kg', priceModifier: 8.00 }
            ]
        }
    },
    {
        id: 'tech-001',
        name: 'Studio Headphones Max',
        category: 'Electronics',
        subCategory: 'Audio',
        price: 549,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
        description: 'Professional grade audio with active noise cancellation.',
        vendor: 'TechNova',
        type: 'standard'
    }
];
