import React, { useState } from "react";

const DrawButton: React.FC = () => {
  const ideas = ["Idea 1", "Idea 2", "Idea 3"];
  const [currentIdea, setCurrentIdea] = useState<string>("");

  const pickRandomIdea = () => {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    setCurrentIdea(ideas[randomIndex]);
  };

  return (
    <div>
      <button
        aria-label='Generate a random drawing idea'
        className='px-8 py-1 text-white bg-blue-500 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300'
        onClick={pickRandomIdea}
      >
        Random drawing idea
      </button>
      <p>{currentIdea}</p>
    </div>
  );
};

export default DrawButton;
