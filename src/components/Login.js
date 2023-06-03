import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/signup");
  };
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/", {
        email,
        password,
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
    backgroundImage:
      'url("https://ritecareer.ca/wp-content/uploads/2021/10/jobsearchinfographics-scaled.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    backgroundColor: "yellow",
  };

  return (
    <div style={backgroundStyle}>
      <MDBContainer className="p-3 my-5 d-flex flex-column align-items-center">
        <form style={{ width: "300px" }}>
          <MDBInput
            label="Email address"
            id="form1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <MDBInput
            label="Password"
            id="form2"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remember me
              </label>
            </div>
          <p>Forgot Password</p>
          </div>

          <MDBBtn className="w-100 mb-4" onClick={submit}>
            Sign in
          </MDBBtn>
          <MDBBtn className="w-100 mb-4" onClick={handleButtonClick}>
            Register
          </MDBBtn>

          <div className="text-center">

            <div className="d-flex justify-content-center">
              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>

              <MDBBtn
                tag="a"
                color="none"
                className="m-1"
                style={{ color: "#1266f1" }}
              >
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
          </div>
        </form>
      </MDBContainer>
    </div>
  );
}

export default Login;
