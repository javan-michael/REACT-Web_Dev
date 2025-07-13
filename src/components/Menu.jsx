import React, { useState } from 'react';
import menuData from '../data/menuData.js';
import MenuItem from './MenuItem.jsx';

export default function Menu() {
    const [filter, setFilter] = useState('all');
    const categories = ['all', 'seafood', 'salad', 'pasta', 'dessert'];
    const items = filter === 'all' ? menuData : menuData.filter(item => item.category === filter);

    return (
        <section className="menu-section">
            <div className="container">
                <h2>Our Menu</h2>
                <div className="category-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="menu-items">
                    {items.map(item => <MenuItem key={item.id} {...item} />)}
                </div>
            </div>
        </section>
    );
}