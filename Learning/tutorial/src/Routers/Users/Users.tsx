import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

const Users: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get("filter") === "true";
  return (
    <>
      <div>
        <h2>User Details</h2>
      </div>
      <button
        className="btn btn-dark"
        onClick={() => setSearchParams({ filter: "true" })}
      >
        Show Active Users
      </button>
      <button className="btn btn-dark" onClick={() => setSearchParams({})}>
        Reset Filter
      </button>
      {isActive ? (
        <h5 className="text-success" style={{ marginTop: "20px" }}>
          Showing active users
        </h5>
      ) : (
        <h5 className="text-danger" style={{ marginTop: "20px" }}>
          Showing all users
        </h5>
      )}
      <Outlet />
    </>
  );
};

export default Users;
