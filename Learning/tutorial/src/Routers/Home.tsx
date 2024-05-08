import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <p>This is our Home page.</p>
      <p>Home page content goes here. Be creative! and keep it simple.</p>
      <button
        className="btn btn-dark"
        onClick={() => navigate("/order-confirmed", { replace: false })}
      >
        Click to order
      </button>
    </div>
  );
};

export default Home;
