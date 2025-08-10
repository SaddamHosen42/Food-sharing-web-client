
import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router";
import { MdOutlineAddBox } from "react-icons/md";

const AddFoods = () => {
  useEffect(() => {
    document.title = "Add Foods - FoodBridge";
  }, []);
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleAddFood = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const newFood = Object.fromEntries(formData.entries());
    console.log(newFood);
    //send data to the server
    axios.post("https://food-sharing-web-server-tau.vercel.app/add-food", newFood)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Food Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
            confirmButtonColor: "#10b981", // emerald-500
            customClass: {
              confirmButton: 'swal-confirm-btn'
            }
          });
          form.reset();
          navigate("/available-foods");
        }
      })
      .catch((error) => {
        console.error("Error adding food:", error);
        Swal.fire({
          icon: "error",
          title: "Failed to Add Food",
          text: "Please try again later.",
          confirmButtonColor: "#ef4444", // red-500
          customClass: {
            confirmButton: 'swal-confirm-btn'
          }
        });
      });

  };

  return (
    <section className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-custom py-8 px-2">
      <div className="w-full max-w-5xl mx-auto">
        <div className="rounded-2xl shadow-2xl bg-white/90 border border-blue-100">
          <div className="flex flex-col items-center mb-8 pt-8">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg mb-3">
              <MdOutlineAddBox className="text-4xl" />
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 drop-shadow">Add a New Food</h1>
            <p className="text-gray-500 text-center max-w-lg">Share your surplus food with the community. Fill out the form below to add a new food item for donation.</p>
          </div>
          <form
            onSubmit={handleAddFood}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 pb-8"
          >
            {/* Food Name */}
            <div>
              <legend className="text-base font-semibold mb-2 text-blue-700">Food Name</legend>
              <input
                name="name"
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter food name"
                required
              />
            </div>
            {/* Image URL */}
            <div>
              <legend className="text-base font-semibold mb-2 text-blue-700">Food Image</legend>
              <input
                name="image"
                type="text"
                className="input input-bordered w-full"
                placeholder="Image URL"
                required
              />
            </div>
            {/* Food Quantity */}
            <div>
              <legend className="text-base font-semibold mb-2 text-blue-700">Food Quantity</legend>
              <input
                name="quantity"
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter food quantity"
                required
              />
            </div>
            {/* Pickup Location*/}
            <div>
              <legend className="text-base font-semibold mb-2 text-blue-700">Pickup Location</legend>
              <input
                name="pickupLocation"
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter pickup location"
                required
              />
            </div>
            {/*  Expired Date */}
            <div>
              <legend className="text-base font-semibold mb-2 text-blue-700">Expired Date</legend>
              <input
                name="expiredDate"
                type="date"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/*Food Status */}
            <div>
              <legend className="text-base font-semibold mb-2 text-blue-700">Food Status</legend>
              <input
                name="status"
                type="text"
                className="input input-bordered w-full"
                value="available"
                readOnly
              />
            </div>
            {/* Donor Email */}
            <div>
              <legend className="text-base font-semibold mb-2 text-blue-700">Donor Email</legend>
              <input
                name="donorEmail"
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter user email"
                defaultValue={user?.email}
                required
                readOnly
              />
            </div>
            {/* Donor image */}
            <div>
              <legend className="text-base font-semibold mb-2 text-blue-700">Donor Image</legend>
              <input
                name="donorImage"
                type="email"
                className="input input-bordered w-full"
                placeholder="Enter user email"
                defaultValue={user?.photoURL}
                required
                readOnly
              />
            </div>
            {/* Donor Name */}
            <div>
              <legend className="text-base font-semibold mb-2 text-blue-700">Donor Name</legend>
              <input
                name="donorName"
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter your name"
                defaultValue={user?.displayName}
                required
                readOnly
              />
            </div>
            {/*  Additional Notes */}
            <div className="md:col-span-2">
              <legend className="text-base font-semibold mb-2 text-blue-700">Additional Notes</legend>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full"
                rows="4"
                placeholder="Write a short description about the food"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="md:col-span-2 text-center mt-2">
              <button
                type="submit"
                className="btn bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold w-full md:w-1/2 shadow-lg transition-all duration-200"
              >
                <MdOutlineAddBox className="inline-block mr-2 text-2xl align-middle" />
                Add Food
              </button>
            </div>
          </form>
          {/* Motivational Message */}
          <div className="px-8 pb-8">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 shadow text-center mt-8">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Thank you for sharing!</h3>
              <p className="text-gray-700">Your food donation helps reduce waste and supports those in need. Every contribution makes a difference in our community.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddFoods;
