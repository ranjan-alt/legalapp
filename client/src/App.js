import logo from "./logo.svg";
import "./App.css";
import AdminPanel from "./components/AdminPanel";
import Login from "./components/LoginPage";
// import { Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";

function App() {
  // const[isLoggedIn , setIsLoggedIn] =useState(false)

  // const handleLogin =()=>{
  //   setIsLoggedIn(true)
  // }

  const isAuthenticated = !!localStorage.getItem("token");
  const location = useLocation();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login onLogin={() => window.location.reload()} />
            ) : (
              <Navigate to="/protected" />
            )
          }
        />
        <Route
          path="/protected"
          element={isAuthenticated ? <AdminPanel /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default Root;

// export default App;
