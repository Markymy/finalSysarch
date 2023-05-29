import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Profile from "./components/Profile"
import DeleteRecord from "./components/DeleteRecord"
import ChangePassword from "./components/ChangePassword"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/delete" element={<DeleteRecord/>}/>
          <Route path="/change" element={<ChangePassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;