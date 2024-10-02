import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login-form.css";
import userService from "../../service/user-service";
import MessageModal from "../message-modal/message-modal";

import userAuthService from "../../service/user-auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [message, setMessage] = useState("");

  const handleShow = (msg) => {
    setMessage(msg);
    setModalShow(true);
  };

  const handleHide = () => {
    setModalShow(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await userService.loginUser(email, password);
      console.log(data);
      

      if (data.success) {
        // Assuming data.accessToken and data.tokenType are present in the response
        userAuthService.setUser({
          email: email,
          accessToken: data.accessToken,
          tokenType: data.tokenType,
        });

        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            email: email,
            accessToken: data.accessToken,
            tokenType: data.tokenType,
          })
        );
        window.location.href = "/";
      } else {
        handleShow(data.message);
        console.error("Server Response:", data.serverResponse); // Log server response for debugging
      }
    } catch (error) {
      handleShow("An error occurred during login. Please try again.");
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin} className="login-container">
        <h4>Login</h4>
        <div className="mb-3 input-group">
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3 input-group">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <p className="signup-link">
          Don't have an account yet? <Link to="/signup">Sign Up</Link>
        </p>
        <button type="submit" className="border-button">
          Login
        </button>
      </form>

      <MessageModal show={modalShow} onHide={handleHide} message={message} />
    </>
  );
};

export default LoginForm;
