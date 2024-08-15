import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/login/login";
import Register from "../pages/register/register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children : [
        {
            path : "/",
            element : <Home/>
        },
        {
            path : "/login",
            element : <Login/>
        },
        {
            path : "/register",
            element : <Register/>
        }
      ]
    },
  ]);

  export default router