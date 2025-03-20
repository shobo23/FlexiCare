import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pic from "../assets/signUp/signupPic.webp";
import Logo from "../assets/flexi-logo.png";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Button from "../Components/Button/Button";

const SignUp = () => {
  const Nav = useNavigate();
  const [values, setValues] = useState({
    fullName: "",
    phoneNo: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://flexicarebackend.onrender.com/api/signup",
        values
      );
      setIsLoading(false);
      console.log(response);
      Swal.fire({
        title: "Sign Up Successfull!",
        text: "Login To proceed!",
        icon: "Login"
      })
      Nav("/login");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div className="w-screen flex justify-center items-center h-screen ">
      <div className="bg-[#E7E6DD] p-10 w-full h-full flex flex-col justify-center items-center max-[786px]:hidden  ">
        <div className="flex justify-start w-full">
          <IoChevronBackCircleOutline
            onClick={() => Nav("/getstarted")}
            className="size-10 text-sky-700 cursor-pointer hover:text-[#E45E32]"
          />
        </div>
        <div className="w-130">
          <img
            src={Pic}
            alt="Could'nt render Image"
            className="w-full object-contain overflow-hidden"
          />
        </div>
      </div>
      <form
        className="w-full h-full p-10 bg-sky-700 flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-start w-full">
                <IoChevronBackCircleOutline className="size-10 text-white min-[786px]:hidden cursor-pointer hover:text-[#E45E32]" onClick={() => Nav('/')}/>
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
            Provide your informations to create an account.
          </p>
          <div className="mb-3">
            <label className="block text-white font-bold">Fullname</label>
            <input
              onChange={handleChange}
              type="text"
              name="fullName"
              placeholder=""
              className="border px-2 text-white border-[#E7E6DD] w-full rounded-[3px] p-[3px]"
              required
            />
          </div>
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
          <div className="w-full mt-5 flex justify-center items-center">
            <Button text={isLoading ? "Loading..." : "Register Now"} />
          </div>
          <p onClick={() => Nav("/login")} className="text-center flex gap-1 mt-3">
            Already have an account?
            <span className="text-[#E7E6DD] cursor-pointer hover:text-[#E45E32]">
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
