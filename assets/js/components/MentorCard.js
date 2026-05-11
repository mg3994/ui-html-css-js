import { Component } from '../utils/component.js';

export const MentorCard = (mentor) => {
    return Component.create('div', { className: 'card mentor-card animate-fade-in' },
        Component.create('div', { className: 'mentor-header' },
            Component.create('div', { className: 'mentor-avatar' },
                Component.create('img', {
                    src: mentor.image || 'https://via.placeholder.com/150',
                    alt: mentor.name
                })
            ),
            Component.create('div', { className: 'mentor-rating' },
                Component.create('span', {}, '⭐'),
                Component.create('span', {}, mentor.rating.toString())
            )
        ),
        Component.create('div', { className: 'mentor-info mt-2' },
            Component.create('h3', {}, mentor.name),
            Component.create('p', { className: 'text-muted' }, mentor.specialty),
            Component.create('div', { className: 'mentor-tags mt-1' },
                ...mentor.tags.map(tag => Component.create('span', { className: 'badge badge-primary' }, tag))
            )
        ),
        Component.create('div', { className: 'mentor-footer mt-2 flex-between' },
            Component.create('div', { className: 'mentor-price' },
                Component.create('span', { style: 'font-weight: 700;' }, `$${mentor.price}`),
                Component.create('span', { className: 'text-muted', style: 'font-size: 0.8rem;' }, '/hr')
            ),
            Component.create('a', {
                href: `/pages/mentor/profile.html?id=${mentor.id}`,
                className: 'btn btn-secondary btn-sm'
            }, 'View Profile')
        )
    );
};
