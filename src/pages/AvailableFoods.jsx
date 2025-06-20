import React from "react";
import { useLoaderData } from "react-router";
import FoodCard from "../components/FoodCard";

const AvailableFoods = () => {
  const foods = useLoaderData().data;
  //const foods = foodsReq.data;
  console.log(foods);
  return (
    <div className="mt-25 container mx-auto w-[90%]">
      <h1 className="text-3xl text-center">Available Foods</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
