import React from "react";
import { FaRegHeart, FaTiktok, FaYoutube , FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


const Footer = () => {
  return (
    <div className="  ">
        {/* footer 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
        <div>
          <h1 className="text-4xl pb-10">CHOCALAT</h1>
          <p className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to
          </p>
          <div className="p-3">
          <p>printer took@gamil.com</p>
          <p>07123456789</p>
          <p>124, standard, dummy, </p>
          </div>
        </div>
        <div>
          <h1 className="text-4xl pb-10">QUICK LINKS</h1>
          <div className="gap-3 flex flex-col">
            <p>Text 01</p>
            <p>Text 01</p>
            <p>Text 01</p>
            <p>Text 01</p>
            <p>Text 01</p>
          </div>
        </div>
        <div>
          <h1 className="text-4xl pb-10">COLLECTIONS</h1>
          <div className="gap-3 flex flex-col">
            <p>Text 01</p>
            <p>Text 01</p>
            <p>Text 01</p>
            <p>Text 01</p>
            <p>Text 01</p>
          </div>
        </div>
        <div>
          <h1 className="text-4xl pb-10">NEWSLETTER</h1>
          <p>Welcome To Our Chocolate Haven, Where Passion Meets Prefection</p>
            <div className="flex mt-[20px]">
                <div className="border-b">
                <input type="text" placeholder="Enter Your Email"/>
                </div>
                <button className="border border-black py-2 px-5">SEND</button>
            </div>
        </div>
      </div>
      {/* footer 1 */}
      <div className="flex justify-between">
        <div className="flex flex-row gap-2 p-1">
            <div className="p-1 border-r border-black"><p>2020 All Right Received.</p></div>
            <div className="p-1 border-r border-black"><p>Teams & Conditions</p></div>
            <div className="p-1 border-r border-black"><p>Privacy Policy.</p></div>
            <div className="p-1 border-r "><p>Site Map.</p></div>
        </div>
        <div className="p-3">
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
    </div>
  );
};

export default Footer;
