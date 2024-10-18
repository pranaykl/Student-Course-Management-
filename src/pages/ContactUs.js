

import React from 'react';
import './Contact.css';

function ContactUs() {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>If you have any questions, comments, or feedback, please reach out to us using the form below. We value your input and strive to provide the best service possible.</p>
            <p><strong>Contact Information:</strong></p>
            <ul className="contact-info">
                <li>📞 Phone: +1 (123) 456-7890</li>
                <li>📧 Email: support@example.com</li>
                <li>🏢 Address: 123 Education Lane, Knowledge City, ABC 45678</li>
            </ul>
            <form className="contact-form">
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter your name" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea placeholder="Enter your message" rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactUs;
