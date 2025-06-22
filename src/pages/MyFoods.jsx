 import React from "react";
import useAuth from "../hooks/useAuth";
import MyFoodList from "../components/MyFoodList";
import Swal from "sweetalert2";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { myFoodPromise } from "../api/MyfoodApi";

const MyFoods = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const {
    data: foods = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myFoods", user?.email],
    queryFn: () =>  myFoodPromise(user.email),
    enabled: !!user?.email, // only run if email exists
  });

  //  Deleting with useMutation
  const deleteMutation = useMutation({
    mutationFn: (id) => axios.delete(`http://localhost:5000/foods/${id}`),
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

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Failed to load foods.</p>;

  return (
    <div className="container mx-auto w-[90%] mt-25">
      <h2 className="text-2xl font-bold text-center mb-6 text-amber-500">
        My Foods
      </h2>
      <div className="overflow-x-auto">
        <MyFoodList foods={foods} handelDelete={handelDelete}></MyFoodList>
      </div>
    </div>
  );
};

export default MyFoods;
