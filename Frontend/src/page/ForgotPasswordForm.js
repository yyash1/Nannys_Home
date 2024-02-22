// ForgotPasswordForm.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send email to backend to trigger OTP sending logic
    try {
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      // Handle response
      if (response.ok) {
        // Show success message or redirect user to another page
        console.log('OTP sent successfully');
      } else {
        // Handle error response
        console.error('Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Send OTP
      </Button>
    </Form>
  );
};

export default ForgotPasswordForm;
