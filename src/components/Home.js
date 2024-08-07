import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles.css';

const Home = () => {
    const navigate = useNavigate();

    const handleExploreGalleryClick = () => {
        navigate('/gallery');
    };

    const handleContactClick = () => {
        navigate('/contact');
    };

    const settings = useMemo(() => ({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }), []);

    return (
        <div className="home">
            <div className="hero">
                <h1>Welcome to My Portfolio</h1>
                <p>Discover my latest work and exhibitions.</p>
                <button className="cta-button" onClick={handleExploreGalleryClick}>
                    Explore Gallery
                </button>
            </div>
            <div className="card about">
                <h2>About Me</h2>
                <p>
                    I am a photographer with a passion for capturing the beauty of the world through my lens. 
                    My work spans various genres, including landscape, portrait, and abstract photography.
                </p>
                <p>
                    With over many years of experience, I have honed my skills and developed a unique style that blends 
                    creativity with technical expertise. My journey in photography started in 2020.
                </p>
                <p>
                    I believe that every picture tells a story, and I strive to convey the emotions and essence of my subjects 
                    through my work. Whether it's a serene landscape, a striking portrait, or an abstract piece, each photograph 
                    reflects a part of my artistic vision.
                </p>
                <p>
                    I have had the privilege of showcasing my work in various exhibitions and publications, and I am always 
                    eager to explore new projects and collaborations.
                </p>
            </div>
            <div className="card featured-work">
                <h2>Featured Work</h2>
                <div className="slider-container">
                    <Slider {...settings} className="feature-slider">
                        <div className="slider-item">
                            <img src="/images/pro1.jpg" alt="Photography 1" className="slider-image" />
                        </div>
                        <div className="slider-item">
                            <img src="/images/pro2.jpg" alt="Photography 2" className="slider-image" />
                        </div>
                        <div className="slider-item">
                            <img src="/images/pro3.jpg" alt="Photography 3" className="slider-image" />
                        </div>
                        <div className="slider-item">
                            <img src="/images/pro5.jpg" alt="Photography 5" className="slider-image" />
                        </div>
                        <div className="slider-item">
                            <img src="/images/pro6.jpg" alt="Photography 6" className="slider-image" />
                        </div>
                        <div className="slider-item">
                            <img src="/images/pro7.jpg" alt="Photography 7" className="slider-image" />
                        </div>
                        <div className="slider-item">
                            <img src="/images/pro8.jpg" alt="Photography 8" className="slider-image" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="card contact">
                <h2>Contact Me</h2>
                <p>
                    If you would like to get in touch, feel free to reach out. I am available for projects, collaborations, 
                    and just a friendly chat about photography.
                </p>
                <button className="home-contact-button" onClick={handleContactClick}>
                    Contact Me
                </button>
            </div>
        </div>
    );
};

export default Home;
