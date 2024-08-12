import React, { useEffect, useState, useRef } from 'react';
import _ from 'lodash';

const CustomCursor = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);
  const cursorRef = useRef(null);

  // Check if it is a touch device
  const isTouchDevice = () => {
    try {
      document.createEvent('TouchEvent');
      return true;
    } catch (e) {
      return false;
    }
  };

  // Debounce the move function to improve performance
  const debouncedMove = _.debounce((x, y) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${x}px`;
      cursorRef.current.style.top = `${y}px`;
    }
  }, 10);

  const move = (e) => {
    const touchEvent = e.touches ? e.touches[0] : null;
    const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
    const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;

    setCursorX(x);
    setCursorY(y);

    debouncedMove(x, y);
  };

  const handleMouseDown = () => setIsClicking(true);
  const handleMouseUp = () => setIsClicking(false);

  const handleMouseEnter = (e) => {
    const target = e.target;
    if (target instanceof Element && (target.classList.contains('card') || target.classList.contains('button'))) {
      setButtonHovered(true);
    }
  };

  const handleMouseLeave = (e) => {
    const target = e.target;
    if (target instanceof Element && (target.classList.contains('card') || target.classList.contains('button'))) {
      setButtonHovered(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter, true);
    document.addEventListener('mouseout', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('touchmove', move);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter, true);
      document.removeEventListener('mouseout', handleMouseLeave, true);
    };
  }, []);

  return (
    <div>
      <style>
        {`
          * {
            margin: 0;
            cursor: none;
          }

          body {
            background-color: #0984e3;
            height: auto;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: auto;
          }

          #cursor {
            position: fixed;
            background-image: url(/images/pointer.png); /* Adjusted path */
            background-size: cover;
            height: 30px; /* Adjust based on your PNG dimensions */
            width: 30px; /* Adjust based on your PNG dimensions */
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease, background-color 0.2s ease;
          }
        `}
      </style>
      <div
        id="cursor"
        ref={cursorRef}
        style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
      ></div>
    </div>
  );
};

export default CustomCursor;
