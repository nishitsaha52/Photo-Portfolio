import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/GearList.css";

// GearCard Component
const GearCard = ({ title, description, image }) => {
    return (
        <div className="gear-card">
            {image && <img src={image} alt={title} />}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

// GearCategory Component
const GearCategory = ({ category, gears }) => {
    return (
        <div className="category-container">
            <h2>{category}</h2>
            <div className="gear-grid">
                {gears.map((gear, index) => (
                    <GearCard
                        key={index}
                        title={gear.title}
                        description={gear.description}
                        image={gear.image}
                    />
                ))}
            </div>
        </div>
    );
};

const gearList = [
    {
        category: "Photography",
        gears: [
            {
                title: "Canon EOS R5",
                description: "A highly recommended mirrorless camera for professional photographers, offering excellent image quality.",
                image: "https://m.media-amazon.com/images/I/8115pNkutkL._SL1500_.jpg"
            },
            {
                title: "Photography Lighting Kit",
                description: "A comprehensive lighting kit that includes softboxes, reflectors, and light stands to enhance your photography.",
                image: "https://www.hiffin.in/cdn/shop/products/61i36r_Cz5S._AC_SL1500.jpg?v=1618993572"
            },
            {
                title: "Nikon D850",
                description: "A full-frame DSLR camera known for its high resolution and versatile performance.",
                image: "https://m.media-amazon.com/images/I/81WtQ64-SOL._SL1500_.jpg"
            },
            {
                title: "Sony A7R IV",
                description: "A high-resolution mirrorless camera with exceptional image quality and advanced autofocus.",
                image: "https://m.media-amazon.com/images/I/713xBPyXC-L._SL1500_.jpg"
            },
            {
                title: "Manfrotto Tripod",
                description: "A sturdy tripod that provides stability for your camera, ideal for landscape and studio photography.",
                image: "https://m.media-amazon.com/images/I/61KX7meSMAL._SL1200_.jpg"
            },

            {
                title: "Sigma 24-70mm f/2.8 Lens",
                description: "A versatile zoom lens known for its sharpness and low-light performance, suitable for various photography styles.",
                image: "https://m.media-amazon.com/images/I/71R6LTyMphL._SL1500_.jpg"
            }
        ]
    },
    {
        category: "Videography",
        gears: [
            {
                title: "Sony A7S III",
                description: "A popular camera among videographers for its excellent low-light performance and 4K recording capabilities.",
                image: "https://m.media-amazon.com/images/I/81MWnjhgS1L._SL1500_.jpg"
            },
            {
                title: "Rode VideoMic Pro",
                description: "A high-quality microphone designed for capturing clear audio in video recordings.",
                image: "https://m.media-amazon.com/images/I/51PrrA-z7kL._SL1080_.jpg"
            },
            {
                title: "Panasonic GH5",
                description: "A mirrorless camera known for its video recording capabilities, including 4K at 60fps and advanced video features.",
                image: "https://m.media-amazon.com/images/I/4136wMPzWTS.jpg"
            },
            {
                title: "Viltrox EF-EOS M2 Adapter",
                description: "An adapter that allows you to use Canon EF lenses on EOS M cameras, expanding your lens options for videography.",
                image: "https://m.media-amazon.com/images/I/716TkBL3VOL._SL1500_.jpg"
            }
        ]
    },
    {
        category: "Editing",
        gears: [
            {
                title: "Final Cut Pro",
                description: "A professional video editing software exclusive to macOS, known for its powerful editing tools.",
                image: "https://help.apple.com/assets/659C5237436AD53D88093926/659C523AAAAA2709830C2485/en_US/97f5f4dfe6df84d78caacff68ec63538.png"
            },
            {
                title: "DaVinci Resolve",
                description: "A professional video editing software with advanced color grading features.",
                image: "data:image/jpeg;base64,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"
            },
            {
                title: "Adobe Lightroom",
                description: "A powerful tool for managing and editing photos with a focus on workflow.",
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL4AAAC6CAMAAAAnOwe5AAAAn1BMVEUAHjYxqP////89TV0AFS8AHDQzrv8yq/8EITsjfrsAAAAsmecHHDMACR0dZ58une4smeEABRkfbKYRSHEAACEAACQAES4AESUAFy3X2dy6vcKAho1eaXRLWGacoKYAAAUAAA/JzM8yOEnl6OqRlpwjKjkAABoACiwaITNucngdKT49RlXy8/QiNEcLJz40sv8VVYUJLUoOOVsaXZIlg8jIe/LTAAAEcUlEQVR4nO3di3KaQBSA4dUIKNYY5Q6i3ITQkoCX93+2otYLKxo1wd0zPX9n0hkyJF/tkkEhHtK+VJZZduRM3BeGuRMnsq0wu4gk9ZtDf+qqM0/VEr3DMD3RVG8Wu1M/vIPvR24SJwLhJCGJNTfyb+T7aaDq3Nh3CboapPYN/DCdJx3W2ro6+nt6toRofiTzs2johESOrvIt12NtvJ7nWpf5dqCx9n2VFtiX+NFcZ637On0e1fMdjctDlq6jOXV8J2YNu7XYOedH3C/7Y1pE8+05iJWzqzO3q3wrAHDUHtMDq8J/AbR0Nmkvp3xnxNpzbyPnyLdk1pr7k60Df5KwxtxfMtnz7Xduz9IuJ7zbO36Wgvqps09Psy3f/g3oR/6xzm97w88clbXksVQnK/nWH5Brp1w9f6ySbwN98MuH3y75EVx+1CbZB9C1sznzyUg4Y614PDkkPmD+zCdTME+yzounxAF2qnya5hAX7JFbHrsu+QB4urZP+CCfrA3fCTQewzAMwzAMq08wqUCdcAsLhWoJyS+MRamS2P/F2nR7QrcntipJyH9ayGcZ8lmGfJYhn2XIZxnyWYZ8lj2BbxqDgdHQM7jv84Vq1U+aI3mwUFarwvxB8+k3/y7/12e30onTNLvL8VDMy8RxMzfXfZc/eBVPy6Wx8e8zplnac1HafVVO+aMxtbfY3a0fY4OXDts55RsFtXu+Gmy+rLF6k6STzbzyFWp3cT0rF47cq+C55ZtLevehTIzFkNoKht+SPFMZStRGbvmLIc03i3M9IH6dnle+0KX5rTo9IH5tvPJN2HwDNJ8MYPO9/4Ev8cqXr/A315rKs4jyRHq4PZGDxJdEqf+2Xo9XRaEUBWnm2WJTfDEf9l6VpTAaGdt4fa5by5fydbHsGkZDz3CPNcIXh8qTLm83wn+Nja93/JEa4A+L0dOuy/88X3qjX+xpsCb4XeTfGPKR/3DIR/7DIR/5D4d85D8c8pH/cMhH/sMhnzu+QMo/uw/bj4Ts/tre73LYxiufusWlvv3Ll7zxW61174YUk1e+eEP5/noDf/xbypfcPvq3JO5fQwbJl/r7t06DyV+D5h/vDATJzwvQaz9f7IkQ+VLrcF4Ekt8HzRfXhyu2IPlj2PwCMl+SFE74RBjX3fj3Bb+/PPLf6N+2fuZ1XSIsX+9POe5vKL1xtaZ+1aA+c3B/p0BzRPWs+xkwDMMwDMMwDMMwDEag34n5E/qbeAN/C3Xgb2APfHwA8OENIcBhVfvkkGSwxrSdthlcAnxsDPShPcBHJgEfWAV8XBj0YW3AR+VBH1QIfUwk8CGd0EekQh9QC3w8MPThzNBHY0MfTA59LHx5/AbcHwBaYLcv8duW67H2Xc9zrfZlfrmA5ITb8zchkSOKS/PbYTpPuDyEO8k8DWntGb/d9tNA1Tn7LxB0NUj9c2sNv/wHRG4S87OIhBLjRjX4C/xyCflTV515sZboHYbpiRZ7M9Wd+mfL5iq/LMssO3Im7gvD3IkT2VaWXUT+Bcv3i6qyPxcJAAAAAElFTkSuQmCC"
            },
        ]
    },
    {
        category: "Mobile",
        gears: [
            {
                title: "Poco F4 5G",
                description: "Snapdragon® 870 with 5G 120Hz 6.67” AMOLED DotDisplay 64MP main camera with OIS 67W turbo charging",
                image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQwbNYY0aed_X7i-XbhYVTWvuJ_RBd5JsIXBHYwmWcrUJI9hQdvs4UUOht58iOdLJGFmdLQ90DmJ3TQZj2A2FJB6-WbLC_nN0dXrQh58PvXQm6GHDWjLTrg&usqp=CAE"
            },
            {
                title: "Realme 8 Pro",
                description: "realme 8 Pro in India, 108MP Ultra Quad Camera, 50W SuperDart Charge, 6.43\" AMOLED screen",                
                image:"https://m.media-amazon.com/images/I/51uASLmPn+S.jpg"
            },
            {
                title: "Iphone 15 Pro Max",
                description: "With iPhone 15 Pro, you have multiple focal lengths to work with. It’s like having seven pro lenses in your pocket, everywhere you go.",
                image:"https://m.media-amazon.com/images/I/81Os1SDWpcL._SL1500_.jpg"
            },
        ]
    }
];

// GearList Component
const GearList = () => {
    
    const navigate = useNavigate();
    const handleContactClick = () => {
        navigate('/resource');
    };
    return (
        <div className="page-container">
            {gearList.map((categoryData, index) => (
                <GearCategory
                    key={index}
                    category={categoryData.category}
                    gears={categoryData.gears}
                />
            ))}
            <center>
                <button
                    className="home-contact-button"
                    onClick={handleContactClick}
                    aria-label="Contact for more resources"
                >
                    Contact for More!!!
                </button>
                </center>
        </div>
    );
};

export default GearList;
