import React from "react";
import { useLoaderData } from "react-router";

const FoodDetails = () => {
  const food = useLoaderData().data;
  console.log(food);
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
    <div className="mt-25 container mx-auto w-[90%]">
        <h1 className="text-4xl text-center font-bold text-amber-400 my-10">
            Food Details
        </h1>
      <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-xl shadow-xl my-10 border border-amber-300">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
        />

        <h2 className="text-3xl font-bold text-amber-600 mb-3">{name}</h2>
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
            className="w-12 h-12 rounded-full border-2 border-amber-400"
          />
          <div>
            <p className="font-medium ">{donorName}</p>
            <p className="text-sm text-amber-500">Donor</p>
          </div>
        </div>

        <div className="mt-6">
          <button className="btn btn-warning text-white">
            Request This Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
