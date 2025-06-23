import React from "react";
import { Link, useLoaderData } from "react-router";
import FoodCard from "./FoodCard";

const FeaturedFoods = () => {
  const foods = useLoaderData().data;
  console.log(foods);

  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold  my-5">
          Featured <span className="text-amber-400">Foods</span>
        </h2>
        <p className="mb-6 max-w-2xl">
          Discover our featured foods that are available for donation. Help us
          reduce food waste and support those in need by donating or requesting
          these items.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <Link
        to="/available-foods"
        className="flex justify-center md:justify-end mr-3 mt-6"
      >
        <button className="btn bg-amber-400 hover:bg-amber-500 text-white transition-all duration-300 ease-in-out hover:scale-105 rounded-none">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default FeaturedFoods;
