import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ onlogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     try {
  //       const response = await axios.post(
  //         "http://localhost:5000/api/login",
  //         { username, password },
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             "Access-Control-Allow-Origin": "*", // Allow requests from all origins
  //             "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE", // Allow specific HTTP methods
  //           },
  //         }
  //       );

  //       const token = response.data.token;

  //       localStorage.setItem("token", token);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Allow requests from all origins
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE", // Allow specific HTTP methods
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        localStorage.setItem("token", token);
        navigate("/protected");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container fluid className="loginformpage">
        <Row className="justify-content-center">
          <Col xs={6} className="text-center" style={{ flexGrow: 1 }}>
            <div className="formstyleloginpage">
              <h1 style={{ marginBottom: "20px" }}>Log in</h1>
              <form action="" onSubmit={handleSubmit}>
                <div className="username">
                  {/* <label className="p-3">Username</label> */}
                  <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Enter your username"
                  />
                </div>
                <div className="password">
                  {/* <label htmlFor="" className="p-3">
                    Password
                  </label> */}
                  <input
                    style={{ color: "F8F8FB" }}
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter Your Password"
                  />
                </div>
                <button type="submit" className="loginformsubmitbutton">
                  Submit
                </button>
                {loginError && <p>Invalid username or password</p>}
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
