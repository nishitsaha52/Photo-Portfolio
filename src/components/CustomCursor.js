import React, { useEffect, useState, useRef, useCallback } from 'react';
import _ from 'lodash';

const CustomCursor = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
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

  // Memoize the move function
  const move = useCallback((e) => {
    const touchEvent = e.touches ? e.touches[0] : null;
    const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
    const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;

    setCursorX(x);
    setCursorY(y);

    debouncedMove(x, y);
  }, [debouncedMove]);

  useEffect(() => {
    document.addEventListener('mousemove', move);
    document.addEventListener('touchmove', move);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('touchmove', move);
    };
  }, [move]);

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
