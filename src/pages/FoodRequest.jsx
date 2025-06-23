import React, { Suspense } from "react";
import useAuth from "../hooks/useAuth";
import FoodRequestList from "../components/FoodRequestList";
import { foodRequestPromise } from "../api/foodRequestApi";
import Loading from "../components/Loading";

const FoodRequest = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto w-[90%] mt-30 min-h-[calc(100vh-450px)]">
      <h2 className="text-2xl font-bold text-center mb-6 text-amber-500">
        My Food Requests
      </h2>

      <div className="overflow-x-auto">
        <Suspense fallback={<Loading></Loading>}>
          <FoodRequestList
            foodRequestPromise={foodRequestPromise(user.email)}
          ></FoodRequestList>
        </Suspense>
      </div>
    </div>
  );
};

export default FoodRequest;
