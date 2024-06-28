import React from "react";
import { useNavigate } from "react-router-dom";
import ChildProps from "./../Data_passing/ChildProps";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <p>This is our Home page.</p>
      <p>Home page content goes here. Be creative! and keep it simple.</p>
      <button
        className="btn btn-dark"
        onClick={() => navigate("/order-confirmed", { replace: false })}
      >
        Click to order
      </button>
      <div>
        <ChildProps>
          <h1>This is the example of the child props.</h1>
        </ChildProps>
      </div>
    </>
  );
};

export default Home;
