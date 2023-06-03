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


function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  const handleSearch = () => {
    navigate("/job");
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://outwiths.com/uploads/resource/43/medium/searching-for-a-new-job-1080x720_medium-1080x720.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "calc(100vh - 60px)", 
    backgroundColor: "yellow",
  };

  return (
    <div className="homepage">
      <MDBNavbar expand="lg" dark bgColor="dark">
        <MDBContainer>
          <MDBNavbarNav className="justify-content-end">
            <MDBNavbarItem>
              <MDBNavbarLink onClick={handleSearch}>Search Job</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={handleButtonClick}>Logout</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBContainer>
      </MDBNavbar>

      <div style={backgroundStyle}>
      </div>
    </div>
  );
}

export default Home;