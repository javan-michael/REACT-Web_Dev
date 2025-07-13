import React from 'react';
import { FaFish, FaFacebook, FaInstagram, FaTwitter, FaTripadvisor } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <FaFish />
                        <h3>BlueWave Bistro</h3>
                        <p>Fresh Seafood & Coastal Cuisine</p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/menu">Menu</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaTwitter /></a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2025 BlueWave Bistro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}