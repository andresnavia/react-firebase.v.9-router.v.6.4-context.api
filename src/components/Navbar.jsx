import { NavLink } from "react-router-dom";
import { UserContext, useUserContext } from "../context/UserContext";
import { useContext } from "react";

const Navbar = () => {
  const { user, setUser } = useUserContext();
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |
      {user && (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <button onClick={() => setUser(false)}>logout</button>
        </>
      )}
    </nav>
  );
};
export default Navbar;
