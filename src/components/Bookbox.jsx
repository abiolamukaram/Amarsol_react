import React, { useEffect } from "react";
import { FaCalendarDays } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";




const Bookbox = () => {

    useEffect(() => {
        AOS.init();
      }, []);
    



  return (
    <div
    className=" w-[350px] h-[50vh] p-6 tablet:w-[450px] tablet:h-[400px] tablet:p-14 laptop:w-[500px] laptop:h-[395px]  bg-white bg-opacity-85 laptop:p-16 rounded-2xl border-2 border-white space-y-3 z-10"
    data-aos="fade-up"
    data-aos-duration="600"
    data-aos-easing="ease-in-out"
  >
    <h1 className="text-4xl font-bold font-mainFont tablet:text-5xl">
      Your small business growth advisors
    </h1>
    <p className="text-base text-[#595566] font-mainFont">
      Get help from Alex Moore, a professional business coach with
      advanced experience on growth and business scaling.
    </p>
    <div className="flex gap-4">
      <button className=" px-3 laptop:px-6 py-3 bg-[#1F274F] text-white rounded-full font-mainFont">
        Our Services
      </button>
      <button className=" px-3 laptop:px-6 py-3 bg-white text-black rounded-full flex gap-2 items-center font-mainFont border">
        {" "}
        <span className="p-2 bg-yellow-500 rounded-full text-white">
          <FaCalendarDays />
        </span>{" "}
        Book a Meeting
      </button>
    </div>
  </div>

  )
}

export default Bookbox