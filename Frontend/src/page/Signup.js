import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "./login.css";

import BackgroundImage from "../assets/images/background.png";
const Signup = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputMobileNo, setMobileNo] = useState("");

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
        <div className="h4 mb-2 text-center">Sign Up</div>
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
        <Form.Group className="mb-2" controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="Email"
            value={inputEmail}
            placeholder="alias@gmail.com"
            onChange={(e) => setInputEmail(e.target.value)}
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
        <Form.Group className="mb-2" controlId="ConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="Password"
            value={inputConfirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setInputConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="Address"
            value={inputAddress}
            placeholder="Address"
            onChange={(e) => setInputAddress(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="Mobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="tel"
            value={inputMobileNo}
            placeholder="Mobile No"
            onChange={(e) => setMobileNo(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-2" controlId="checkbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Register
        </Button>
      </Form>
      {/* Footer */}
      <div className="w-100 mb-2 position-absolute bottom-0 start-50 translate-middle-x text-white text-center">
        Made by Yash Dharmik | &copy;2024
      </div>
    </div>
  );
};
export default Signup;
