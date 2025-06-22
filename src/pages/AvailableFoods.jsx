import React, { useState } from "react";
import { useLoaderData } from "react-router";
import FoodCard from "../components/FoodCard";

const AvailableFoods = () => {
  const foods = useLoaderData().data;
  const [isThreeColumn, setIsThreeColumn] = useState(true);

  return (
    <div className="mt-25 container mx-auto w-[90%]">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl text-amber-500 font-bold">Available Foods</h1>
        <button
          onClick={() => setIsThreeColumn(!isThreeColumn)}
          className=" hidden lg:flex btn bg-amber-400 rounded-none text-white hover:bg-amber-500"
        >
          Change Layout
        </button>
      </div>

      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${
          isThreeColumn ? "lg:grid-cols-3" : "lg:grid-cols-2"
        } gap-6 mt-6`}
      >
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
