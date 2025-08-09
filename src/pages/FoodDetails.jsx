import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { motion } from "motion/react"; //eslint-disable-line
import useAuth from "../hooks/useAuth";
import FoodRequestModal from "../Modal/FoodRequestModal";

const FoodDetails = () => {
  useEffect(() => {
    document.title = "Food Details - FoodBridge";
  }, []);
  const { user } = useAuth();
  const food = useLoaderData().data;
  const [showModal, setShowModal] = useState(false);
  
  const {
    name,
    image,
    description,
    quantity,
    pickupLocation,
    expiredDate,
    donorName,
    donorEmail,
    donorImage,
    status,
  } = food;

  return (
    <div className="min-h-[calc(100vh-200px)] py-12">
      <div className="mx-auto w-[90%]">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary-custom mb-4">
            Food Details
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            View complete information about this food donation
          </p>
        </div>

        {/* Food Image Section */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={image}
                alt={name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute bottom-6 left-6">
                <h2 className="text-4xl font-bold text-white mb-2">{name}</h2>
                <div className="flex gap-4">
                  <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-semibold">
                    Qty: {quantity}
                  </span>
                  <span className={`px-4 py-2 rounded-full font-semibold ${
                    status === 'available' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-orange-500 text-white'
                  }`}>
                    {status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Description
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Food Information Section */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Food Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    📍 Pickup Location
                  </h4>
                  <p className="text-gray-900 dark:text-white font-medium text-lg">
                    {pickupLocation}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    ⏰ Expiry Date
                  </h4>
                  <p className="text-gray-900 dark:text-white font-medium text-lg">
                    {expiredDate}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    🍽️ Quantity Available
                  </h4>
                  <p className="text-gray-900 dark:text-white font-medium text-lg">
                    {quantity}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    📧 Donor Email
                  </h4>
                  <p className="text-gray-900 dark:text-white font-medium text-lg">
                    {donorEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donor Information Section */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Donor Information
            </h3>
            <div className="flex items-center gap-6">
              <img
                src={donorImage}
                alt={donorName}
                className="w-20 h-20 rounded-full object-cover border-4 border-primary-custom shadow-lg"
              />
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {donorName}
                </h4>
                <p className="text-primary-custom font-semibold text-lg mb-1">
                  Verified Food Donor
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {donorEmail}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
            {user && user.email !== donorEmail ? (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Request This Food
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                  Send a request to the donor to get this food
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-primary-custom hover:bg-primary-custom text-black font-bold py-4 px-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                >
                  Send Request
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
                  Cannot Request
                </h3>
                <p className="text-red-600 dark:text-red-400 font-semibold text-lg">
                  You cannot request your own food donation
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <FoodRequestModal
          food={food}
          user={user}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default FoodDetails;
