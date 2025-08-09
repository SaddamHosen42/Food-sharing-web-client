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
import About from "../pages/About";
import PrivateRoute from "./PrivateRoute";
import axios from "axios";
import UpdateFood from "../pages/UpdateFood";
import Loading from "../components/Loading";
import ErrorPages from "../pages/ErrorPages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => axios.get("https://food-sharing-web-server-tau.vercel.app/featured-foods"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "available-foods",
        Component: AvailableFoods,
        loader:()=>axios.get("https://food-sharing-web-server-tau.vercel.app/available-foods"),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "about",
        Component: About,
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
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path:"update-food/:id",
        loader: ({params}) => axios.get(`https://food-sharing-web-server-tau.vercel.app/foods/${params.id}`),
        Component:UpdateFood,
        hydrateFallbackElement:<Loading></Loading>
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
        loader: ({params}) => axios.get(`https://food-sharing-web-server-tau.vercel.app/foods/${params.id}`),
        element: (
          <PrivateRoute>
           <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "*",
        Component:ErrorPages,
      }
    ],
  },
]);
