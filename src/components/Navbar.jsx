import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { LuUser2 } from "react-icons/lu";
import { PiPopcorn } from "react-icons/pi";
import { FaRegHeart, FaTiktok, FaYoutube , FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggleMenu = () => {
      setToggleMenu((prevToggleMenu) => !prevToggleMenu);
    };

  return (
    <div className="">
      <div className="flex justify-between items-center h-[90px] max-w-[1440px] mx-auto px-[24px] py-[16px] text-white">
        <div className="w-[736px] h-[42px] flex md:justify-between items-center">
          <div onClick={handleToggleMenu} className="border md:hidden border-white rounded-full p-2 mr-4">
            <IoMdMenu size={36} />
          </div>
          <div className="md:flex hidden gap-10 items-center font-semibold overflow-hidden ">
            <Link>Test1</Link>
            <Link>Test2</Link>
            <Link>Test3</Link>
            <Link>Test4</Link>
            <Link>Test5</Link>
          </div>
          <h1 className="md:text-[36px] text-[24px] font-bold">CHOCALATE</h1>
        </div>

        <div className="flex w-[300px] h-[36px] items-center gap-[16px]">
          <CiSearch size={36} className="hidden md:block" />

          <div className=" flex-row items-center gap-3 hidden md:flex">
            <p>Login</p>
            <div className="border-2 p-1 rounded-full border-white">
              <LuUser2 size={24} />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div>
              <PiPopcorn size={36} />
            </div>
            <div>
              <p>02</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="">
              <FaRegHeart size={36} />
            </div>
            <div>
              <p>02</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`fixed  top-0 left-0 bottom-0 px-5 w-[300px] text-white bg-[#121212] pt-[60px] justify-center duration-200 ease-in-out ${toggleMenu ?"translate-x-[0%]":"translate-x-[-100%]" }`}>
        <div className="flex justify-between  items-center ">
          <p className="text-[24px] ">CHOCOLAT</p>
          <div onClick={handleToggleMenu} className=" border  border-white rounded-full">
            <MdClose size={24} />
          </div>
        </div>
        <div className="flex gap-3 bg-[#E9E9E9] mt-10 p-2 rounded-xl">
          <IoSearch size={36} className="text-black" />
          <input
            type="text"
            placeholder="Search"
            className="text-black placeholder-[black] bg-transparent outline-none"
          />
        </div>
        <div className="text-white flex flex-col gap-[8px] mt-3 p-3">
          <Link>Test1</Link>
          <Link>Test2</Link>
          <Link>Test3</Link>
          <Link>Test4</Link>
          <Link>Test5</Link>
        </div>
        <button className="bg-[#772000] mt-3 py-[5px] h-[36px] px-[10px] w-full rounded-md">
          SIGN UP OR LOGIN
        </button>
        <div className="mt-10 py-10 border-t">
          <p>Wishlist</p>
          <p>FAQ</p>
          <p>TERMS & CONDITIONS</p>
        </div>
        <div className="flex gap-2 justify-center">
          <div className="bg-white p-1 rounded-full">
            <FaTiktok className="text-black"/>
          </div>
          <div className="bg-white p-1 rounded-full">
            <FaYoutube className="text-black"/>
          </div >
          <div className="bg-white p-1 rounded-full">
            <FaFacebookF className="text-black"/>
          </div>
          <div className="bg-white p-1 rounded-full">
            <RiInstagramFill className="text-black"/>
          </div>
          <div className="bg-white p-1 rounded-full">
            <FaTwitter className="text-black"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
