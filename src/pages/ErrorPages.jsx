import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink } from "react-router";

const ErrorPages = () => {
  return (
    <div className="relative flex flex-col items-center mt-20">
      <p className="text-5xl font-semibold text-primary-custom mt-8 mb-2">404</p>

      <div className="relative w-[500px] h-[400px]">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 illustration"
          className="absolute top-[-6px] w-full h-full object-cover"
        />
      </div>

      <div className="relative -top-25 text-center space-y-3">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900">
          Page not found
        </h1>
        <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <NavLink to="/">
          <button className="btn bg-primary-custom text-lg text-black"><FaArrowLeftLong />Go back home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPages;
