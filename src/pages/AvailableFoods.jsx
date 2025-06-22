import React, { useState } from "react";
import { useLoaderData } from "react-router";
import FoodCard from "../components/FoodCard";

const AvailableFoods = () => {
  const foods = useLoaderData().data;
  const [isThreeColumn, setIsThreeColumn] = useState(true);
  const [searchText, setSearchText] = useState("");

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="mt-30 container mx-auto w-[90%]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-3xl font-bold text-amber-500">Available Foods</h1>

        {/* Search Input */}
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search by food name..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </label>

        {/* Layout Toggle Button */}
        <button
          onClick={() => setIsThreeColumn(!isThreeColumn)}
          className="px-4 py-2 bg-amber-500 text-white rounded"
        >
          Change Layout
        </button>
      </div>

      {/*Filtered Food List */}
      {filteredFoods.length > 0 ? (
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            isThreeColumn ? "lg:grid-cols-3" : "lg:grid-cols-2"
          } gap-6`}
        >
          {filteredFoods.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No food found by that name.</p>
      )}
    </div>
  );
};

export default AvailableFoods;
