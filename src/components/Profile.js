import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UpdateUserForm = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/home");
  };
  const [user, setUser] = useState({ id: '', name: '', email: '' });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/users/collections'); 
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);
  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  const handleUpdate = async () => {
    try {
      await axios.put(`/users/${user.id}`, {
        password: user.password,
        newPassword: user.newPassword, 
        vehicle: user.vehicle, 
        plate: user.plate, 
      });
      console.log('User updated successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete('https://ap-southeast-1.aws.data.mongodb-api.com/app/data-fdtlv/endpoint/data/v1');
      console.log('All users deleted successfully');

    } catch (error) {
      console.error(error);
    }
  };
  
  
  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Update User</h1>
        <form>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input
            style={styles.input}
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <label style={styles.label} htmlFor="password">Password:</label>
          <input
            style={styles.input}
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />

          <button style={styles.button} onClick={handleDelete}>
            Delete All Users
          </button>
          <button style={styles.button} type="button" onClick={handleUpdate}>
            Update User
          </button>
          <button style={styles.button} type="button" onClick={handleGoHome}>
           Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserForm;

const styles = {
  pageContainer: {
    backgroundImage: "url('https://i.pinimg.com/564x/7a/2f/0a/7a2f0a165bb0c1be11d2ad458f0edd51.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  },

  container: {
    width: "400px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.6)"
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "5px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
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
};
