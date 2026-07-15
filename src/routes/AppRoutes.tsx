import { createBrowserRouter } from "react-router-dom";

import UserLayout from "../layouts/UserLayout";

import Home from "../pages/user/Home";
import Jobs from "../pages/user/Jobs";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;