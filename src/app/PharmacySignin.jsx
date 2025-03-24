// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import Pic from "../assets/signUp/signupPic.webp";
// import Logo from "../assets/flexi-logo.png";
// import { IoChevronBackCircleOutline } from "react-icons/io5";
// import Button from "../Components/Button/Button";
// import { addUser } from "../services/userSlice";

// const PharmacySignin = () => {
//   const Nav = useNavigate();
//   const dispatch = useDispatch();
//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setValues({ ...values, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage("");

//     try {
//       const response = await axios.post(
//         "https://flexicarebackend.onrender.com/api/pharmacy/signin",
//         values
//       );

//       console.log(response.data);
//       localStorage.setItem("currentUser", JSON.stringify(response.data.data));

//       dispatch(addUser(response.data.data));

//     } catch (error) {
//       console.error(error);
//       setErrorMessage("Invalid email or password. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="w-screen flex justify-center items-center h-screen">
//       <div className="bg-[#E7E6DD] p-10 w-full h-full flex flex-col justify-center items-center max-[786px]:hidden">
//         <div className="flex justify-start w-full">
//           <IoChevronBackCircleOutline
//             onClick={() => Nav("/getstarted")}
//             className="size-10 text-sky-700 cursor-pointer hover:text-[#E45E32]"
//           />
//         </div>
//         <div className="w-130">
//           <img
//             src={Pic}
//             alt="Couldn't render Image"
//             className="w-full object-contain overflow-hidden"
//           />
//         </div>
//       </div>
//       <form
//         className="w-full h-full p-10 bg-sky-700 flex justify-center items-center"
//         onSubmit={handleSubmit}
//       >
//         <div>
//           <div className="w-full flex justify-center items-center mb-5">
//             <div className="w-full mt-10 flex justify-center items-center">
//               <div className="w-35 ">
//                 <img
//                   src={Logo}
//                   alt="Logo"
//                   className="size-full object-contain overflow-hidden"
//                 />
//               </div>
//             </div>
//           </div>
//           <h1 className="text-3xl mb-[5px] text-[#012047] font-bold">
//             Pharmacy Login
//           </h1>
//           <p className="mb-[15px] text-[#E7E6DD]">
//             Provide your information to login.
//           </p>
//           <div className="mb-3">
//             <label className="block text-white font-bold">Email</label>
//             <input
//               onChange={handleChange}
//               type="email"
//               name="email"
//               className="border px-2 text-white border-[#E7E6DD] w-full rounded-[3px] p-[3px]"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-white font-bold">Password</label>
//             <input
//               onChange={handleChange}
//               type="password"
//               name="password"
//               className="border px-2 text-white border-[#E7E6DD] w-full rounded-[3px] p-[3px]"
//               required
//             />
//           </div>
//           <div className="w-full mt-5 flex justify-center items-center">
//             <Button text="Login" isLoading={isLoading} />
//           </div>
//           <p onClick={() => Nav("/forgetpassword")} className="text-center mt-3">
//             Forgot Password?{" "}
//             <span className="text-[#E7E6DD] cursor-pointer hover:text-[#E45E32]">
//               Click Here
//             </span>
//           </p>
//           {errorMessage && (
//             <p className="text-red-500 text-sm">{errorMessage}</p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PharmacySignin;


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2"; // Import SweetAlert
import Pic from "../assets/signUp/signupPic.webp";
import Logo from "../assets/flexi-logo.png";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import Button from "../Components/Button/Button";
import { addUser } from "../services/userSlice";

const PharmacySignin = () => {
  const Nav = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://flexicarebackend.onrender.com/api/pharmacy/signin",
        values
      );

      console.log(response.data);
      localStorage.setItem("currentUser", JSON.stringify(response.data.data));

      dispatch(addUser(response.data.data));

      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        confirmButtonColor: "#3085d6",
      });

      Nav("/userdashboard"); // Redirect to dashboard on success
    } catch (error) {
      console.error(error);

      // Show error alert
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password. Please try again.",
        confirmButtonColor: "#d33",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-screen flex justify-center items-center h-screen">
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
      <form
        className="w-full h-full p-10 bg-sky-700 flex justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="w-full flex justify-center items-center mb-5">
            <div className="w-full mt-10 flex justify-center items-center">
              <div className="w-35 ">
                <img
                  src={Logo}
                  alt="Logo"
                  className="size-full object-contain overflow-hidden"
                />
              </div>
            </div>
          </div>
          <h1 className="text-3xl mb-[5px] text-[#012047] font-bold">
            Pharmacy Login
          </h1>
          <p className="mb-[15px] text-[#E7E6DD]">
            Provide your information to login.
          </p>
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
            <Button text="Login" isLoading={isLoading} />
          </div>
          <p onClick={() => Nav("/forgetpassword")} className="text-center mt-3">
            Forgot Password?{" "}
            <span className="text-[#E7E6DD] cursor-pointer hover:text-[#E45E32]">
              Click Here
            </span>
          </p>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default PharmacySignin;
