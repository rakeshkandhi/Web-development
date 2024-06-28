import React from "react";
import { useNavigate } from "react-router-dom";
const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>404 Page not found</h1>
        <p>
          <h3>
            <strong>Error:</strong>
          </h3>
          <h4>The page you are looking for is not found/invalid. Please return home</h4>
        </p>
        <button className="btn btn-dark" onClick={() => navigate(-1)}>
          Goback
        </button>
      </div>
    </>
  );
};

export default PageNotFound;
