import { useState } from "react"


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

    const handleSubmit =(e)=>{
        e.preventDefault()

        if(username ==="admin" && password ==="admin"){
            onlogin()
        }else{
            setLoginError(true)
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