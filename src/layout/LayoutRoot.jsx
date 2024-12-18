import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutRoot = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <p>Footer</p>
    </>
  );
};

export default LayoutRoot;
