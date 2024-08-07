import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

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
          <h2>Hello, I'm Nishit!</h2>
          <ul>
            <li>
              <strong>Who I Am:</strong> I’m a passionate tech enthusiast and freelance photographer based in <strong>Kolkata and Dhanbad</strong>. My love for technology and photography intertwines to bring unique perspectives to both fields.
            </li>
            <li>
              <strong>My Journey:</strong> My adventure began with a curiosity for coding and capturing moments through the lens. Over the years, I’ve honed my skills in web and mobile app development while also diving deep into the world of photography.
            </li>
            <li>
              <strong>What I Do:</strong> I specialize in creating engaging digital experiences with web technologies like React and Next.js, and capturing life's beautiful moments through my camera. My work is a blend of technical precision and creative vision.
            </li>
            <li>
              <strong>Notable Projects:</strong> I've worked on diverse projects ranging from dynamic web applications to captivating photo essays. Each project is a new opportunity to challenge myself and deliver exceptional results.
            </li>
            <li>
              <strong>Hobbies & Interests:</strong> Outside of tech and photography, I enjoy exploring new places, reading sci-fi novels, and playing strategy games. These interests often inspire my work and keep my creativity flowing.
            </li>
            <li>
              <strong>Let's Connect:</strong> I’m always excited to collaborate on new projects or discuss innovative ideas. Feel free to reach out for collaborations, tech discussions, or just a friendly chat about photography and technology.
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
