import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2
import Pic from "../assets/signUp/signupPic.webp";
import Logo from "../assets/flexi-logo.png";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Button from "../Components/Button/Button"; // ✅ Use existing Button component
import { ImSpinner2 } from "react-icons/im"; // ✅ Import Spinner Icon

const SignUp = () => {
  const Nav = useNavigate();
  const [values, setValues] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // ✅ Track API errors

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); // Reset error messages

    try {
      const response = await axios.post(
        "https://flexicarebackend.onrender.com/api/signup",
        values
      );

      setIsLoading(false);
      console.log(response);

      // ✅ Show success alert
      Swal.fire({
        title: "Sign Up Successful!",
        text: "Check Gmail For Confirmation",
        icon: "success",
        confirmButtonColor: "#0069A8",
      });

      // ✅ Navigate to verification Page
      Nav("/emailverification");
    } catch (error) {
      console.log(error);
      setIsLoading(false);

      // ✅ Display error message from API
      setErrorMessage(
        error.response?.data?.message || "Sign up failed. Please try again."
      );

      // ✅ Show SweetAlert for errors
      Swal.fire({
        title: "Sign Up Failed",
        text: error.response?.data?.message || "An error occurred.",
        icon: "error",
        confirmButtonColor: "#E45E32",
      });
    }
  };

  return (
    <div className="w-screen flex justify-center items-center h-screen">
      {/* Left Side - Image Section */}
      <div className="bg-[#E7E6DD] p-10 w-full h-full flex flex-col justify-center items-center max-[786px]:hidden">
        <div className="flex justify-start w-full">
          <IoChevronBackCircleOutline
            onClick={() => Nav("/getstarted")}
            className="size-10 text-sky-700 cursor-pointer hover:text-[#E45E32]"
          />
        </div>
        <div className="w-130">
          <img
            src={Pic}
            alt="Couldn't render Image"
            className="w-full object-contain overflow-hidden"
          />
        </div>
      </div>

      {/* Right Side - Form Section */}
      <form
        className="w-full h-full p-10 bg-sky-700 flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-start w-full">
          <IoChevronBackCircleOutline
            className="size-10 text-white min-[786px]:hidden cursor-pointer hover:text-[#E45E32]"
            onClick={() => Nav("/")}
          />
        </div>
        <div>
          <div className="w-full mt-10 flex justify-center items-center mb-5">
            <div className="w-35">
              <img
                src={Logo}
                alt="Logo"
                className="w-full object-contain overflow-hidden"
              />
            </div>
          </div>
          <h1 className="text-3xl mb-[5px] text-[#012047] font-bold">
            Patient Signup
          </h1>
          <p className="mb-[15px] text-[#E7E6DD]">
            Provide your information to create an account.
          </p>

          {/* Full Name Input */}
          <div className="mb-3">
            <label className="block text-white font-bold">Full Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="fullName"
              className="border px-2 text-white border-[#E7E6DD] w-full rounded-[3px] p-[3px]"
              required
            />
          </div>

          {/* Phone Number Input */}
          <div className="mb-3">
            <label className="block text-white font-bold">Phone Number</label>
            <input
              onChange={handleChange}
              type="text"
              name="phoneNo"
              className="border px-2 text-white border-[#E7E6DD] w-full rounded-[3px] p-[3px]"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <label className="block text-white font-bold">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              className="border px-2 text-white border-[#E7E6DD] w-full rounded-[3px] p-[3px]"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-white font-bold">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              className="border px-2 text-white border-[#E7E6DD] w-full rounded-[3px] p-[3px]"
              required
            />
          </div>

          {/* Register Button with Loading Animation */}
          <div className="w-full mt-5 flex justify-center items-center">
            <Button
              text={
                isLoading ? (
                  <div className="flex items-center gap-2">
                    <ImSpinner2 className="animate-spin text-lg" />{" "}
                    Registering...
                  </div>
                ) : (
                  "Register Now"
                )
              }
              disabled={isLoading}
            />
          </div>

          {/* Login Link */}
          <div className="w-full flex justify-center items-center">
            <p className="text-center flex gap-1 mt-3">
              Already have an account?
              <span
                className="text-[#E7E6DD] cursor-pointer hover:text-[#E45E32]"
                onClick={() => Nav("/login")}
              >
                Login
              </span>
            </p>
          </div>

          {/* Error Message Display */}
          {errorMessage && (
            <p className="text-red-500 text-sm text-center mt-3">
              {errorMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
