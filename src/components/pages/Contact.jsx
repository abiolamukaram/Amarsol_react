// import React from 'react'
import Navbar from "../Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <img src="./src/assets/img/bgphoto.png" alt="" />
        <div className="bg-white border opacity-0.85 w-[350px] h-auto p-10 absolute bottom-28 left-56 rounded-xl opacity-75">
          <p className="bg-[#FFCC4A] w-[150px] h-[20px] rounded-lg text-l text-center">
            Contact Us
          </p>
          <p className="text-2xl text-black">Feel Free To Reach Us</p>
        </div>
      </div>
      <div className="w-[75%] border mt-20 mx-auto flex justify-between p-2">
        <img className="w-[450px]" src="./src/assets/img/image2.png" alt="" />
        <div className="flex flex-col justify-center p-4">
          <h2>Let’s talk</h2>
          <h1 className="text-3xl text-[#181818] font-bold">
            Get In Touch With Us
          </h1>
          <p className="text-[#595566]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="">
            <div className="flex items-center gap-4 w-[300px] h-auto ">
              <img className="w-8" src="./src/assets/img/icon8.png" alt="" />
              <div className="text-sm">
                <p className="text-[#595566]">Have Any Question?</p>
                <p className="text-[#181818] font-bold">Free +01 238 543 987</p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-[300px] h-auto ">
              <img className="w-8" src="./src/assets/img/icon9.png" alt="" />
              <div className="text-sm">
                <p className="text-[#595566]">Write Email</p>
                <p className="text-[#181818] font-bold">Info@consultalk.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 w-[300px] h-auto ">
              <img className="w-8" src="./src/assets/img/icon10.png" alt="" />
              <div className="text-sm">
                <p className="text-[#595566]">Visit Anytime</p>
                <p className="text-[#181818] font-bold">
                  King Street, Prior Lake, New York.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex relative bg-black rounded-3xl w-[75%] h-auto p-4 mx-auto mt-20 ">
        <div className="right-20 h-[100px] flex pl-28 gap-2 my-[60px] items-center">
          <div className="text-white text-xl py-4">
            <h1>Subscribe Our Newsletter</h1>
            <p className="text-xs">
              Build stronger Customer Relationships with Consultalk
            </p>
          </div>
          <div className="flex w-[500px] p-[20px] gap-4">
            <input
              className="w-[250px] h-[40px] rounded-full p-4"
              type="email"
              placeholder="your email address"
            />
            <button className="bg-[#FFCC4A] w-[150px] h-[40px] rounded-full">
              Subscribe
            </button>
          </div>
        </div>
        {/* <img
          className="absolute right-0 top-0 bottom-0"
          src="./src/assets/img/Background.png"
          alt=""
        /> */}
      </div>
      <div className="flex justify-between mt-20 w-[75%] mx-auto h-[400px]">
        <div className="space-y-10 p-4 w-1/2">
          <div className="space-y-2">
            <h4 className="rounded-full bg-[#FFCC4A] w-[100px] text-center  ">
              Proccess
            </h4>
            <h1 className="text-[#181818] text-2xl font-bold">Contact Us</h1>
            <p className="text-[#595566]">
              Leverage agile frameworks to provide a robust synopsis <br />
              for high level overviews. Iterative approaches to <br />
              corporate strategy foster collaborative.
            </p>
          </div>
          <div className="space-y-4 w-[250px] h-[200px]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#FFECBB] p-2">
                <IoCallOutline />
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm">
                  <p className="text-[#595566]">Call Today</p>
                  <p className="text-[#181818] font-bold">+1 800 100 900</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#A4EDA4] p-2">
                <CiClock2 />
              </div>
              <div className="">
                <div className="text-sm">
                  <p className="text-[#595566]">Monday To Friday</p>
                  <p className="text-[#181818] font-bold">9AM - 5PM</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#EAEAEA] p-2">
                <FaLocationDot />
              </div>
              <div>
                <div className="text-sm">
                  <p className="text-[#595566]">USA Office</p>
                  <p className="text-[#181818] font-bold">
                    195 Devonshire St Boston, MA 02110
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className="py-2 px-8 w-[60%] space-y-8" action="">
          <div className="flex gap-2">
            <div>
              <h5>Full Name</h5>
              <input
                className="border p-2 rounded-full w-[300px]"
                type="text"
                placeholder="john david"
              />
            </div>
            <div>
              <h5>Email</h5>
              <input
                className="border p-2 rounded-full"
                type="email"
                placeholder="consult@gmail.com"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <h5>Phone</h5>
              <input
                className="border p-2 rounded-full"
                type="number"
                placeholder="+008 654 231"
              />
            </div>
            <div>
              <h5>Company(optional)</h5>
              <input
                className="border p-2 rounded-full"
                type="text"
                placeholder="yourcompany.com"
              />
            </div>
          </div>
          <div>
            <p>Message</p>
            <input
              className="border p-2 w-[400px] h-[100px] text-center"
              type="text"
              placeholder="Briefly tell us about your project and your current goals. How can we help you?"
            />
          </div>
          <button className="text-white bg-[#181818] rounded-full w-40 h-10">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
