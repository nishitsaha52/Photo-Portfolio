import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { FaHome, FaCamera, FaServicestack, FaBook, FaInfoCircle, FaPhone, FaBars } from 'react-icons/fa';
import '../styles/Header.css';

const menuItems = [
  { label: 'Resources', icon: <FaBook />, path: '/resource' },
  { label: 'Gears', icon: <FaCamera />, path: '/gearlist' },
  { label: 'About', icon: <FaInfoCircle />, path: '/about' },
  { label: 'Contact', icon: <FaPhone />, path: '/contact' },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (path) => {
    handleMenuClose();
    navigate(path);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu} aria-label="Home">
          <FaHome /> Home
        </Link>
        <Link to="/gallery" onClick={toggleMenu} aria-label="Gallery">
          <FaCamera /> Gallery
        </Link>
        <Link to="/services" onClick={toggleMenu} aria-label="Services">
          <FaServicestack /> Services
        </Link>
        <div className="dropdown">
          <IconButton
            aria-label="More options"
            aria-expanded={Boolean(anchorEl)}
            onClick={handleMenuClick}
            color="primary"
            className="dropdown-toggle"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                marginTop: '8px',
              },
              '& .MuiMenuItem-root': {
                color: '#E9B824',
                padding: '1em',
                fontSize: '1.2em',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5em',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#F5DEB3',
                },
              },
            }}
          >
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                onClick={() => handleMenuItemClick(item.path)}
              >
                {item.icon} {item.label}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </nav>
      <IconButton
        className="hamburger-icon"
        aria-label="Toggle mobile menu"
        onClick={handleMobileMenuToggle}
      >
        <FaBars />
      </IconButton>
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={handleMobileMenuToggle} aria-label="Home">
          <FaHome /> Home
        </Link>
        <Link to="/gallery" onClick={handleMobileMenuToggle} aria-label="Gallery">
          <FaCamera /> Gallery
        </Link>
        <Link to="/services" onClick={handleMobileMenuToggle} aria-label="Services">
          <FaServicestack /> Services
        </Link>
        <Link to="/resource" onClick={handleMobileMenuToggle} aria-label="Resources">
          <FaBook /> Resources
        </Link>
        <Link to="/gearlist" onClick={handleMobileMenuToggle} aria-label="Gears">
          <FaCamera /> Gears
        </Link>
        <Link to="/about" onClick={handleMobileMenuToggle} aria-label="About">
          <FaInfoCircle /> About
        </Link>
        <Link to="/contact" onClick={handleMobileMenuToggle} aria-label="Contact">
          <FaPhone /> Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;