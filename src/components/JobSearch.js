import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

const styles = {
  pageContainer: {
    backgroundImage:
      "url('https://media.istockphoto.com/id/1141203331/photo/new-job-search-recruitment-career.jpg?s=612x612&w=0&k=20&c=nLBlb1gN0F-TwWKBqTigrZe72_zGigOxbirtCeIcFXU=')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '400px',
    padding: '30px',
    border: '5px solid #357e78',
    borderRadius: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#294442',
    color: 'white',
    cursor: 'pointer',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  },
};
const footerStyle = {
  backgroundColor: 'white',
};

function DeleteRecord() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/home');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <div className="row">
          <div className="col-sm-12">
            <h2 className="heading" style={styles.heading}>
              SEARCH JOB
            </h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Control
                  type="text"
                  placeholder="Search Job"
                  style={styles.input}
                />
              </Form.Group>

              <Button variant="danger" type="submit" style={styles.button}>
                Search Job
              </Button>
              <Button onClick={handleButtonClick} style={styles.button}>
                Home
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteRecord;
