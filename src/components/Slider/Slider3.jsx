import React from "react";

const Slider3 = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/8LYM6Jjm/banner-img3.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-[600px]">
          <h1 className="mb-5 text-5xl font-bold">
            Feeding Communities <span className="text-yellow-500">Together</span>
          </h1>
          <p className="mb-5">
            “At FoodBridge, we connect excess meals from generous donors with
            families and individuals facing hunger, creating a more sustainable
            and caring world.”
          </p>
           <button className="btn border-amber-400 rounded-none bg-amber-400 text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Slider3;
