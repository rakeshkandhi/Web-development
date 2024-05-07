import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is our Home page.</p>
    </div>
  );
}
function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is our About Us page.</p>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>This is our Contact Us page.</p>
    </div>
  );
}
export const App: React.FC = () => {
  return (
    <>
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
