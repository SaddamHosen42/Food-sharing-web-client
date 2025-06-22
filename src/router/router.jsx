import { createBrowserRouter } from "react-router";
import RootLayOut from "../layouts/RootLayOut";
import Home from "../pages/Home";
import FoodDetails from "../pages/FoodDetails";
import AvailableFoods from "../pages/AvailableFoods";
import AddFoods from "../pages/AddFoods";
import MyFoods from "../pages/MyFoods";
import Login from "../pages/authentication-form/Login";
import Register from "../pages/authentication-form/Register";
import FoodRequest from "../pages/FoodRequest";
import PrivateRoute from "./PrivateRoute";
import axios from "axios";
import UpdateFood from "../pages/UpdateFood";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "available-foods",
        Component: AvailableFoods,
        loader:()=>axios.get("http://localhost:5000/available-foods")
      },
      {
        path: "add-food",
        element: (
          <PrivateRoute>
            <AddFoods></AddFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "my-foods",
        element: (
          <PrivateRoute>
            <MyFoods></MyFoods>
          </PrivateRoute>
        ),
      },
      {
        path:"update-food/:id",
        loader: ({params}) => axios.get(`http://localhost:5000/foods/${params.id}`),
        Component:UpdateFood
      },
      {
        path: "food-request",
        element: (
          <PrivateRoute>
            <FoodRequest></FoodRequest>
          </PrivateRoute>
        ),
      },
      {
        path:"food-details/:id",
        loader: ({params}) => axios.get(`http://localhost:5000/foods/${params.id}`),
        element: (
          <PrivateRoute>
           <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
