import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./context";
import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const logInHandler = (e) => {
    e.preventDefault();
    authCtx.logIn();
    navigate("/profile");
  };
  return (
    <>
      <div className="container">
        <h1>Login Page</h1>
        <form className="form-control" onSubmit={logInHandler}>
          <div>
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="Email"
              className="input-field"
              required
              ref={emailInputRef}
            />
          </div>
          <div>
            <label htmlFor="Pssword">Password</label>
            <input
              type="password"
              id="password"
              className="input-field"
              required
              ref={passwordInputRef}
            />
          </div>
          <div>
            <button className="btn">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
