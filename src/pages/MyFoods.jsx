import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import MyFoodList from "../components/MyFoodList";
import { myFoodPromise } from "../api/MyfoodApi";
import Swal from "sweetalert2";
import axios from "axios";

const MyFoods = () => {
  const { user } = useAuth();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    if (user?.email) {
      myFoodPromise(user.email)
        .then((data) => {
          setFoods(data);
        })
        .catch((err) => {
          console.error("Failed to load foods:", err);
        });
    }
    document.title = "My Foods - FoodBridge";
  }, [user?.email]);
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
        axios
          .delete(`http://localhost:5000/foods/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              const remainingFoods = foods.filter((food) => food._id !== id);
              setFoods(remainingFoods);

              Swal.fire({
                title: "Deleted!",
                text: "Your food has been deleted.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting food:", error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while deleting the food.",
              icon: "error",
            });
          });
      }
    });
  };
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
