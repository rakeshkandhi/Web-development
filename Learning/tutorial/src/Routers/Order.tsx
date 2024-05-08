import { useNavigate } from "react-router-dom";
import React from "react";

const Order: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Order page</h1>
      <p>Order confirmed</p>
      <button className="btn btn-dark" onClick={() => navigate(-1)}>
        Close the page
      </button>
    </div>
  );
};

export default Order;
