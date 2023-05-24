import { useState } from "react"
import axios from "axios";

const Login =({onlogin})=>{
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[loginError, setLoginError] =useState(false)


    const handleUsernameChange =(e)=>{
        setUsername(e.target.value)
    } 

    const handlePasswordChange =(e)=>{
        setPassword(e.target.value)
    }

    const apiClient = axios.create({
        baseURL: "http://localhost:5000", // Replace with your server URL
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Allow requests from all origins
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE", // Allow specific HTTP methods
        },
      });


    const handleSubmit = async (username,password)=>{
        // e.preventDefault()

        // if(username ==="admin" && password ==="admin"){
        //     onlogin()
        // }else{
        //     setLoginError(true)
        // }


        // send login request to server
        try{
            const response = await apiClient.post("/api/login", {username,password});
            const token = response.data.token

            //store the token in local storage or any other cure storage

            localStorage.setItem("token", token)
        }catch(error){
            console.log(error)
        }
    }
    return(
        <>
        <h1>Login page</h1>
        <form action="" onSubmit={handleSubmit}>
            <div>
            <label>Username</label>
            <input type="text" value={username} onChange={handleUsernameChange}  />
            </div>
            <div>
                <label htmlFor="">Password</label>
        <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit">Submit</button>
            {loginError && <p>Invalid username or password</p>}
        </form>
        </>
    )
}

export default Login