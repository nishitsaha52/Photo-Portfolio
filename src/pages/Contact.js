import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaInstagram, FaFacebookF, FaPinterestP, FaGlobe } from 'react-icons/fa'; // Import required icons
import { toast, ToastContainer } from 'react-toastify'; // Import toast components
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Display personalized toast message
    toast.success(`Thank you for reaching out, ${formData.name}! We will get back to you soon.`, {
      position: "top-center", // Center the toast at the top
      autoClose: 5000, // Toast will disappear after 5 seconds
    });
    // Clear form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">      
      <div className="contact-content">      
        <div className="contact-form-wrapper">
        <div className="contact-header">
        <h1>Contact Me</h1>
        <div className="header-underline"></div>
      </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          <ToastContainer /> {/* Add ToastContainer to render toast messages */}
        </div>
        <div className="contact-info-wrapper">
          <h2>Follow me on</h2>
          <div className="contact-info">
            <a href="https://www.instagram.com/nishitsaha/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100007266315713" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={30} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterestP size={30} />
            </a>
            <a href="https://nishitsaha.netlify.app/" target="_blank" rel="noopener noreferrer">
              <FaGlobe size={30} />
            </a>
          </div>
          <div className="qr-code">
            <img src={`${process.env.PUBLIC_URL}/images/qrcode.png`} alt="QR Code" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
