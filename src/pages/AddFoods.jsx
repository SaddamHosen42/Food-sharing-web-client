import React from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const AddFoods = () => {
  const { user } = useAuth();
  const handleAddFood = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const newFood = Object.fromEntries(formData.entries());
    console.log(newFood);
    //send data to the server
    axios.post("http://localhost:5000/add-food", newFood)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Food Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error adding food:", error);
        Swal.fire({
          icon: "error",
          title: "Failed to Add Food",
          text: "Please try again later.",
        });
      });

  };

  return (
    <div className="container mx-auto w-[90%] mt-30 mb-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-amber-400">Add a New Food</h1>
      <form
        onSubmit={handleAddFood}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6  p-8 rounded-2xl shadow-xl w-full bg-base-200"
      >
        {/* Food Name */}
        <div>
          <legend className="text-lg font-medium mb-2">Food Name</legend>
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
          <legend className="text-lg font-medium mb-2">Food Image</legend>
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
          <legend className="text-lg font-medium mb-2">Food Quantity</legend>
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
          <legend className="text-lg font-medium mb-2">Pickup Location</legend>
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
          <legend className="text-lg font-medium mb-2">Expired Date</legend>
          <input
            name="expiredDate"
            type="date"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/*Food Status */}
        <div>
          <legend className="text-lg font-medium mb-2">Food Status</legend>
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
          <legend className="text-lg font-medium mb-2">Donor Email</legend>
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
          <legend className="text-lg font-medium mb-2">Donor Image</legend>
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
          <legend className="text-lg font-medium mb-2">Donor Name</legend>
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

        {/*  Additional Notes
         */}
        <div className="lg:col-span-2">
          <legend className="text-lg font-medium mb-2">
            {" "}
            Additional Notes
          </legend>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            rows="4"
            placeholder="Write a short description about the food"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="lg:col-span-2 text-center">
          <button
            type="submit"
            className="btn  bg-amber-400 hover:bg-amber-500 text-white w-full lg:w-1/2"
          >
            Add Food
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFoods;
