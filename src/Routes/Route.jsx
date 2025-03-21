import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Home/HomePage";
import GetStarted from "../Pages/Auth/GetStarted";
import SignUp from "../app/SignUp";
import SignIn from "../app/SignIn";
import ForgetPassword from "../app/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/getstarted",
    element: <GetStarted />,
  },
  {
    path: "/forgetpassword",
    element: <ForgetPassword />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default router;
