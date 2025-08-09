import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import useAuth from "../hooks/useAuth";
import FoodRequestModal from "../Modal/FoodRequestModal";

const FoodDetails = () => {
  useEffect(() => {
    document.title = "Food Details - FoodBridge";
  }, []);
  const { user } = useAuth();
  const food = useLoaderData().data;
  const [showModal, setShowModal] = useState(false);
  // console.log(food);
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
    <div className="mt-25 container mx-auto w-[90%] min-h-[calc(100vh-450px)]">
      <h1 className="text-4xl text-center font-bold text-primary-custom my-10">
        Food Details
      </h1>
      <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-xl shadow-xl my-10 border border-secondary-custom/30">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
        />

        <h2 className="text-3xl font-bold text-primary-custom mb-3">{name}</h2>
        <p className=" mb-4">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <p>
            <strong>Quantity:</strong> {quantity}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span className="badge badge-success">{status}</span>
          </p>
          <p>
            <strong>Pickup Location:</strong> {pickupLocation}
          </p>
          <p>
            <strong>Expires On:</strong> {expiredDate}
          </p>
          <p>
            <strong>Donor Email:</strong> {donorEmail}
          </p>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <img
            src={donorImage}
            alt={donorName}
            className="w-12 h-12 rounded-full border-2 border-primary-custom"
          />
          <div>
            <p className="font-medium ">{donorName}</p>
            <p className="text-sm text-primary-custom">Donor</p>
          </div>
        </div>

        <div className="mt-6">
          {user && user.email !== donorEmail ? (
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-warning text-black"
            >
              Request This Food
            </button>
          ) : (
            <p className="text-red-500 font-semibold">
              You cannot request your own food.
            </p>
          )}
          {showModal && (
            <FoodRequestModal
              food={food}
              user={user}
              closeModal={() => setShowModal(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
