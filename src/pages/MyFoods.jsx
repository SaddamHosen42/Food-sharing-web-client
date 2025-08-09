import React, { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import MyFoodList from "../components/MyFoodList";
import Swal from "sweetalert2";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useMyfoodApi from "../api/useMyfoodApi";
import { motion } from "motion/react"; //eslint-disable-line
import Loading from "../components/Loading";

const MyFoods = () => {
  useEffect(() => {
    document.title = "My Foods - FoodBridge";
  }, []);
  const { user } = useAuth();

  const { myFoodPromise } = useMyfoodApi();
  const queryClient = useQueryClient();
  const {
    data: foods = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myFoods", user?.email],
    queryFn: () => myFoodPromise(user.email),
    enabled: !!user?.email, // only run if email exists
  });

  //  Deleting with useMutation
  const deleteMutation = useMutation({
    mutationFn: (id) =>
      axios.delete(
        `https://food-sharing-web-server-tau.vercel.app/foods/${id}`
      ),
    onSuccess: () => {
      Swal.fire({
        title: "Deleted!",
        text: "Your food has been deleted.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      queryClient.invalidateQueries(["myFoods"]); //  refetch list
    },
    onError: () => {
      Swal.fire("Error!", "Failed to delete the food.", "error");
    },
  });

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will delete this food.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="text-center bg-red-50 dark:bg-red-900/20 p-8 rounded-2xl border border-red-200 dark:border-red-800">
          <div className="text-6xl mb-4">😞</div>
          <p className="text-xl text-red-600 dark:text-red-400 font-semibold">
            Failed to load foods.
          </p>
          <p className="text-red-500 dark:text-red-300 mt-2">
            Please try again later.
          </p>
        </div>
      </div>
    );

  return (
    <div className="min-h-[calc(100vh-200px)] bg-custom py-12">
      <div className="mx-auto w-[95%] max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block p-3 bg-secondary/20 rounded-full mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-2xl">🍽️</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">My Food Donations</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Manage your food donations and track their impact in the community
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-custom to-secondary-custom mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-green-200 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">
              {foods.length}
            </div>
            <div className="text-gray-600">Total Foods</div>
          </div>
          <div className="bg-green-200 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-700 mb-2">
              {foods.filter((food) => food.status === "available").length}
            </div>
            <div className="text-gray-600">Available</div>
          </div>
          <div className="bg-green-200 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              {foods.filter((food) => food.status === "unavailable").length}
            </div>
            <div className="text-gray-600">Requested</div>
          </div>
        </motion.div>

        {/* Food List Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl"
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
              <span className="text-2xl">📋</span>
              Your Food Donations
            </h2>
            {foods.length > 0 && (
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {foods.length} item{foods.length !== 1 ? "s" : ""} total
              </div>
            )}
          </div>

          <div className="overflow-x-auto">
            <MyFoodList foods={foods} handelDelete={handelDelete} />
          </div>
        </motion.div>

        {/* Motivational Section */}
        {foods.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="bg-base-100 rounded-2xl p-8 shadow-lg">
              <div className="text-3xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-primary-custom mb-3">
                Thank You for Making a Difference!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Your generosity helps reduce food waste and feeds those in need.
                Keep up the amazing work!
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MyFoods;
