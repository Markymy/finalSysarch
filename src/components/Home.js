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
} from "mdb-react-ui-kit";
import Profile from "./Profile";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  const handleOtherPage = () => {
    navigate("/profile");
  };

  const backgroundStyle = {
    backgroundImage: 'url("https://wallpaperaccess.com/full/842785.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    backgroundColor: "yellow",
  };

  return (
    <div className="homepage">
      <div style={backgroundStyle}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              SpotWise Parking Management System
            </Link>
          </div>
        </nav>
        <MDBContainer fluid className="d-flex flex-column align-items-center justify-content-center">
          <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    We are glad that you are here, {location.state?.id || ""}.
                  </p>
                  <br></br>
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Hope you are doing well. Have a good day!
                  </p>
                  <form className="d-flex flex-column align-items-center">
                    <button
                      className="btn btn-primary my-2"
                      onClick={handleButtonClick}
                    >
                      Logout
                    </button>
                    <button 
                     className="btn btn-primary my-2"
                    onClick={handleOtherPage}>Profile</button>
                  </form>
                  
                </MDBCol>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage
                    src="https://cdn.luxe.digital/media/20230103133024/most-expensive-cars-2023-list-luxe-digital.jpg"
                    fluid
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Home;
