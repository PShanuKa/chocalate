import React from "react";
import HeadreBg from "../assets/HeadreBg.png";
import { GoDotFill } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa6";

const Header = () => {
  return (
    <div
      className="bg-cover w-full h-[548px] flex items-center justify-center"
      style={{ backgroundImage: `url(${HeadreBg})` }}
    >
      <div className="text-white items-center flex flex-col">
        <h1 className="text-[64px] text-center">CHOCOLATE BLISS AWAITS LOGIN!</h1>
        <div className="border-b border-white w-[200px] pt-[15px]"></div>
        <div className="flex gap-6 items-center pt-[30px]">
            <div className="flex items-center gap-2"><GoDotFill className="hidden md:block" size={25}/><p className="text-[24px]">HOME</p></div>
            <div className="flex items-center gap-2"><GoDotFill className="hidden md:block" size={25}/><FaChevronRight className="md:hidden" size={25}/><p className="text-[24px]">LOGIN</p></div>
        </div>
      </div>
    </div>
  );
};

export default Header;