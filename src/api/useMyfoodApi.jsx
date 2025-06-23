import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useMyfoodApi = () => {
    const axiosSecure=useAxiosSecure();
    const myFoodPromise=(email)=>{
        return axiosSecure.get(`/foods?email=${email}`)
            .then(res => res.data);
    }
    return { myFoodPromise};
};

export default useMyfoodApi;