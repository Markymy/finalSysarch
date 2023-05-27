import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateUserForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ id: '', name: '', email: '' });

  useEffect(() => {
    // Fetch user data from the server
    const fetchUser = async () => {
      try {
        const response = await axios.get('/users/1'); // Replace with the appropriate API endpoint for fetching a user by ID
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
  const handleOtherPage = () => {
    navigate("/deletePage");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/users/${user.id}`, user); // Replace with the appropriate API endpoint for updating a user by ID
      console.log('User updated successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={user.name} onChange={handleChange} />
        <br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={user.email} onChange={handleChange} />
        <br />

        <button className="btn btn-primary my-2" onClick={handleOtherPage}>
          Delete User
        </button>
        <button className="btn btn-primary my-2" type="submit">
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
