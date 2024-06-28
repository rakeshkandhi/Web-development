import React from "react";
import { useParams } from "react-router-dom";

const UserDetails: React.FC = () => {
  const { userId } = useParams(); // useParams returns an object eg: { userId: '1' }
  const isValidId = Number.isInteger(Number(userId));
  console.log(isValidId);

  return (
    <div>
      {isValidId && (
        <>
          <h3>This is the user details page.</h3>
          <h4>
            <strong>User {userId}</strong>
          </h4>
        </>
      
      )}
    </div>

  );
};

export default UserDetails;
