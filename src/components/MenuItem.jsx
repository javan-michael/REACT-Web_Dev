import React from 'react';

export default function MenuItem({ title, description, price, image }) {
    return (
        <div className="menu-item">
            <div className="item-image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="item-details">
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="price">{price}</span>
            </div>
        </div>
    );
}