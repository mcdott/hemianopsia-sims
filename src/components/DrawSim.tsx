import React, { useEffect, useState } from "react";
import "./DrawSim.css";
import { useLocation } from "react-router-dom";
import DrawingCanvas from "./DrawingCanvas";

const DrawSim = () => {
  const [cursorX, setCursorX] = useState(0);
  const [overlayOnLeft, setOverlayOnLeft] = useState(false);
  const [textColorToggle, setTextColorToggle] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateCanvasSize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateCanvasSize);
    updateCanvasSize(); // Set initial size

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  // Scroll to top on page load
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollToTop) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Handle mouse movement to update cursor position to position the overlay
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorX(e.clientX);
  };

  const overlayStyle: React.CSSProperties = overlayOnLeft
    ? {
        position: "absolute",
        width: `min(${cursorX}px, 100%)`,
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "white",
      }
    : {
        position: "absolute",
        width: `calc(100% - ${cursorX}px)`,
        left: `${cursorX}px`,
        top: 0,
        bottom: 0,
        backgroundColor: "white",
      };

  const toggleOverlaySide = () => {
    setOverlayOnLeft(!overlayOnLeft);
    setTextColorToggle(!textColorToggle);
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

      <div className='draw-sim-container' onMouseMove={handleMouseMove}>
        <div className='overlay' style={overlayStyle}></div>
        <DrawingCanvas />
      </div>
    </>
  );
};

export default DrawSim;
