import React, { useContext} from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import ThemeToggle from "./ThemeToggle";


const links = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? " underline text-yellow-500" : ""
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/available-foods"
      className={({ isActive }) =>
        isActive ? " underline text-yellow-500" : ""
      }
    >
      Available Foods
    </NavLink>
    <NavLink
      to="/add-food"
      className={({ isActive }) =>
        isActive ? " underline  text-yellow-500" : ""
      }
    >
      Add Food
    </NavLink>
    <NavLink
      to="/my-foods"
      className={({ isActive }) =>
        isActive ? " underline  text-yellow-500" : ""
      }
    >
      My Foods
    </NavLink>
  </>
);
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("user", user);
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              text: "You have been successfully logged out.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong during logout.",
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <div className="navbar justify-between  shadow-lg px-8 fixed top-0 z-10 w-full bg-base-100">
      <div className=" navbar-start items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className=" hidden md:flex gap-1 items-center">
          <img
            src="https://i.ibb.co/8DwFHD4r/Food-logo-removebg.png"
            className="w-60 h-15"
          />
        </Link>
      </div>
      <div className="gap-10 navbar-center">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal text-lg space-x-5">{links}</ul>
        </div>
      </div>
      <div className="navbar-end space-x-3">
       <ThemeToggle></ThemeToggle>
        {user ? (
          <div className="relative group flex items-center gap-2">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-full ring ring-success ring-offset-base-100 ring-offset-2 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={
                    user.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                    
                />
                
              </div>
              
            </div>
            <button
              className="btn bg-yellow-500 hover:bg-yellow-600 btn-sm  text-white rounded-none"
              onClick={handleLogOut}
            >
              Logout
                <LuLogOut lg:size={20} />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div>
              <Link
                to="/login"
                className="btn btn-sm lg:btn-md btn-outline border-yellow-500 text-yellow-500 hover:bg-yellow-600  hover:text-white rounded-none"
              >
                Login
                <LuLogIn lg:size={20} />
              </Link>
            </div>
            <div>
              <Link
                to="/register"
                className="btn btn-sm lg:btn-md  bg-yellow-500 text-white hover:bg-yellow-600 rounded-none"
              >
                Register
                <LuLogIn lg:size={20} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
