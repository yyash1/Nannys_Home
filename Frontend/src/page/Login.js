// Login.js

import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/images/background.png";
import Logo from "../assets/images/logo.png";
import ForgotPasswordForm from "./ForgotPasswordForm"; // Import the ForgotPasswordForm component

const Login = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [showForgotPassword, setShowForgotPassword] = useState(false); // State to toggle ForgotPasswordForm visibility

  return (
    <div
      className="sign-in__wrapper"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Overlay */}
      <div className="sign-in__backdrop"></div>
      {/* Form */}
      <Form className="shadow-none p-4 bg-light rounded">
        {/* Header */}
        <img
          className="img-thumbnail mx-auto d-block mb-2"
          src={Logo}
          alt="logo"
        />
        <div className="h4 mb-2 text-center">Sign In</div>
        <Form.Group className="mb-2" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={inputUsername}
            placeholder="Username"
            onChange={(e) => setInputUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={(e) => setInputPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <Button className="w-100" variant="primary" type="submit">
          Log In
        </Button>
        <div className="d-grid justify-content-space-between">
          <Button
            className="text-muted px-0"
            variant="link"
            onClick={() => setShowForgotPassword(true)} // Show ForgotPasswordForm when clicked
          >
            Forgot password?
          </Button>
          <Button className="text-muted px-0" variant="link">
            <Link to="/signup">Sign up</Link>
          </Button>
        </div>
      </Form>
      {/* Show ForgotPasswordForm when state is true */}
      {showForgotPassword && <ForgotPasswordForm />}
      {/* Footer */}
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        Made by Yash Dharmik | &copy;2024
      </div>
    </div>
  );
};

export default Login;
