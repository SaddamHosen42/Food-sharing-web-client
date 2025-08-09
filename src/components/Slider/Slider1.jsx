import React from "react";
import { motion } from "motion/react"; //eslint-disable-line
import { Link } from "react-router";
const Slider1 = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://www.shutterstock.com/image-photo/hungry-children-refugee-camp-distribution-260nw-82800565.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-[600px]">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="mb-5 text-5xl font-bold"
          >
            Zero Waste,<span className="text-primary-custom">Full Hearts</span>
          </motion.h1>
          <p className="mb-5">
            “Redistribute perfectly good meals before they spoil—help us fight
            food waste and nourish communities, one plate at a time.”
          </p>
          <Link to="/available-foods">
            <button className="btn  border-primary-custom rounded-none bg-primary-custom text-black">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
