import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeleteRecord from "./components/DeleteRecord"
import ChangePassword from "./components/ChangePassword"
import React, { useState, useEffect } from "react";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/delete" element={<DeleteRecord/>}/>
          <Route path="/change" element={<ChangePassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;