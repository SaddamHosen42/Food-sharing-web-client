import React from 'react';
import { Link, NavLink } from 'react-router';


const links = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? " underline text-green-700" : ""
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/plants"
      className={({ isActive }) =>
        isActive ? " underline  text-green-700" : ""
      }
    >
      All Plants
    </NavLink>
    <NavLink
      to="/add-plant"
      className={({ isActive }) =>
        isActive ? " underline  text-green-700" : ""
      }
    >
      Add Plant
    </NavLink>
    <NavLink
      to="/my-plants"
      className={({ isActive }) =>
        isActive ? " underline  text-green-700" : ""
      }
    >
      My Plants
    </NavLink>
  </>
);
const NavBar = () => {
    return (
   <div className="navbar justify-between bg-green-50 shadow-sm px-8 fixed top-0 z-10 w-full ">
      <div className="flex items-center">
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
            className="menu menu-sm dropdown-content bg-green-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className=" hidden md:flex gap-1 items-center">
          <img src="https://i.ibb.co/7JzLqB4t/logo.png" className="w-50 h-15" />
        </Link>
        
      </div>
      <div className="flex gap-10">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal text-lg space-x-5">{links}</ul>
        </div>
      </div>
    </div>
    );
};

export default NavBar;