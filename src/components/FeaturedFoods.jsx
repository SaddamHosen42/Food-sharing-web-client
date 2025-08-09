import React from "react";
import { Link, useLoaderData } from "react-router";
import FoodCard from "./FoodCard";
import { motion } from "motion/react";//eslint-disable-line
const FeaturedFoods = () => {
  const foods = useLoaderData().data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "easeOut", type: "spring" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, ease: "easeOut", type: "spring" }}
          viewport={{ once: true }}
          className="text-3xl font-bold  my-5"
        >
          Featured <span className="text-primary-custom">Foods</span>
        </motion.h2>
        <p className="mb-6 max-w-2xl">
          Discover our featured foods that are available for donation. Help us
          reduce food waste and support those in need by donating or requesting
          these items.
        </p>
        <div className="w-24 h-1 bg-primary-custom mx-auto mt-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-5">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <Link
        to="/available-foods"
        className="flex justify-center md:justify-end mr-3 mt-6"
      >
        <button className="btn bg-primary-custom hover:bg-primary-custom text-black transition-all duration-300 ease-in-out hover:scale-105 rounded-none">
          Show All
        </button>
      </Link>
    </motion.div>
  );
};

export default FeaturedFoods;
