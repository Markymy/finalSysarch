import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/signup", {
                email,
                password,
                firstName,
                lastName,
                contact,
                address,
            })
            .then(res => {
                if (res.data === "exist") {
                    alert("User already exists");
                } else if (res.data === "notexist") {
                    navigate("/signup", { state: { id: email } });
                    alert("User registered successfully");
                }
            })
            .catch(e => {
                alert("Wrong details. Please try again.");
                console.log(e);
            });
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        SpotWise Parking Management System
                    </Link>
                    <MDBNavbarItem>
              <MDBNavbarLink onClick={handleDelete}>Delete</MDBNavbarLink>
            </MDBNavbarItem>
                </div>
            </nav>
            <MDBContainer fluid>
                <MDBCard className="text-black m-5" style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md="10" lg="6" className="order-2 order-lg-1 d-flex flex-column align-items-center">
                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size="lg" />
                                    <MDBInput
                                        label="Your Email"
                                        id="form2"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size="lg" />
                                    <MDBInput
                                        label="Password"
                                        id="form3"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size="lg" />
                                    <MDBInput
                                        label="First Name"
                                        id="form4"
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="lock me-3" size="lg" />
                                    <MDBInput
                                        label="Last Name"
                                        id="form6"
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size="lg" />
                                    <MDBInput
                                        label="Contact"
                                        id="form7"
                                        type="text"
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size="lg" />
                                    <MDBInput
                                        label="Address"
                                        id="form8"
                                        type="text"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <MDBIcon fas icon="envelope me-3" size="lg" />
                                </div>
                                <div className="mb-4">
                                    <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Accept terms and conditions" />
                                </div>
                                <MDBBtn className="mb-4" size="lg" onClick={submit}>
                                    Register
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol md="10" lg="6" className="order-1 order-lg-2 d-flex align-items-center">
                                <MDBCardImage src="https://cdn.luxe.digital/media/20230103133024/most-expensive-cars-2023-list-luxe-digital.jpg" fluid />
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </div>
    );
}

export default Login;
