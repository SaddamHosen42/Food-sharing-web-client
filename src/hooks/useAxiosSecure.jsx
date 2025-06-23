
import React from 'react';
import useAuth from './useAuth';
import axios from 'axios';

const instance=axios.create({
    baseURL:'http://localhost:5000',

})
const useAxiosSecure = () => {
    const {user}=useAuth();
    instance.interceptors.request.use((config) => {
        config.headers.Authorization= `Bearer ${user?.accessToken}`;
        return config;
    });
    return instance;
};

export default useAxiosSecure;