import React from 'react';

function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <h2>Contact Us</h2>
                <p>Reach out to us for bookings or inquiries!</p>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button className="btn" type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
