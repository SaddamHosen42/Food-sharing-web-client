import React, { Suspense, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import FoodRequestList from "../components/FoodRequestList";
import Loading from "../components/Loading";
import useFoodRequestApi from "../api/useFoodRequestApi";


const FoodRequest = () => {
  const { user } = useAuth();
  useEffect(() => {
    document.title = "My Food Requests - FoodBridge";
  }, []);
  const {foodRequestPromise} = useFoodRequestApi();
  return (
    <div className="container mx-auto max-w-[90%] mt-30 min-h-[calc(100vh-450px)]">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary-custom">
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
