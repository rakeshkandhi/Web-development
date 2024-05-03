import React from "react";
import UserGreeting from "./components/UserGreeting";

const App: React.FC = () => {
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Rakesh kandhi" />
    </>
  );
};

export default App;
