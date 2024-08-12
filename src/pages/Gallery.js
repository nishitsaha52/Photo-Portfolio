import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Gallery.css';

// Image data categorized
const images = {
  Nature: [
    { src: '/images/IMG-20240806-WA0012.jpg', alt: 'Nature Image 12' },
    { src: '/images/IMG-20240806-WA0023.jpg', alt: 'Nature Image 23' },
    { src: '/images/IMG-20240806-WA0025.jpg', alt: 'Nature Image 25' },
    { src: '/images/IMG-20240806-WA0026.jpg', alt: 'Nature Image 26' },
    { src: '/images/IMG-20240806-WA0027.jpg', alt: 'Nature Image 27' },
    { src: '/images/IMG-20240806-WA0028.jpg', alt: 'Nature Image 28' },
    { src: '/images/IMG-20240806-WA0043.jpg', alt: 'Nature Image 43' },
    { src: '/images/IMG-20240806-WA0044.jpg', alt: 'Nature Image 44' },
    { src: '/images/IMG-20240806-WA0047.jpg', alt: 'Nature Image 47' },
    { src: '/images/IMG-20240806-WA0052.jpg', alt: 'Nature Image 52' },
    { src: '/images/IMG-20240806-WA0054.jpg', alt: 'Nature Image 54' },
    { src: '/images/IMG-20240806-WA0055.jpg', alt: 'Nature Image 55' },
    { src: '/images/IMG-20240806-WA0059.jpg', alt: 'Nature Image 59' },
    { src: '/images/IMG-20240806-WA0065.jpg', alt: 'Nature Image 65' },
    { src: '/images/IMG-20240806-WA0053.jpg', alt: 'Nature Image 53' },
    { src: '/images/IMG-20240806-WA0042.jpg', alt: 'Nature Image 42' },
    { src: '/images/IMG-20240806-WA0050.jpg', alt: 'Nature Image 50' },
    { src: '/images/IMG-20240806-WA0056.jpg', alt: 'Nature Image 56' },
  ],
  Sculpture: [
    { src: '/images/IMG-20240806-WA0024.jpg', alt: 'Sculpture Image 24' },
    { src: '/images/IMG-20240806-WA0036.jpg', alt: 'Sculpture Image 36' },
    { src: '/images/IMG-20240806-WA0037.jpg', alt: 'Sculpture Image 37' },
    { src: '/images/IMG-20240806-WA0041.jpg', alt: 'Sculpture Image 41' },
    { src: '/images/IMG-20240806-WA0048.jpg', alt: 'Sculpture Image 48' },
    { src: '/images/IMG-20240806-WA0060.jpg', alt: 'Sculpture Image 60' },
    { src: '/images/IMG-20240806-WA0063.jpg', alt: 'Sculpture Image 63' },
  ],
  Building: [
    { src: '/images/IMG-20240806-WA0022.jpg', alt: 'Building Image 22' },
    { src: '/images/IMG-20240806-WA0046.jpg', alt: 'Building Image 46' },
    { src: '/images/IMG-20240806-WA0049.jpg', alt: 'Building Image 49' },
    { src: '/images/IMG-20240806-WA0064.jpg', alt: 'Building Image 64' },
    { src: '/images/IMG-20240806-WA0020.jpg', alt: 'Building Image 20' },
  ],
  Food: [
    { src: '/images/IMG-20240806-WA0021.jpg', alt: 'Food Image 21' },
    { src: '/images/IMG-20240806-WA0062.jpg', alt: 'Food Image 62' },
  ],
  Light: [
    { src: '/images/IMG-20240806-WA0013.jpg', alt: 'Light Image 13' },
    { src: '/images/IMG-20240806-WA0015.jpg', alt: 'Light Image 15' },
    { src: '/images/IMG-20240806-WA0016.jpg', alt: 'Light Image 16' },
    { src: '/images/IMG-20240806-WA0018.jpg', alt: 'Light Image 18' },
    { src: '/images/IMG-20240806-WA0019.jpg', alt: 'Light Image 19' },
    { src: '/images/IMG-20240806-WA0029.jpg', alt: 'Light Image 29' },
    { src: '/images/IMG-20240806-WA0030.jpg', alt: 'Light Image 30' },
    { src: '/images/IMG-20240806-WA0031.jpg', alt: 'Light Image 31' },
    { src: '/images/IMG-20240806-WA0032.jpg', alt: 'Light Image 32' },
    { src: '/images/IMG-20240806-WA0033.jpg', alt: 'Light Image 33' },
    { src: '/images/IMG-20240806-WA0038.jpg', alt: 'Light Image 38' },
    { src: '/images/IMG-20240806-WA0039.jpg', alt: 'Light Image 39' },
    { src: '/images/IMG-20240806-WA0040.jpg', alt: 'Light Image 40' },
    { src: '/images/IMG-20240806-WA0051.jpg', alt: 'Light Image 51' },
    { src: '/images/IMG-20240806-WA0057.jpg', alt: 'Light Image 57' },
    { src: '/images/IMG-20240806-WA0058.jpg', alt: 'Light Image 58' },
    { src: '/images/IMG-20240806-WA0061.jpg', alt: 'Light Image 61' },
  ],
};

const quotes = {
  Nature: "Nature is not a place to visit. It is home.",
  Sculpture: "Sculpture is the art of the intelligence.",
  Building: "Architecture should speak of its time and place, but yearn for timelessness.",
  Food: "Food is symbolic of love when words are inadequate.",
  Light: "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Nature');

  const settings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    lazyLoad: 'ondemand',  // Lazy loading images
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

  const handleCardClick = useCallback((e) => {
    const card = e.target.closest('.gallery-item');
    if (card) {
      card.classList.toggle('zoom-out');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleCardClick);
    return () => {
      document.removeEventListener('click', handleCardClick);
    };
  }, [handleCardClick]);

  const memoizedImages = useMemo(() => images[selectedCategory], [selectedCategory]);
  const memoizedQuote = useMemo(() => quotes[selectedCategory], [selectedCategory]);

  return (
    <div className="gallery-container">
    <h1>My Workplace</h1>
    <div className="header-underline"></div>
      <div className="card featured-work">
        <h1>Featured Work</h1>
        <div className="slider-container">
          <Slider {...settings} className="feature-slider">
            <div className="slider-item">
              <img src="/images/pro1.jpg" alt="Photography of a sunset" className="slider-image" />
            </div>
            <div className="slider-item">
              <img src="/images/pro2.jpg" alt="Close-up of a flower" className="slider-image" />
            </div>
            <div className="slider-item">
              <img src="/images/pro3.jpg" alt="Night cityscape" className="slider-image" />
            </div>
            <div className="slider-item">
              <img src="/images/pro5.jpg" alt="Mountains under a clear sky" className="slider-image" />
            </div>
            {/* Additional images */}
          </Slider>
        </div>
      </div>
      <div className="card featured-work">
        <div className="category-buttons">
          {Object.keys(images).map((category) => (
            <button
              key={category}
              className={`category-button ${category === selectedCategory ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              aria-label={`Select ${category} category`}
            >
              {category}
            </button>
          ))}
        </div>
        <Slider {...settings} className="gallery-slider">
          {memoizedImages.map((image) => (
            <div key={image.src} className="gallery-item">
              <img src={image.src} alt={image.alt} className="gallery-image" />
            </div>
          ))}
        </Slider>
        <br />
      </div>
      <div className="quote fade-in" aria-live="polite">
        {memoizedQuote}
      </div>
    </div>
  );
};

export default Gallery;