import React, { useState } from "react";
import "./DrawButton.css";

const DrawButton: React.FC = () => {
  const ideas = ["Idea 1", "Idea 2", "Idea 3"];
  const [currentIdea, setCurrentIdea] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const pickRandomIdea = () => {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    setCurrentIdea(ideas[randomIndex]);
  };

  const handleFocus = () => setIsFocused(true);

  return (
    <div>
      <button
        aria-label='Generate a random drawing idea'
        className={`draw-button ${isFocused ? "focus-visible" : ""}`}
        onClick={pickRandomIdea}
        onFocus={handleFocus}
      >
        Random drawing idea
      </button>
      <p>{currentIdea}</p>
    </div>
  );
};

export default DrawButton;
