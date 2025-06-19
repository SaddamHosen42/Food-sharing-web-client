import { createBrowserRouter } from "react-router";
import RootLayOut from "../layouts/RootLayOut";
import Home from "../pages/Home";
import AvailableFoods from "../pages/AvailableFoods";
import AddFoods from "../pages/AddFoods";
import MyFoods from "../pages/MyFoods";

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
            }
        ],
    }
]);