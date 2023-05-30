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

  const handleDelete = () => {
    navigate("/delete");
  };

  const handleUpdate = () => {
    navigate("/change");
  };
  const backgroundStyle = {
    backgroundImage: 'url("https://i.nextmedia.com.au/News/crn-14_carpark_iStock-177136206.jpg")',
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
          <MDBCard className="text-black m-5" style={{ borderRadius: "25px", opacity: 0.9 }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p className="text-center h1 fw-plain mb-5 mx-1 mx-md-4 mt-4">
                    We are glad that you are here, {location.state?.id || ""}.
                  </p>
                  <br></br>
                  <p className="text-center h1 fw- mb-5 mx-1 mx-md-4 mt-4">
                    Hope you are doing well. Have a good day!
                  </p>
                  <form className="d-flex flex-column align-items-center">
                    <div className="d-flex">
                      <button
                        className="btn btn-primary my-2 mx-2"
                        onClick={handleButtonClick}
                      >
                        Logout
                      </button>
                      <button 
                        className="btn btn-primary my-2 mx-2"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                      <button 
                        className="btn btn-primary my-2 mx-2"
                        onClick={handleUpdate}
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </MDBCol>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage
                    src="https://i.nextmedia.com.au/News/crn-14_carpark_iStock-177136206.jpg"
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
