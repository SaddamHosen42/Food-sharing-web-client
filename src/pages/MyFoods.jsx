import React, { Suspense } from 'react';
import useAuth from '../hooks/useAuth';
import MyFoodList from '../components/MyFoodList';
import { myFoodPromise } from '../api/MyfoodApi';

const MyFoods = () => {
    const {user} = useAuth();
   return (
        <div className='container mx-auto w-[90%] mt-25'>
            <h2 className='text-2xl font-bold text-center mb-6 text-amber-500'>My Foods</h2>
            <div className='overflow-x-auto'>
                <Suspense fallback={<div className="text-center">Loading foods...</div>}>
                    <MyFoodList
                     myFoodPromise={myFoodPromise(user.email)}
                    ></MyFoodList>
                </Suspense>
            </div>
        </div>
    );
};

export default MyFoods;