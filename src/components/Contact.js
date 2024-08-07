import React from 'react';
import '../styles.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <div className="header-underline"></div>
      </div>
      <div className="contact-content">
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
        <div className="contact-map-wrapper">
          <h2>Find Me Here</h2>
          <div className="map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.224496178833!2d88.45407441520378!3d22.61719508522267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0274a83114fbf3%3A0x47d4aeff3ed99c9!2sKestopur%2C%20Kolkata%2C%20West%20Bengal%20700219!5e0!3m2!1sen!2sin!4v1642446445457!5m2!1sen!2sin&marker=0x3a0274a83114fbf3%3A0x47d4aeff3ed99c9%2C22.61719508522267!3m2!1sen!2sin!4v1642446445457!5m2!1sen!2sin"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
