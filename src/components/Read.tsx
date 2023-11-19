import React, { useEffect, useRef, useState } from "react";
import "./Read.css";
import customCursorImg from "../assets/purple-dash-96px.png";
// https://icons8.com/icons/set/dash to change dash color

const Read = () => {
  const [cursorX, setCursorX] = useState(0);
  // overLayOnLeft set to false to start with the overlay on the right
  const [overlayOnLeft, setOverlayOnLeft] = useState(false);
  const [textColorToggle, setTextColorToggle] = useState(false);
  const [isCursorOverContainer, setIsCursorOverContainer] = useState(false);
  const [customCursorPos, setCustomCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorX(e.clientX);
    setCustomCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleContainerMouseEnter = () => {
    setIsCursorOverContainer(true);
  };

  const handleContainerMouseLeave = () => {
    setIsCursorOverContainer(false);
  };

  // Custom cursor style
  const customCursorStyle: React.CSSProperties = {
    position: "fixed",
    left: `${customCursorPos.x - 48}px`,
    top: `${customCursorPos.y - 48}px`,
    pointerEvents: "none",
    zIndex: 9999,
    display: isCursorOverContainer ? "block" : "none", // Only display when cursor is over the container
    width: "96px",
    height: "96px",
    backgroundImage: `url(${customCursorImg})`,
  };

  useEffect(() => {
    const container = document.querySelector(".read-sim-container");

    if (container) {
      container.addEventListener("mouseenter", handleContainerMouseEnter);
      container.addEventListener("mouseleave", handleContainerMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", handleContainerMouseEnter);
        container.removeEventListener("mouseleave", handleContainerMouseLeave);
      };
    }
  }, []);

  const overlayStyle: React.CSSProperties = overlayOnLeft
    ? {
        position: "absolute", // Position the overlay relative to the container
        width: `min(${cursorX}px, 100%)`, // Limit the width to the parent's width
        left: 0,
        top: 0, // Ensure it covers from the top of the container
        bottom: 0, // Stretch to the bottom of the container
      }
    : {
        position: "absolute",
        width: `calc(100% - ${cursorX}px)`,
        left: `${cursorX}px`,
        top: 0,
        bottom: 0,
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

      <div className='read-sim-container' onMouseMove={handleMouseMove}>
        <div className='overlay' style={overlayStyle}></div>
        <div className='custom-cursor' style={customCursorStyle}></div>
        <h1 id='read-title'>Read</h1>
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
