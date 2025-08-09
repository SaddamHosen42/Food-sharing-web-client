import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import ThemeToggle from "./ThemeToggle";

const publicLinks = (
  <>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "text-amber-500  underline underline-offset-4 decoration-2 decoration-amber-500 transition-all duration-300 px-3 py-2"
          : "text-base-content hover:text-amber-500 transition-all duration-300 font-medium hover:scale-105 transform px-3 py-2 rounded-lg"
      }
    >
      Home
    </NavLink>
    <NavLink
      to="/available-foods"
      className={({ isActive }) =>
        isActive
          ? "text-amber-500 underline underline-offset-4 decoration-2 decoration-amber-500 transition-all duration-300 px-3 py-2"
          : "text-base-content hover:text-amber-500 transition-all duration-300 font-medium hover:scale-105 transform px-3 py-2 rounded-lg"
      }
    >
      Available Foods
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive
          ? "text-amber-500  underline underline-offset-4 decoration-2 decoration-amber-500 transition-all duration-300 px-3 py-2"
          : "text-base-content hover:text-amber-500 transition-all duration-300 font-medium hover:scale-105 transform px-3 py-2 rounded-lg"
      }
    >
      About Us
    </NavLink>
  </>
);

const protectedLinks = (
  <>
    <NavLink
      to="/add-food"
      className={({ isActive }) =>
        isActive
          ? "text-amber-500  underline underline-offset-4 decoration-2 decoration-amber-500 transition-all duration-300 px-3 py-2"
          : "text-base-content hover:text-amber-500 transition-all duration-300 font-medium hover:scale-105 transform px-3 py-2 rounded-lg"
      }
    >
      Add Food
    </NavLink>
    <NavLink
      to="/my-foods"
      className={({ isActive }) =>
        isActive
          ? "text-amber-500  underline underline-offset-4 decoration-2 decoration-amber-500 transition-all duration-300 px-3 py-2"
          : "text-base-content hover:text-amber-500 transition-all duration-300 font-medium hover:scale-105 transform px-3 py-2 rounded-lg"
      }
    >
      Manage My Foods
    </NavLink>
    <NavLink
      to="/food-request"
      className={({ isActive }) =>
        isActive
          ? "text-amber-500 underline underline-offset-4 decoration-2 decoration-amber-500 transition-all duration-300 px-3 py-2"
          : "text-base-content hover:text-amber-500 transition-all duration-300 font-medium hover:scale-105 transform px-3 py-2 rounded-lg"
      }
    >
      My Food Request
    </NavLink>
  </>
);

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log("user", user);
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
            window.location.reload();
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
    <div className="w-full bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 dark:from-amber-900/20 dark:via-amber-800/30 dark:to-amber-900/20  shadow-xl fixed top-0 z-10 backdrop-blur-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="navbar justify-between py-3">
          <div className="navbar-start items-center">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden hover:bg-amber-100 dark:hover:bg-amber-800/30 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-amber-600 dark:text-amber-400"
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
                className="menu bg-base-100/95 backdrop-blur-lg menu-sm dropdown-content rounded-2xl z-[100] mt-3 w-64 p-4 shadow-2xl border border-amber-200 dark:border-amber-600"
              >
                {/* Show all links (public + protected) for mobile based on auth status */}
                {user ? (
                  <>
                    {publicLinks}
                    {protectedLinks}
                  </>
                ) : (
                  publicLinks
                )}
                {!user && (
                  <div className="flex flex-col mt-4 gap-3 md:hidden border-t border-amber-200 dark:border-amber-600 pt-4">
                    <Link
                      to="/login"
                      className="btn btn-sm bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Login
                      <LuLogIn size={18} />
                    </Link>

                    <Link
                      to="/register"
                      className="btn btn-sm btn-outline border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Register
                      <LuLogIn size={18} />
                    </Link>
                  </div>
                )}
              </ul>
            </div>
            <Link to="/" className="hidden md:flex gap-2 items-center group">
              <div className="relative">
                <img
                  src="https://i.ibb.co/8DwFHD4r/Food-logo-removebg.png"
                  className="w-56 h-14 transition-transform duration-300 group-hover:scale-105"
                  alt="FoodBridge Logo"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-amber-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-lg space-x-2 font-medium">
              {/* Show different navigation based on auth status */}
              {user ? (
                <>
                  {publicLinks}
                  {protectedLinks}
                </>
              ) : (
                <>{publicLinks}</>
              )}
            </ul>
          </div>

          <div className="navbar-end space-x-4">
            <ThemeToggle />
            {user ? (
              <div className="relative group flex items-center gap-3">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar hover:bg-amber-100 dark:hover:bg-amber-800/30 hover:scale-105 transition-all duration-300"
                  >
                    <div className="relative group inline-block w-12 rounded-full ring-2 ring-amber-400 ring-offset-2 ring-offset-base-100 overflow-hidden hover:ring-amber-500 hover:ring-2 transition-all duration-300 shadow-lg">
                      <img
                        className="w-full h-full object-cover"
                        alt="User Avatar"
                        src={
                          user.photoURL ||
                          "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        }
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100/95 backdrop-blur-lg rounded-2xl z-[100] mt-3 w-72 p-5 shadow-2xl border border-amber-200 dark:border-amber-600 text-center"
                  >
                    <li className="mb-3 font-semibold">
                      <p className=" text-amber-600 dark:text-amber-400 text-lg">
                        {user.displayName}
                      </p>
                    </li>
                    <li className="mb-4">
                      <p className="text-base-content/70 text-sm bg-base-200 rounded-lg px-3 py-1">
                        {user.email}
                      </p>
                    </li>
                    <li>
                      <button
                        className="btn btn-sm lg:btn-md btn-outline border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white rounded-full hover:scale-105 transition-all duration-300 transform shadow-lg hover:shadow-xl"
                        onClick={handleLogOut}
                      >
                        Logout
                        <LuLogOut size={18} />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="items-center gap-4 hidden md:flex">
                <div>
                  <Link
                    to="/login"
                    className="btn btn-sm lg:btn-md btn-outline border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white rounded-full hover:scale-105 transition-all duration-300 transform shadow-lg hover:shadow-xl"
                  >
                    Login
                    <LuLogIn size={18} />
                  </Link>
                </div>
                <div>
                  <Link
                    to="/register"
                    className="btn btn-sm lg:btn-md bg-amber-500 hover:bg-amber-600 text-white rounded-full hover:scale-105 transition-all duration-300 transform shadow-lg hover:shadow-xl"
                  >
                    Register
                    <LuLogIn size={18} />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
