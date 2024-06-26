import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Nav } from "react-bootstrap";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Nav.Link onClick={() => logout()} id="qsLogoutBtn" className="nav-item">
      Log Out
    </Nav.Link>
  );
};

export default LogoutButton;
