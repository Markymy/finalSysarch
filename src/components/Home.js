import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBFooter,
} from "mdb-react-ui-kit";
import Profile from "./Profile";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/login");
  };
  
  const handleButtonSingup = () => {
    navigate("/signup");
  };

  const handleDelete = () => {
    navigate("/delete");
  };

  const handleUpdate = () => {
    navigate("/change");
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "calc(100vh - 60px)", 
    backgroundColor: "yellow",
  };

  return (
    <div className="homepage">
      <MDBNavbar expand="lg" dark bgColor="dark">
        <MDBContainer>
          <MDBNavbarBrand href="/">Yezzir Book Store</MDBNavbarBrand>
          <MDBNavbarNav className="justify-content-end">
            <MDBNavbarItem>
              <MDBNavbarLink onClick={handleDelete}>Delete</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={handleUpdate}>Update</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink onClick={handleButtonSingup}>Join On Yezzir</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>

      <div style={backgroundStyle}>
      </div>

      <MDBFooter backgroundColor="light" className="text-center py-3">
        <MDBContainer>
          <p className="mb-0">
            &copy; 2023 Yezzir Book Store. All rights reserved. 
          </p>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}

export default Home;
