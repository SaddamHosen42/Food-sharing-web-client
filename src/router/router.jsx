import { createBrowserRouter } from "react-router";
import RootLayOut from "../layouts/RootLayOut";
import Home from "../pages/Home";
import AvailableFoods from "../pages/AvailableFoods";
import AddFoods from "../pages/AddFoods";
import MyFoods from "../pages/MyFoods";
import Login from "../pages/authentication-form/Login";
import Register from "../pages/authentication-form/Register";

export const router=createBrowserRouter([
    {
        path: "/",
        Component:RootLayOut,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"available-foods",
                Component:AvailableFoods
            },
            {
                path:"add-food",
                Component:AddFoods
            },
            {
                path:"my-foods",
                Component:MyFoods
            },
            {
                path:"login",
                Component:Login
            },
            {
                path:"register",
                Component:Register
            }
        ],
    }
]);