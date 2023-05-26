import React from "react";

const Logout = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <>
      <button style={{ color: "white" }} onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Logout;
