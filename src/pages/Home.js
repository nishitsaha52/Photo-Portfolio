import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Home.css';

// Define an array of quotes
const quotes = [
    "“Photographs are just light and time.” – Aza Holmes",
    "“The best thing about a picture is that it never changes, even when the people in it do.” – Andy Warhol",
    "“A good photograph is knowing where to stand.” – Ansel Adams",
    "“There are no rules for good photographs, there are only good photographs.” – Ansel Adams",
    "“Photography is the story I fail to put into words.” – Destin Sparks",
    "“The camera is an instrument that teaches people how to see without a camera.” – Dorothea Lange"
];

// Generate a random quote
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '15px',
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,  // Ensure autoplay doesn't pause on hover
    pauseOnFocus: false,  // Ensure autoplay doesn't pause on focus
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding: '10px',
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: '5px',
            },
        },
    ],
};


const testimonials = [
    { text: "An amazing photographer with a keen eye for detail. The photoshoot was fantastic, and the results were beyond my expectations!", name: "Jane Doe", rating: 4 },
    { text: "Professional, creative, and incredibly talented. I highly recommend for anyone looking for exceptional photography.", name: "John Smith", rating: 4.5 },
    { text: "The experience was smooth and enjoyable. The final images were stunning and captured the essence of our event perfectly.", name: "Sarah Lee", rating: 5 },
    { text: "A true artist with a fantastic eye for composition. The photos exceeded my expectations in every way.", name: "Alice Brown", rating: 4.7 },
    { text: "Highly skilled and easy to work with. The shoot was fun and the results were perfect.", name: "Emily Clark", rating: 4.6 },
    { text: "A very professional photographer who captures moments beautifully. Highly recommended!", name: "Michael Davis", rating: 3.8 },
    { text: "Amazing experience from start to finish. The photos are beautiful and unique.", name: "Olivia White", rating: 5 },
    { text: "Great photographer with a knack for capturing the best moments. The quality of work is top-notch.", name: "Ethan Harris", rating: 4.5 },
    { text: "Absolutely thrilled with the photos. They are everything I hoped for and more.", name: "Sophia Lewis", rating: 3 },
];

const resources = [
    { title: "The Art of Photography", author: "Bruce Barnbaum", link: "https://example.com/the-art-of-photography" },
    { title: "Understanding Exposure", author: "Bryan Peterson", link: "https://example.com/understanding-exposure" },
    { title: "Photoshop for Photographers", author: "Martin Evening", link: "https://example.com/photoshop-for-photographers" },
    { title: "The Photographer's Eye", author: "Michael Freeman", link: "https://example.com/the-photographers-eye" },
    { title: "Lighting for Photographers", author: "Michael Freeman", link: "https://example.com/lighting-for-photographers" }
];

const gearList = [
    { 
        item: "Canon EOS R5", 
        details: "Full-frame mirrorless camera with 45MP resolution."
    },
    { 
        item: "Canon RF 24-70mm f/2.8L IS USM", 
        details: "Versatile zoom lens with image stabilization."
    },
    { 
        item: "Profoto B10", 
        details: "Portable battery-powered studio light."
    },
    { 
        item: "Manfrotto MT055CXPRO4", 
        details: "Carbon fiber tripod with 4-section legs."
    },
    { 
        item: "Poco F4 5G", 
        details: "Smartphone with powerful features and 5G connectivity."
    }
];

// Extracted Testimonial Component
const Testimonial = ({ text, name, rating }) => (
    <div className="home-testimonial-item">
        <div className="home-testimonial-content">
            <blockquote className="home-testimonial-quote">"{text}"</blockquote>
            <h4 className="home-testimonial-author">- {name}</h4>
            <div className="home-testimonial-rating" aria-label={`Rating: ${rating} out of 5`}>
                {[...Array(5)].map((_, i) => (
                    <span
                        key={i}
                        className={`circle ${i < Math.floor(rating) ? "filled" : i === Math.floor(rating) && rating % 1 !== 0 ? "half" : ""}`}
                        aria-hidden="true"
                    ></span>
                ))}
            </div>
        </div>
        <div className="home-testimonial-avatar">
            <div className="avatar-circle" aria-hidden="true">
                <span>{name.charAt(0)}</span>
            </div>
        </div>
    </div>
);

// Extracted GearItem Component without image
const GearItem = ({ item, details }) => (
    <li className="home-gear-item">
        <div className="home-gear-details">
            <h4>{item}</h4>
            <p>{details}</p>
        </div>
    </li>
);

// Extracted ResourceItem Component
const ResourceItem = ({ title, author, link }) => (
    <li className="home-resource-item">
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Read more about ${title}`}>
            <h4>{title}</h4>
            <p>by {author}</p>
        </a>
    </li>
);

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="home-page">
            <div className="home-marquee-container">
                <div className="home-marquee">
                    {randomQuote}
                </div>
            </div>
            <div className="hero">
                <h1>Welcome to My Portfolio</h1>
                <p>Discover my latest work and exhibitions.</p>
                <button className="cta-button" onClick={() => handleNavigate('/gallery')} aria-label="Explore the gallery">
                    Explore Gallery
                </button>
            </div>

            <div className="card featured-work">
                <h2>Featured Work</h2>
                <div className="home-slider-container">
                    <Slider {...sliderSettings} className="home-feature-slider">
                        {['pro1.jpg', 'pro2.jpg', 'pro3.jpg'].map((image, index) => (
                            <div key={index} className="home-slider-item">
                                <img src={`/images/${image}`} alt={`Photography work ${index + 1}`} className="home-slider-image" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="home-card testimonials">
                <h2>What Clients Say</h2>
                <div className="home-header-underline"></div>
                <div className="home-testimonial-container">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            {...testimonial}
                        />
                    ))}
                </div>
            </div>

            <div className="home-card gear-list">
                <h2>My Gear</h2>
                <ul className="home-gear-list">
                    {gearList.map((gear, index) => (
                        <GearItem
                            key={index}
                            {...gear}
                        />
                    ))}
                </ul>
                <button className="home-contact-button" onClick={() => handleNavigate('/gearlist')} aria-label="View all gear">
                    View Full Gear List
                </button>
            </div>

            <div className="home-card resource-recommendations">
                <h2>Recommended Resources</h2>
                <ul className="home-resource-list">
                    {resources.map((resource, index) => (
                        <ResourceItem
                            key={index}
                            {...resource}
                        />
                    ))}
                </ul>
                <button className="home-contact-button" onClick={() => handleNavigate('/resource')} aria-label="View all resources">
                    View All Resources
                </button>
            </div>
        </div>
    );
};

export default Home;
