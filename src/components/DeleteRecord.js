import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MDBFooter, MDBContainer} from 'mdb-react-ui-kit';

const styles = {
  pageContainer: {
    backgroundImage: "url('data:image/png;base64,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')",
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
const footerStyle = {
  backgroundColor: 'white',
};

function DeleteRecord() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/home");
  };
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
                <Button
                  onClick={handleButtonClick}
                  style={styles.button}
                >
                  Home
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <MDBFooter className="text-center py-3" style={footerStyle}>
        <MDBContainer>
          <p className="mb-0">
            &copy; 2023 Yezzir Book Store. All rights reserved.
          </p>
        </MDBContainer>
      </MDBFooter>
    </Container>
  );
}

export default DeleteRecord;
