import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

const Demo: React.FC = () => {
const [token, setToken] = useState<string | null>(
  localStorage.getItem("token")
);


  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken !== token) {
      setToken(storedToken);
    }
  }, []);

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={
                token ? <Navigate to="/" /> : <Login setToken={setToken} />
              }
            />
            <Route
              path="/home"
              element={token ? <Home /> : <Navigate to="/" />}
            />
            <Route
              path="/contact"
              element={token ? <Contact /> : <Navigate to="/" />}
            />
            <Route
              path="/about"
              element={token ? <About /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default Demo;
