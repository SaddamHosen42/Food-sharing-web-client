import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react"//eslint-disable-line

const FoodCard = ({ food }) => {
  const { name, image, quantity, pickupLocation, expiredDateTime } = food;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.2 }
      }}
      className="group relative bg-gradient-to-br from-primary-custom/10 to-secondary-custom/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Floating badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            🍽️ {quantity}
          </span>
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            Available
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-4 bg-white/80 backdrop-blur-sm">
        {/* Title */}
        <h3 className=" text-xl text-gray-900 line-clamp-2 group-hover:text-primary-custom transition-colors duration-300 font-semibold">
          {name}
        </h3>

        {/* Info Grid */}
        <div className="space-y-3">
          {/* Location */}
          <div className="flex items-center gap-3">
            <span className="text-blue-600 text-lg">📍</span>
            <div className="flex-1">
              <p className="text-gray-600 text-sm">Pickup Location</p>
              <p className="text-gray-900 font-medium">{pickupLocation}</p>
            </div>
          </div>

          {/* Expiry Date */}
          {expiredDateTime && (
            <div className="flex items-center gap-3">
              <span className="text-orange-600 text-lg">⏱️</span>
              <div className="flex-1">
                <p className="text-gray-600 text-sm">Best Before</p>
                <p className="text-gray-900 font-medium">
                  {new Date(expiredDateTime).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-3">
          <Link
            to={`/food-details/${food._id}`}
            className="group/btn w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary-custom to-secondary-custom hover:from-secondary-custom hover:to-accent-custom text-black font-black py-3 px-5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary-custom/30 text-base shadow-lg"
          >
            <span>VIEW DETAILS</span>
            <svg className="w-5 h-5 transition-transform duration-200 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[35px] border-l-transparent border-t-[35px] border-t-primary-custom/30 group-hover:border-t-primary-custom/60 transition-colors duration-300"></div>
    </motion.div>
  );
};

export default FoodCard;
