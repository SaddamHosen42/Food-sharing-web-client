import React, { Suspense } from 'react';
import useAuth from '../hooks/useAuth';
import FoodRequestList from '../components/FoodRequestList';
import { foodRequestPromise } from '../api/foodRequestApi';


const FoodRequest = () => {
const { user } = useAuth(); 
 
    return (
     <div className="p-6 container mx-auto w-[90%] mt-25">
      <h2 className="text-2xl font-bold text-center mb-6 text-amber-600">My Food Requests</h2>

      <div className="overflow-x-auto">
        <Suspense>
            <FoodRequestList
            foodRequestPromise={foodRequestPromise(user.email)}></FoodRequestList>
        </Suspense>
      </div>
    </div>
    );
};

export default FoodRequest; 