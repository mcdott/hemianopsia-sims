import React, { useState } from "react";
import "./Read.css";

const Read = () => {
  const [cursorX, setCursorX] = useState(0);
  const [overlayOnLeft, setOverlayOnLeft] = useState(true);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Leave a 5px space between the cursor and the overlay
    const adjustedX = overlayOnLeft
      ? Math.max(0, e.clientX - 5)
      : e.clientX + 5;
    setCursorX(adjustedX);
  };

  const toggleOverlaySide = () => {
    setOverlayOnLeft(!overlayOnLeft);
  };

  const overlayStyle = overlayOnLeft
    ? {
        width: `${Math.max(0, cursorX - 5)}px`,
        left: 0,
        right: "auto",
      }
    : {
        width: `calc(100vw - ${cursorX + 5}px)`,
        left: `${cursorX + 5}px`,
        right: "auto",
      };

  return (
    <div className='readContainer' onMouseMove={handleMouseMove}>
      <div className='overlay' style={overlayStyle}></div>
      <div className='toggle-button-container'>
        <button
          onClick={toggleOverlaySide}
          className={`toggle-button ${overlayOnLeft ? "" : "active"}`}
        />
      </div>
      <div className='toggle-button-cover'>
        <div className='button-cover'>
          <div className='button b2' id='button-13'>
            <input type='checkbox' className='checkbox' />
            <div className='knobs'>
              <span></span>
            </div>
            <div className='layer'></div>
          </div>
        </div>
      </div>
      <p>
        Keep your eyes on the prize — the mouse pointer, that is! Glide it under
        each word and let it lead you to the next line; that's how this
        simulation works. Toggle to see how sentences unfold differently with
        right and with left hemianopsia.
      </p>
    </div>
  );
};

export default Read;
