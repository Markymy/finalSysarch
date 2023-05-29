import React, { useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';

function ChangePassword() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form inputs
    if (password === '') {
      setErrorMessage('Please enter your password.');
      return;
    }

    if (email === '') {
      setErrorMessage('Please enter your email.');
      return;
    }

    try {
      // Call the API to update the user's information
      const response = await axios.put(`http://localhost:8000/update/${email}`, {
        password: password,
      });

      // Reset the form fields
      setPassword('');
      setEmail('');
      setErrorMessage('');
      alert(response.data);
      setSuccessMessage('User information updated successfully.');
    } catch (error) {
      // Handle the error
      console.error('Error updating user information:', error);
      setErrorMessage('Failed to update user information. Please try again.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <div className="col-sm-4">
        <Card>
          <Card.Body>
            <h2>Update User Information</h2>
            {errorMessage && <div className="error">{errorMessage}</div>}
            {successMessage && <div className="success">{successMessage}</div>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}

export default ChangePassword;
