import { useState } from "react";
import axios from "axios";

const Login = ({ onlogin }) => {
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
      const response = await fetch("http://localhost:5000/api/login", {
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
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <h1>Login page</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Submit</button>
        {loginError && <p>Invalid username or password</p>}
      </form>
    </>
  );
};

export default Login;
