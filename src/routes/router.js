import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>welcome</h1>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
