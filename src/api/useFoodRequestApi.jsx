import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useFoodRequestApi = () => {
    const axiosSecure=useAxiosSecure();
    const foodRequestPromise=(email)=>{
        return axiosSecure.get(`/food-requests?email=${email}`)
            .then(res => res.data);
    }
    return { foodRequestPromise};
};

export default useFoodRequestApi;