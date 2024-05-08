import React, { useReducer } from "react";

interface State {
  username: string;
  password: string;
  isLoading: boolean;
  error: string;
  isLoggedIn: boolean;
}

interface FieldAction {
  type: "login" | "success" | "error" | "logOut" | "field";
  payload?: string;
  fieldName?: string ;
}

function loginReducer(state: State, action: FieldAction) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName!]: action.payload,
      };
    }
    case "login": {
      return {
        ...state,
        error: "",
        isLoading: true,
      };
    }
    case "success": {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    }
    case "error": {
      return {
        ...state,
        error: "Incorrect username or password!",
        isLoggedIn: false,
        isLoading: false,
        username: "",
        password: "",
      };
    }
    case "logOut": {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
}
const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};
export default function LoginUseReducer() {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;
  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    dispatch({ type: "login" });
    try {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          if (username === "rakesh" && password === "1234") {
            resolve();
          } else {
            reject();
          }
        }, 3000);
      });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };
  return (
    <div className="App">
      <div className="login-container">
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button onClick={() => dispatch({ type: "logOut" })}>
              Log Out
            </button>
          </>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            {error && <p className="error">{error}</p>}
            <p>Please Login!</p>
            <h3 onCopy={(e) => console.log("onCopy", e.target)}>
              username: {username ? username : "rakesh"}
            </h3>
            <h3>password: {password ? password : "1234"}</h3>
            <input
              type="text"
              placeholder="username"
              value={username}
              onCopy={(e) => console.log("onCopy", e)}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "username",
                  payload: e.currentTarget.value,
                })
              }
            />
            <input
              onCopy={(e) => console.log("onCopy", e)}
              type="password"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  fieldName: "password",
                  payload: e.currentTarget.value,
                })
              }
            />
            <button className="submit" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
