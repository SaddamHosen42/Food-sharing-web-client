
import React from 'react';
import useAuth from './useAuth';
import axios from 'axios';

const instance=axios.create({
    baseURL:'http://localhost:5000',

})
const useAxiosSecure = () => {
    const {user,logOut}=useAuth();
    instance.interceptors.request.use((config) => {
        config.headers.Authorization= `Bearer ${user?.accessToken}`;
        return config;
    });
    // Add a response interceptor
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            if(error.status===401){
                logOut()
                .then(() => {
                    console.error("Unauthorized access - signing out");
                })
                .catch(error => {
                    console.error("Error signing out:", error);
                });
            }
        });
        
    return instance;
};

export default useAxiosSecure;