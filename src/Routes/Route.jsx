import React from "react";
import { createBrowserRouter, useNavigate } from "react-router-dom";
import HomePage from "../Home/HomePage";
import GetStarted from "../Pages/Auth/GetStarted";
import SignUp from "../app/SignUp";
import SignIn from "../app/SignIn";
import ForgetPassword from "../app/ForgotPassword";
import PharmacyRegister from "../app/PharmacyRegister";
import PharmacySignin from "../app/PharmacySignin";
import PharmacyDashboard from "../Dashboards/PharmacyDashboard";
import AdminDashboard from "../Dashboards/AdminDashboard";
import UserDashboard from "../Dashboards/UserDashboard";
import { Link } from "react-router-dom";
import Button from "../Components/Button/Button";
import VerifyEmail from "../app/VerifyEmail";
import Verification from "../app/Verification";
import PharmacyVerification from "../app/PharmacyVerification";

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
    path: "/userdashboard",
    element: <UserDashboard />,
  },
  {
    path: "/admindashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/pharmacydashboard",
    element: <PharmacyDashboard />,
  },
  {
    path: "/emailverification",
    element: <VerifyEmail />,
  },
  {
    path: "/verify/:token",
    element: <Verification />,
  },
  {
    path: "/pharmacy/verify/:token",
    element: <PharmacyVerification />,
  },

  {
    path: "*",
    element: (
      <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-sky-700">404</h1>
        <p className="text-lg text-gray-600 mt-2">Oops! Page not found!</p>
        <p className="text-sm text-gray-500 mb-5">
          The page you requested was not found.
        </p>
        <Link to="/">
          <Button text="Back to Home" />
        </Link>
      </div>
    ),
  },
  {
    path : "/pharmacyregister",
    element: <PharmacyRegister />
  },
  {
    path : "/pharmacylogin",
    element: <PharmacySignin />
  },
]);

export default router;
