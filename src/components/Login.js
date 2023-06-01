import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBFooter
} from 'mdb-react-ui-kit';
import axios from 'axios';

const footerStyle = {
    backgroundColor: "white",
  };

function Login() {
    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/", {
                email,
                password
            });

            if (response.data === "exist") {
                history("/home", { state: { id: email } });
            } else if (response.data === "notexist") {
                alert("Wrong password");
            }
        } catch (error) {
            alert("Wrong details");
            console.log(error);
        }
    }

    const backgroundStyle = {
        backgroundImage: 'url("https://hips.hearstapps.com/hmg-prod/images/book-quotes-1531945007.jpg?crop=1.00xw:0.753xh;0,0.247xh&resize=1200:*")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        backgroundColor: 'yellow',
    };
    const backgroundPage ={
        width: "700px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "rgba(255, 255, 255, 0.6)", 

    };

    const textStyle = {
        fontWeight: 'bold',
        color: 'black'
    };

    return (
        <div style={backgroundStyle}>
            <div style={backgroundPage}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container">
                    <Link className="navbar-brand" to="/login" align= "center">
                    Yezzir Book Store
                    </Link>
                </div>
                
                
            </nav>

            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <form>
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Email address"
                        id="form1"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <MDBInput
                        wrapperClass="mb-4"
                        label="Password"
                        id="form2"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />

                    <div className="d-flex justify-content-between mx-3 mb-4">
                        <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
                        <a href="#!">Forgot password?</a>
                    </div>

                    <MDBBtn className="mb-4" onClick={submit}>
                        Sign in
                    </MDBBtn>

                    <div className="text-center">
                        <p>
                            Not a member? <Link to="/signup">Sign up</Link>
                        </p>

                        <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}>
                            <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon="facebook-f" size="sm" />
                            </MDBBtn>

                            <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon="twitter" size="sm" />
                            </MDBBtn>

                            <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon="google" size="sm" />
                            </MDBBtn>

                            <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
                                <MDBIcon fab icon="github" size="sm" />
                            </MDBBtn>
                        </div>
                    </div>
                </form>
            </MDBContainer>
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

export default Login;
