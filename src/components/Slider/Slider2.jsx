import React from "react";
import { Link } from "react-router";

const Slider2 = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/jkLBNDZR/banner-img-2.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h3 className="mb-1 text-3xl font-bold">
            Bridge <span className="text-primary-custom">the Plate </span>
          </h3>
          <h1 className="text-5xl mb-5 font-bold">
            Bridge the Gap
          </h1>
          <p className="mb-5">
            “Your extra food can transform into hope—join our network to reduce
            waste and ensure everyone at the table is fed.”
          </p>
        <Link to="/add-food">
          <button className="btn  border-primary-custom rounded-none bg-primary-custom text-black">Add Food</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
