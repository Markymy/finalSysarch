import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

const styles = {
  pageContainer: {
    backgroundImage: "url('https://ichef.bbci.co.uk/images/ic/1200x675/p08j8hmv.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Set the minimum height to full viewport height
  },
  container: {
    width: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    flex: 1, // Expand container to fill remaining vertical space
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: '10px',
  },
  submitButton: {
    width: '50%',
    marginTop: '20px',
  },
};

const footerStyle = {
  backgroundColor: 'white',
};

function ChangePassword() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home');
  };
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '') {
      setErrorMessage('Please enter your email or username.');
      return;
    }

    if (currentPassword === '') {
      setErrorMessage('Please enter your current password.');
      return;
    }

    if (newPassword === '') {
      setErrorMessage('Please enter a new password.');
      return;
    }

    if (confirmPassword === '') {
      setErrorMessage('Please confirm your new password.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('New password and confirm password do not match.');
      return;
    }

    try {
      const response = await axios.put(`http://localhost:8000/update/${email}`, {
        newPassword: newPassword,
      });

      setEmail('');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setErrorMessage('');

      alert('User updated successfully.');
    } catch (error) {
      console.error('Error updating password:', error);
      setErrorMessage('Failed to update password. Please try again.');
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={6}>
              <h2 className="text-center mb-4">Update User</h2>
              {errorMessage && <div className="text-danger text-center mb-3">{errorMessage}</div>}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email/Username</Form.Label>
                  <Form.Control
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group controlId="formCurrentPassword">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Current password"
                  />
                </Form.Group>
                <Form.Group controlId="formNewPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New password"
                  />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" className="w-100 mt-4">
                    Update User Info
                  </Button>
                </div>
                <div>
                  <Button variant="primary" type="submit" className="w-100 mt-4" onClick={handleButtonClick}>
                    Home
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <MDBFooter className="text-center py-3" style={footerStyle}>
        <MDBContainer>
          <p className="mb-0">
            &copy; 2023 Yezzir Book Store. All rights reserved.
          </p>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}

export default ChangePassword;
