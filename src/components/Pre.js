import React from 'react';

const Preloader = () => {
  const preloaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  };

  const spinnerStyle = {
    border: '8px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '50%',
    borderTop: '8px solid #3498db',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div style={preloaderStyle}>
      <div style={spinnerStyle}></div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Preloader;
