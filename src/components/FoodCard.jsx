import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react"
const FoodCard = ({ food }) => {
  const { name, image, quantity, pickupLocation } = food;
  return (
    <motion.div
     initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.1,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
            }}
  
      className="card bg-base-100 shadow-xl rounded-lg border border-amber-300 transition-all duration-300 ease-in-out transform hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1"
    >
      <figure>
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-lg font-semibold">{name}</h2>
        <p className="text-sm">Quantity: {quantity}</p>
        <p className="text-sm ">Pickup Location: {pickupLocation}</p>

        <Link
          to={`/food-details/${food._id}`}
          className="btn bg-amber-400 hover:bg-amber-500 text-white transition-all duration-300 ease-in-out hover:scale-105"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default FoodCard;
