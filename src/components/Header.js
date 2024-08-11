import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { FaHome, FaCamera, FaServicestack, FaBook, FaInfoCircle, FaPhone } from 'react-icons/fa'; // Importing icons from react-icons
import '../styles/Header.css';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
            aria-label="More"
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
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent black background
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                marginTop: '8px',
              },
              '& .MuiMenuItem-root': {
                color: '#E9B824', // Bright yellow text color
                padding: '1em',
                fontSize: '1.2em',
                borderRadius: '6px',
                display: 'flex', // To align icon and text
                alignItems: 'center',
                gap: '0.5em', // Gap between icon and text
                transition: 'background-color 0.3s ease, color 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Light transparent white on hover
                  color: '#F5DEB3', // White text color on hover
                },
              },
            }}
          >
            <MenuItem onClick={() => handleMenuItemClick('/resource')}>
              <FaBook /> Resources
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/gearlist')}>
              <FaCamera /> Gears
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/about')}>
              <FaInfoCircle /> About
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/contact')}>
              <FaPhone /> Contact
            </MenuItem>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
