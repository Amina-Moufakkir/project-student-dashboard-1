import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext"


import "./Navbar.css";

const Navbar = () => {
  const { logout, isPending } = useLogout();
  const { user } = useAuthContext()

  return (
    <div className="navbar">
      <ul>
        {!user && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
        {user && (
          <li>
            {!isPending && <button className="btn-logout" onClick={logout}>Logout</button>}
            {isPending && <button className="btn-logout" disabled>Logging out...</button>}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
