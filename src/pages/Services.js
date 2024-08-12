import React from 'react';
import { FaInstagram, FaFacebookF, FaPinterestP, FaGlobe } from 'react-icons/fa';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import '../styles/Services.css'; // Custom styles for this page

const services = [
    {
        title: "Portrait Photography",
        description: "Capturing stunning portraits with a focus on natural expressions and dynamic compositions.",
        examples: [
            { img: "/images/pro1.jpg", alt: "Portrait Example 1" },
            { img: "/images/pro8.jpg", alt: "Portrait Example 2" }
        ],
        pricing: "Starting at ₹12,000"
    },
    {
        title: "Event Photography",
        description: "Documenting special events with high-quality photos that tell the story of your occasion.",
        examples: [
            { img: "/images/IMG-20240806-WA0017.jpg", alt: "Event Example 1" },
            { img: "/images/IMG-20240806-WA0061.jpg", alt: "Event Example 2" }
        ],
        pricing: "Packages from ₹40,000"
    },
    {
        title: "Commercial Photography",
        description: "Providing professional images for marketing and advertising purposes.",
        examples: [
            { img: "/images/IMG-20240806-WA0064.jpg", alt: "Commercial Example 1" },
            { img: "/images/IMG-20240806-WA0057.jpg", alt: "Commercial Example 2" }
        ],
        pricing: "Custom quotes available"
    },
    {
        title: "Product Photography",
        description: "High-quality images showcasing your products to boost online sales and marketing.",
        examples: [
            { img: "/images/IMG-20240806-WA0053.jpg", alt: "Product Example 1" },
            { img: "/images/IMG-20240806-WA0051.jpg", alt: "Product Example 2" }
        ],
        pricing: "Starting at ₹16,000"
    },
    {
        title: "Fashion Photography",
        description: "Creative fashion shoots highlighting clothing and accessories in stylish settings.",
        examples: [
            { img: "/images/profile.jpg", alt: "Fashion Example 1" },
            { img: "/images/IMG-20240806-WA0045.jpg", alt: "Fashion Example 2" }
        ],
        pricing: "Packages from ₹24,000"
    },
    {
        title: "Real Estate Photography",
        description: "Capturing the best angles of properties to attract potential buyers and renters.",
        examples: [
            { img: "/images/IMG-20240806-WA0022.jpg", alt: "Real Estate Example 1" },
            { img: "/images/IMG-20240806-WA0064.jpg", alt: "Real Estate Example 2" }
        ],
        pricing: "Starting at ₹20,000"
    }
];

const sessions = [
    {
        category: "Photography",
        image: "/images/IMG-20240806-WA0050.jpg", // Add image path
        details: [
            "12 Classes",
            "2 hours per class",
            "Portrait Photography Techniques",
            "Event Coverage Strategies",
            "Commercial Photography Skills",
            "Editing Software and Techniques"
        ],
        cost: "₹15,000"
    },
    {
        category: "Videography",
        video: "/videos/video.mp4",
        details: [
            "10 Classes",
            "2.5 hours per class",
            "Shooting Techniques",
            "Editing and Post-Production",
            "Video Production Workflow",
            "Project Work and Review"
        ],
        cost: "₹25,000"
    },
    {
        category: "Editing",
        image: "/images/edit.jpg", // Add image path
        details: [
            "8 Classes",
            "1.5 hours per class",
            "Photo Editing Software Skills",
            "Video Editing Techniques",
            "Color Correction and Grading",
            "Enhancing Images and Videos"
        ],
        cost: "₹10,000"
    }
];


const locations = [
    { position: [22.5726, 88.3639], name: "Kolkata" },
    { position: [23.7957, 86.4346], name: "Dhanbad" },
    { position: [23.2504, 87.2914], name: "Burdwan" },
    { position: [19.0760, 72.8777], name: "Mumbai" },
    { position: [15.2993, 74.1240], name: "Goa" },
    { position: [34.0836, 74.7973], name: "Kashmir" },
    { position: [17.6868, 83.2185], name: "Vizag" },
    { position: [31.1048, 77.1734], name: "Shimla" },   // Shimla
    { position: [32.1656, 77.2770], name: "Kullu" },     // Kullu
    { position: [32.2396, 77.1886], name: "Manali" },    // Manali
    { position: [29.3794, 79.4530], name: "Nainital" },  // Nainital
    { position: [30.3165, 78.0322], name: "Dehradun" },  // Dehradun
    { position: [28.6139, 77.2090], name: "New Delhi" }, // New Delhi
    { position: [29.9591, 78.1642], name: "Haridwar" },  // Haridwar
    { position: [30.0869, 78.2676], name: "Rishikesh" }, // Rishikesh
    { position: [23.2500, 87.0734], name: "Purulia" },   // Purulia
    { position: [25.3176, 82.9739], name: "Varanasi" }   // Varanasi
];

const Services = () => {
    return (
        <div className="services">
            <div className="intro">
                <h1>Our Services</h1>
                <div className="header-underline"></div>
                <p>Explore the wide range of professional photography services we offer. Each service is crafted to meet your specific needs with elegance and excellence.</p>
            </div>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-header">
                            <h2>{service.title}</h2>
                            <div className="pricing-tag">{service.pricing}</div>
                        </div>
                        <p className="service-description">{service.description}</p>
                        <div className="service-examples">
                            {service.examples.map((example, idx) => (
                                <img key={idx} src={example.img} alt={example.alt} className="service-example-img" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="sessions-section">
                <h1>Session Details</h1>
                <div className="header-underline"></div>
                <p>Our photography and videography sessions are designed to provide comprehensive learning experiences. Each session includes in-depth instruction, hands-on practice, and personalized feedback to help you master your skills. Explore our offerings below to find the perfect course for you.</p>
                <div className="sessions-grid">
                    {sessions.map((session, index) => (
                        <div className="session-card" key={index}>
                            <div className="session-header">
                                <h2>{session.category}</h2>
                                <div className="pricing-tag">{session.cost}</div>
                            </div>
                            {session.video ? (
                                <div className="session-video">
                                    <video controls>
                                        <source src={session.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            ) : (
                                <div className="session-image">
                                    <img src={session.image} alt={session.category} />
                                </div>
                            )}
                            <ul className="session-details">
                                {session.details.map((detail, idx) => (
                                    <li key={idx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="contact-info-container">
    <div className="map-section">
        <h2>Places Where I Shoot</h2>
        <div className="header-underline"></div>
        <br/><br/>
        <MapContainer
                        center={[22.5726, 88.3639]}
                        zoom={5}
                        zoomDelta={0.2}
                        zoomSnap={0}
                        scrollWheelZoom={false}
                        style={{ height: "500px", width: "100%" }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution=''
                        />
                        {locations.map((location, index) => (
                            <CircleMarker key={index} center={location.position} radius={10} color="#E9B824" fillColor="#6C0345" fillOpacity={1}>
                                <Popup className="custom-popup">
                                    <div className="popup-content">
                                        <h3>{location.name}</h3>
                                        <p>{location.info}</p>
                                    </div>
                                </Popup>
                            </CircleMarker>
                        ))}
                    </MapContainer>
    </div>
    <div className="contact-info-wrapper">
        <h2>Follow me on</h2>
        <div className="header-underline"></div>
        <br/>
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

export default Services;
