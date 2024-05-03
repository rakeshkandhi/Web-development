import React from "react";
import "./Cards.css"; // Import the CSS file (external style)

const Cards: React.FC = () => {
  return (
    <div className="card">
      <img className="card-image"
        src="https://static.licdn.com/aero-v1/sc/h/9c8pery4andzj6ohjkjp54ma2"
        alt="Profile picture"
      />
      <h2 className="card-title">Rakesh</h2>
      <p className="card-subtitle">Software Developer Engineer </p>
    </div>
  );
};

export default Cards;
