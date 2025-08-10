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
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHome from "../pages/DashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        index: true,
        Component: Home,
        loader: () =>
          axios.get(
            "https://food-sharing-web-server-tau.vercel.app/featured-foods"
          ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "available-foods",
        Component: AvailableFoods,
        loader: () =>
          axios.get(
            "https://food-sharing-web-server-tau.vercel.app/available-foods"
          ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "about",
        Component: About,
      },

      {
        path: "food-details/:id",
        loader: ({ params }) =>
          axios.get(
            `https://food-sharing-web-server-tau.vercel.app/foods/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <FoodDetails />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loading />,
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
        Component: ErrorPages,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "my-foods",
        element: <MyFoods />,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "add-food",
        element: <AddFoods />,
      },
      {
        path: "food-request",
        element: <FoodRequest />,
      },
      {
        path: "my-foods/update-food/:id",
        loader: ({ params }) =>
          axios.get(
            `https://food-sharing-web-server-tau.vercel.app/foods/${params.id}`
          ),
        Component: UpdateFood,
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
]);
