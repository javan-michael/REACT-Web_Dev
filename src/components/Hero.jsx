import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
    const slides = [
        'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1350&q=80',
        'https://images.unsplash.com/photo-1554679665-f5537f187268?auto=format&fit=crop&w=1350&q=80'
    ];
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const iv = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 5000);
        return () => clearInterval(iv);
    }, []);

    return (
        <section className="hero">
            <div className="slideshow">
                {slides.map((src, i) => (
                    <div
                        key={i}
                        className={`slide ${i === current ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${src})` }}
                    ></div>
                ))}
            </div>
            <div className="hero-content">
                <h1>Welcome to BlueWave Bistro</h1>
                <p>Experience the freshest seafood and finest dining on the coast</p>
                <div className="hero-buttons">
                    <Link to="/menu" className="btn">View Menu</Link>
                    <Link to="/contact" className="btn btn-outline">Reserve a Table</Link>
                </div>
            </div>
        </section>
    );
}