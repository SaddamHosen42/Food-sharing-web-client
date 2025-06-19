import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';

const RootLayOut = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayOut;