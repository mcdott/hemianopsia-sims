import React, { useState } from "react";
import "./Scratch.css";

function Scratch() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {/* Embedded Scratch Project */}
      <iframe
        src='//scratch.mit.edu/projects/embed/601127464/'
        allowFullScreen
        className='embedded-iframe'
      ></iframe>
      <button onClick={() => setModalOpen(true)}>Full Screen</button>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div className='fullscreen-modal'>
          <iframe
            src='//scratch.mit.edu/projects/embed/601127464/'
            allowFullScreen
            className='responsive-iframe'
          ></iframe>
          <button
            onClick={() => setModalOpen(false)}
            className='close-modal-button'
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Scratch;
