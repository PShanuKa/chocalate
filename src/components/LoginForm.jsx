import React, { useState } from "react";
import loginleftimg from "../assets/loginleft.png";
import Google from "../assets/google.png";
import Facebook from "../assets/facebook.png";
import Background from "../assets/background.png";
import { IoMailOutline } from "react-icons/io5";
import { GoEye } from "react-icons/go";
import { IoMdMail } from "react-icons/io";

const LoginForm = () => {
  const [formToggle, setFormToggle] = useState(false);

  const login = () => {
    setFormToggle(false);
  };

  const register = () => {
    setFormToggle(true);
  };

  return (
    <div>
      <div className="grid grid-cols-12 h-screen p-8">
        <div
          className="col-span-5 bg-cover hidden md:block"
          style={{ backgroundImage: `url(${loginleftimg})` }}
        ></div>

        <div className="md:col-span-7 col-span-12 p-10 bg-black text-white">
          <div className="grid grid-cols-2 ">
            <div onClick={login} className={`text-center text-white cursor-pointer text-[24px] md:text-[48px] font-medium  border border-[#772000] ${formToggle ? "" : "bg-[#772000]"}`}>
              LOGIN
            </div>
            <div onClick={register} className={`text-center cursor-pointer text-white text-[24px] md:text-[48px] font-medium  border border-[#772000] ${formToggle ? "bg-[#772000]" : ""}`}>
              REGISTER
            </div>
          </div>
          {/* Register Form  */}
          <div className={`${formToggle ? "" : "hidden"}`}>
            <p className="text-white mt-10">Enter Your Account Information:</p>
            <div>
              <div className="flex relative mt-10 items-center p-3 bg-gray-700 rounded-md">
                <div className="absolute rounded-md px-4 bg-white text-black font-bold translate-y-[-120%]">
                  First Name
                </div>
                <div className="border-r pr-2 h-5 items-center flex">
                  <IoMailOutline />
                </div>
                <input
                  type="text"
                  className="bg-transparent px-2 outline-none w-[80%]"
                  placeholder="First Name"
                />
              </div>
              <div className="flex relative mt-10 items-center p-3 bg-gray-700 rounded-md">
                <div className="absolute rounded-md px-4 bg-white text-black font-bold translate-y-[-120%]">
                  Last Name
                </div>
                <div className="border-r pr-2 h-5 items-center flex">
                  <IoMailOutline />
                </div>
                <input
                  type="text"
                  className="bg-transparent px-2 outline-none w-[80%]"
                  placeholder="Last Name"
                />
              </div>
             
              <div className="flex relative mt-10 items-center p-3 bg-gray-700 rounded-md">
                <div className="absolute rounded-md px-4 bg-white text-black font-bold translate-y-[-120%]">
                  Email Address
                </div>
                <div className="border-r pr-2 h-5 items-center flex">
                  <IoMailOutline />
                </div>
                <input
                  type="text"
                  className="bg-transparent px-2 outline-none w-[80%]"
                  placeholder="exampleavc@gmail.com"
                />
              </div>
              <div className="flex relative mt-10 items-center  p-3 bg-gray-700 rounded-md">
                <div className="flex items-center w-full">
                  <div className="absolute rounded-md px-4 bg-white text-black font-bold translate-y-[-120%]">
                    Password
                  </div>
                  <div className="border-r pr-2 h-5 items-center flex">
                    <IoMailOutline />
                  </div>
                  <input
                    type="text"
                    className="bg-transparent px-2 outline-none w-full"
                    placeholder="enter your password"
                  />
                </div>
                <GoEye className="" />
              </div>
              <div className="flex relative mt-10 items-center  p-3 bg-gray-700 rounded-md">
                <div className="flex items-center w-full">
                  <div className="absolute rounded-md px-4 bg-white text-black font-bold translate-y-[-120%]">
                    Confirm Password
                  </div>
                  <div className="border-r pr-2 h-5 items-center flex">
                    <IoMailOutline />
                  </div>
                  <input
                    type="text"
                    className="bg-transparent px-2 outline-none w-full"
                    placeholder="enter your password"
                  />
                </div>
                <GoEye className="" />
              </div>
              
              
              <button className="bg-[#772000] my-7 w-full p-3 rounded-md">
                RGISTER
              </button>
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <div className="border-b w-28"></div>
                  <p className="text-4xl">OR</p>
                  <div className="border-b w-28"></div>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="flex gap-3 items-center">
                  <img src={Google} className="w-[104px] h-[104px]" alt="" />
                  <img src={Facebook} className="w-[64px] h-[64px]" alt="" />
                </div>
                
              </div>
              <p className="text-center">
                Already Have An Account
                <span className="font-bold"> Sign in</span>
              </p>
            </div>
          </div>

          {/* Login Form  */}
          <div className={`${formToggle ? "hidden" : ""}`}>
            <p className="text-white mt-10">Enter Your Account Information:</p>
            <div>
              <div className="flex relative mt-10 items-center p-3 bg-gray-700 rounded-md">
                <div className="absolute rounded-md px-4 bg-white text-black font-bold translate-y-[-120%]">
                  Email Address
                </div>
                <div className="border-r pr-2 h-5 items-center flex">
                  <IoMailOutline />
                </div>
                <input
                  type="text"
                  className="bg-transparent px-2 outline-none w-[80%]"
                  placeholder="exampleavc@gmail.com"
                />
              </div>
              <div className="flex relative mt-10 items-center  p-3 bg-gray-700 rounded-md">
                <div className="flex items-center w-full">
                  <div className="absolute rounded-md px-4 bg-white text-black font-bold translate-y-[-120%]">
                    Password
                  </div>
                  <div className="border-r pr-2 h-5 items-center flex">
                    <IoMailOutline />
                  </div>
                  <input
                    type="text"
                    className="bg-transparent px-2 outline-none w-full"
                    placeholder="enter your password"
                  />
                </div>
                <GoEye className="" />
              </div>
              <div className="my-5 flex items-center gap-3">
                <IoMdMail />
                <p>Forgot Your Password?</p>
              </div>
              <p>
                If You Don't Have An Account, Please
                <span className="font-bold"> Register Here</span>
              </p>
              <button className="bg-[#772000] my-7 w-full p-3 rounded-md">
                LOGIN
              </button>
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <div className="border-b w-28"></div>
                  <p className="text-4xl">OR</p>
                  <div className="border-b w-28"></div>
                </div>
              </div>
              <div className="flex justify-center ">
                <div className="flex gap-3 items-center">
                  <img src={Google} className="w-[104px] h-[104px]" alt="" />
                  <img src={Facebook} className="w-[64px] h-[64px]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
