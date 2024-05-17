import React, { useRef, useState, useEffect } from "react";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login: React.FC<{ setToken: (token: string) => void }> = ({
  setToken,
}) => {
  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const userRef = useRef<HTMLInputElement | null>(null);

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === matchPwd);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, matchPwd]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "admin" && password === "Rakesh1234!") {
      const token = "Token created";
      localStorage.setItem("token", token);
      setToken(token);
      setSuccess(true);
    } else {
      setErrMsg("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>Login</h2>
      {errMsg && <p style={{ color: "red" }}>{errMsg}</p>}
      {success && <p style={{ color: "green" }}>Login successful!</p>}
      <form
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="username" style={{ padding: "5px", textAlign: "left" }}>
          Username:
          <input
            className="form-control"
            style={{ width: "300px" }}
            id="username"
            ref={userRef}
            autoComplete="off"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <span
            style={{
              display: userFocus && username && !validName ? "block" : "none",
              color: "#FF0000",
              fontSize: "14px",
            }}
          >
            Invalid username
          </span>
        </label>
        <label htmlFor="password" style={{ padding: "5px", textAlign: "left" }}>
          Password:
          <input
            className="form-control"
            style={{ width: "300px" }}
            id="password"
            type="password"
            required
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <span
            style={{
              display: pwdFocus && !validPwd ? "block" : "none",
              color: "#FF0000",
              fontSize: "14px",
            }}
          >
            Invalid password
          </span>
        </label>
        <label
          htmlFor="confirm_password"
          style={{ padding: "5px", textAlign: "left" }}
        >
          Confirm Password:
          <input
            className="form-control"
            style={{ width: "300px" }}
            id="confirm_password"
            type="password"
            required
            placeholder="Re-enter the Password"
            value={matchPwd}
            onChange={(e) => setMatchPwd(e.target.value)}
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <span
            style={{
              display: matchFocus && matchPwd && !validMatch ? "block" : "none",
              color: "#FF0000",
              fontSize: "14px",
            }}
          >
            Passwords do not match
          </span>
        </label>
        <button
          className="btn btn-secondary"
          type="submit"
          disabled={!validName || !validPwd || !validMatch}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
