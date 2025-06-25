import React from 'react';
import useAuth from './useAuth';
import axios from 'axios';

const instance=axios.create({
    baseURL:'https://food-sharing-web-server-tau.vercel.app',

})
const useAxiosSecure = () => {
    const {user,logOut}=useAuth();

    //console.log("User in useAxiosSecure:", user);
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
            if(error.status===401 || error.status===403){
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