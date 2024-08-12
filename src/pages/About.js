import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <div className="header-underline"></div>
      </div>
      <div className="about-content">
        <div className="about-image">
          <img src="/images/profile.jpg" alt="Nishit Ranjan Saha" />
        </div>
        <div className="about-text">
          <h2>Welcome! I'm Nishit Ranjan Saha.</h2>
          <ul>
            <li>
              <strong>Passionate Innovator:</strong> Based in <strong>Kolkata and Dhanbad</strong>, I am a tech enthusiast and freelance photographer. My expertise spans from creating dynamic digital solutions to capturing the beauty of the world through my lens.
            </li>
            <li>
              <strong>My Evolution:</strong> My journey began with a fascination for coding and a love for photography. Over the years, I've cultivated a deep understanding of web and mobile technologies while refining my skills in visual storytelling.
            </li>
            <li>
              <strong>Expertise:</strong> I excel in building engaging web applications using React and Next.js and crafting stunning visual content. My work seamlessly integrates technical proficiency with creative flair, resulting in memorable and effective digital experiences.
            </li>
            <li>
              <strong>Signature Projects:</strong> I have undertaken various projects, from interactive web apps to striking photo essays. Each project reflects my commitment to innovation, quality, and my passion for delivering exceptional results.
            </li>
            <li>
              <strong>Outside the Screen:</strong> When I'm not coding or photographing, you'll find me exploring new destinations, diving into sci-fi novels, or strategizing over board games. These interests fuel my creativity and keep my perspective fresh.
            </li>
            <li>
              <strong>Let’s Collaborate:</strong> Whether you're interested in discussing tech, photography, or potential collaborations, I’d love to connect. Don’t hesitate to reach out for an inspiring conversation or to explore new opportunities together.
            </li>
          </ul>
          <button className="contact-button" onClick={handleContactClick}>
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
