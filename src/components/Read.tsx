import React, { useState } from "react";
import "./Read.css";

const Read = () => {
  const [cursorX, setCursorX] = useState(0);
  // overLayOnLeft set to false to start with the overlay on the right
  // Note the toggle button works opposite to the overlay to mimic hemianopsia
  const [overlayOnLeft, setOverlayOnLeft] = useState(false);
  const [textColorToggle, setTextColorToggle] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Position the "underline" cursor to be bisected by the edge of theD overlay
    const adjustedX = overlayOnLeft
      ? Math.max(0, e.clientX - 15)
      : e.clientX + 15;
    setCursorX(adjustedX);
  };

  // const overlayStyle = overlayOnLeft
  //   ? {
  //       width: `${Math.max(0, cursorX - 5)}px`,
  //       left: 0,
  //       right: "auto",
  //     }
  //   : {
  //       width: `calc(100vw - ${cursorX + 5}px)`,
  //       left: `${cursorX + 5}px`,
  //       right: "auto",
  //     };

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const adjustedX = e.clientX;
  //   setCursorX(adjustedX);
  // };

  const overlayStyle = overlayOnLeft
    ? {
        width: `${cursorX + 30}px`,
        left: 0,
        right: "auto",
      }
    : {
        width: `calc(100vw - ${cursorX}px)`,
        left: `${cursorX}px`,
        right: "auto",
      };

  const toggleOverlaySide = () => {
    setOverlayOnLeft(!overlayOnLeft);
    setTextColorToggle(!textColorToggle); // Toggle the text color state
  };

  return (
    <>
      <div className='toggle-container'>
        <h3 id='toggle-description'>
          See how sentences unfold differently with{" "}
          <span className={textColorToggle ? "text-inactive" : "text-active"}>
            right
          </span>{" "}
          and with{" "}
          <span className={textColorToggle ? "text-active" : "text-inactive"}>
            left
          </span>{" "}
          homonymous hemianopsia
        </h3>
        <div className='toggle-labels-container'>
          <p className={textColorToggle ? "text-inactive" : "text-active"}>
            right
          </p>
          <div className='toggle-switch'>
            <input type='checkbox' id='switch' onChange={toggleOverlaySide} />
            <label htmlFor='switch'>Toggle Overlay Left-Right</label>
          </div>
          <p className={textColorToggle ? "text-active" : "text-inactive"}>
            left
          </p>
        </div>
      </div>
      <div className='readContainer' onMouseMove={handleMouseMove}>
        <div className='overlay' style={overlayStyle}></div>
        <p>
          Keep your eyes on the prize — the mouse pointer, that is! Glide it
          under each word and let it lead you to the next line; that's how this
          simulation works. Toggle to see how sentences unfold differently with
          right and with left hemianopsia. Keep your eyes on the prize — the
          mouse pointer, that is! Glide it under each word and let it lead you
          to the next line; that's how this simulation works. Toggle to see how
          sentences unfold differently with right and with left hemianopsia.
        </p>
        <p>
          Keep your eyes on the prize — the mouse pointer, that is! Glide it
          under each word and let it lead you to the next line; that's how this
          simulation works. Toggle to see how sentences unfold differently with
          right and with left hemianopsia. Keep your eyes on the prize — the
          mouse pointer, that is! Glide it under each word and let it lead you
          to the next line; that's how this simulation works. Toggle to see how
          sentences unfold differently with right and with left hemianopsia.
        </p>
        <p>
          Keep your eyes on the prize — the mouse pointer, that is! Glide it
          under each word and let it lead you to the next line; that's how this
          simulation works. Toggle to see how sentences unfold differently with
          right and with left hemianopsia. Keep your eyes on the prize — the
          mouse pointer, that is! Glide it under each word and let it lead you
          to the next line; that's how this simulation works. Toggle to see how
          sentences unfold differently with right and with left hemianopsia.
        </p>
        <p>
          Keep your eyes on the prize — the mouse pointer, that is! Glide it
          under each word and let it lead you to the next line; that's how this
          simulation works. Toggle to see how sentences unfold differently with
          right and with left hemianopsia. Keep your eyes on the prize — the
          mouse pointer, that is! Glide it under each word and let it lead you
          to the next line; that's how this simulation works. Toggle to see how
          sentences unfold differently with right and with left hemianopsia.
        </p>
      </div>
    </>
  );
};

export default Read;
