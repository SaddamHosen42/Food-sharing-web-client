import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../shared/Footer";

const RootLayOut = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <Outlet></Outlet>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayOut;
