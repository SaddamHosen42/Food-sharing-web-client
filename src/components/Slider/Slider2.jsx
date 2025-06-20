import React from "react";

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
          <h1 className="mb-5 text-5xl font-bold">
            Bridge <span className="text-yellow-500">the Plate,</span> Bridge the Gap
          </h1>
          <p className="mb-5">
            “Your extra food can transform into hope—join our network to reduce
            waste and ensure everyone at the table is fed.”
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Slider2;
