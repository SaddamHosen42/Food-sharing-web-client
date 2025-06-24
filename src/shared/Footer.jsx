import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";

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
      Manage My Foods
    </NavLink>
    <NavLink
      to="/food-request"
      className={({ isActive }) =>
        isActive ? " underline  text-yellow-500" : ""
      }
    >
      My Food Request
    </NavLink>
  </>
);
const Footer = () => {
  return (
    <div className="mt-20 ">
      <footer className="footer sm:footer-horizontal bg-gray-800 text-neutral-content p-10">
        <div className="max-w-xs">
          <img
            src="https://i.ibb.co/8DwFHD4r/Food-logo-removebg.png"
            className="w-60 h-15"
          />
          <p>
            FoodBridge connects surplus food with people in need — reducing
            waste, spreading hope.
          </p>
        </div>
        <nav>
          <h6 className="footer-title">Useful Links</h6>
          {links}
        </nav>
        <div>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover" href="#">Terms of use</a>
          <a className="link link-hover" href="#">Privacy policy</a>
          <a className="link link-hover" href="#">Cookie policy</a>
        </div>
        <div>
          <h6 className="footer-title">Follow Us</h6>
          <div className="flex gap-4 text-3xl">
            <a href="https://www.linkedin.com/in/saddam-hosen/" target="_blank"><FaLinkedin /></a>
            <a href="https://www.facebook.com/saddamhosen4" target="_blank"><FaFacebook /></a>
            <a href="https://github.com/SaddamHosen42" target="_blank"><FaGithub /></a>
          </div>
        </div>
      </footer>
      <footer className="text-center py-6 bg-amber-500 text-white text-sm">
        © {new Date().getFullYear()} FoodBridge. All rights reserved.
      </footer>
    </div>
  );
};

export default Footer;
