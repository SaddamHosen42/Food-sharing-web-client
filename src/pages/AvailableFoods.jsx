import React, { useState } from "react";
import { useLoaderData } from "react-router";
import FoodCard from "../components/FoodCard";

const AvailableFoods = () => {
  const foods = useLoaderData().data;
  const [isThreeColumn, setIsThreeColumn] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // 🔍 Filter by food name
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // 🔃 Sort by expire date
  const sortedFoods = [...filteredFoods].sort((a, b) => {
    const dateA = new Date(a.expiredDate);
    const dateB = new Date(b.expiredDate);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  return (
    <div className="mt-30 container mx-auto w-[90%] min-h-[calc(100vh-450px)]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-3xl font-bold text-amber-500">Available Foods</h1>

        {/*  Search Input */}
        <label className="input input-bordered flex items-center gap-2">
          <svg
            className="h-[1em] w-[1em] opacity-50"
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
            className="grow"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </label>

        {/* Sort Dropdown */}
        <select
          className="select select-bordered"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Expire Date ↑ (Oldest First)</option>
          <option value="desc">Expire Date ↓ (Newest First)</option>
        </select>

        {/* Layout Toggle Button */}
        <button
          onClick={() => setIsThreeColumn(!isThreeColumn)}
          className="btn hidden lg:flex bg-amber-500 text-white rounded"
        >
          Change Layout
        </button>
      </div>

      {/*  Render Sorted and Filtered Foods */}
      {sortedFoods.length > 0 ? (
        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            isThreeColumn ? "lg:grid-cols-3" : "lg:grid-cols-2"
          } gap-6`}
        >
          {sortedFoods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No food found by that name.
        </p>
      )}
    </div>
  );
};

export default AvailableFoods;
