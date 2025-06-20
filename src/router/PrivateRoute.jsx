import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
   // console.log(location);
    if(loading){
        return <h1>loading</h1>
    }
    if(user){
        return children;
    }
  
  return <Navigate state={location.pathname} to='/login' replace={true}></Navigate>
};

export default PrivateRoute;