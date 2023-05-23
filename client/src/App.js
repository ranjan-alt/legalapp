import logo from './logo.svg';
import './App.css';
import AdminPanel from './components/AdminPanel';
import Login from './components/LoginPage';
import { useState } from 'react';

function App() {
  const[isLoggedIn , setIsLoggedIn] =useState(false)

  const handleLogin =()=>{
    setIsLoggedIn(true)
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {isLoggedIn? (<AdminPanel/>):(<Login onlogin={handleLogin}/>)}
     
    </div>
  );
}

export default App;
