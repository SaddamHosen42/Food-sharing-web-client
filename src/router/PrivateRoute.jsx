import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
   // console.log(location);
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children;
    }
  
  return <Navigate state={location.pathname} to='/login' replace={true}></Navigate>
};

export default PrivateRoute;