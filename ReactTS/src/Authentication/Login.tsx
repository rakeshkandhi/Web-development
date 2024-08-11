import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/login.css";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login: React.FC<{ setToken: (token: string) => void }> = ({
  setToken,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState(false);
  const [validName, setValidName] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const userRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "admin" && password === "Rakesh1234!") {
      const token = "Token created";
      localStorage.setItem("token", token);
      setToken(token);
      setSuccess(true);
      navigate("/home");
    } else {
      setErrMsg("Invalid username or password");
    }
  };

  return (
    <div className="login-parent-container">
      <div className="login-container">
        <h2>Login</h2>
        {errMsg && (
          <p className="error-message" aria-live="assertive">
            {errMsg}
          </p>
        )}
        {success && (
          <p className="success-message" aria-live="assertive">
            Login successful!
          </p>
        )}
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username:
            <input
              id="username"
              ref={userRef}
              autoComplete="off"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {!validName && username && (
              <span className="error-text">Invalid username</span>
            )}
          </label>
          <label htmlFor="password">
            Password:
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {!validPwd && password && (
              <span className="error-text">Invalid password</span>
            )}
          </label>
          <button type="submit" disabled={!validName || !validPwd}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
