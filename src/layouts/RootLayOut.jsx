import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Footer from "../shared/Footer";

const RootLayOut = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-50">
        <NavBar></NavBar>
      </header>
      <main className="pt-20"> 
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayOut;
