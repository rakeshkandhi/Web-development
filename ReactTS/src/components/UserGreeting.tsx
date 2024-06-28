import React from "react";

interface Props {
  username?: string;
  isLoggedIn: boolean;
}

const UserGreeting: React.FC<Props> = (props) => {
  return props.isLoggedIn ? (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  ) : (
    <h2 className="login-prompt">Please Login to continue</h2>
  );
};

export default UserGreeting;
