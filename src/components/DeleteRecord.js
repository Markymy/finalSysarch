import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const styles = {
  pageContainer: {
    backgroundImage: "url('https://www.beachfrontblissphuket.com/wp-content/uploads/2022/04/Parking-101-Creating-the-Perfect-Car-Park.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    margin: "0 auto",
  },
  container: {
    width: "400px",
    margin: "0 auto",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
};

function DeleteRecord() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (email === '') {
      setErrorMessage('Please enter the email of the record to delete.');
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:8000/delete/${email}`);

      setEmail('');
      setErrorMessage('');

      alert('User deleted successfully.');
    } catch (error) {
      console.error('Error deleting record:', error);
      setErrorMessage('Failed to delete record. Please try again.');
    }
  };

  return (
    <Container>
      <div style={styles.pageContainer}>
        <div style={styles.container}>
          <div className="row">
            <div className="col-sm-12">
              <h2 className="heading" style={styles.heading}>
                DELETE ACCOUNT
              </h2>
              {errorMessage && <div className="error">{errorMessage}</div>}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    style={styles.input}
                  />
                </Form.Group>

                <Button
                  variant="danger"
                  type="submit"
                  style={styles.button}
                >
                  Delete Record
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default DeleteRecord;
