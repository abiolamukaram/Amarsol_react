import React from "react";
import Navbar from "../Navbar";
import auditIcon from "../../assets/img/auditIcon.png";
import financeRe from "../../assets/img/financeRe.svg";
import financialPro from "../../assets/img/financialPro.svg";
import fundsIcons from "../../assets/img/fundsIcons.svg";
import taxesIcon from  "../../assets/img/taxesIcon.svg";
import invesmentIcon from "../../assets/img/investmentIcon.svg"
import Footer from "../Footer";

const Services = () => {
  return (
    <>
      <Navbar />
      <main className="bg-serviceBG bg-cover bg-no-repeat w-full h-[70vh] overflow-hidden">
        <div className="container mx-auto flex justify-center tablet:justify-start laptop:justify-start items-center h-[70vh]">
          <div className="w-[350px] h-[50vh]  tablet:w-[450px] tablet:h-[400px] tablet:p-14 laptop:w-[550px] laptop:h-[180px] laptop:p-10 laptop:m-40 bg-white bg-opacity-85 border-2 rounded-2xl  border-white space-y-3">
            <button className=" text-[#595566] font-mainFont border-color3 mx-2 px-3 rounded-xl bg-color3">
              Services
            </button>
            <h1 className="text-4xl font-bold font-mainFont tablet:text-5xl laptop:text-3xl">
              Creative Services For Boost Your Business Growth
            </h1>
          </div>
        </div>
      </main>

      {/* <div className="w-full h-[90vh] bg-color4">
       <div className="text-center pt-[90px] space-y-3">
       <button className="text-[#595566] font-mainFont border-color3 mx-2 px-3 rounded-xl bg-color6">Services</button>
       <h1 className="text-4xl font-bold font-mainFont tablet:text-5xl laptop:text-3xl">Get Control Over Your Business I take <br /> your finance to next level</h1>
       </div>

      </div> */}

            {/* our services start */}
            <section className="w-full py-20 laptop:py-24 bg-color4">
        <div className="container mx-auto">
          <div className="px-80 space-y-3">
            <h4 className="uppercase text-center font-mainFont">our services</h4>
            <h1 className="text-center text-4xl font-mainFont font-bold">
              Get Control Over Your Business I take your finance to next level
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div className="grid-flow-col p-14 bg-color5 rounded-md space-y-2 group hover:bg-color2">
              <img src={auditIcon} alt="" />
              <h1 className="text-2xl font-bold font-mainFont group-hover:text-white ">
              Audit & Evaluation
              </h1>
              <p className="text-base text-color1 font-mainFont group-hover:text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                voluptatem doloremque laboriosam ratione fuga dolor quod ipsum
                laudantium eius eveniet.
              </p>
            </div>

            <div className="grid-flow-col p-14 bg-color2 rounded-md space-y-2 group hover:bg-color6">
              <img src={financialPro} alt="" />
              <h1 className="text-2xl font-bold font-mainFont text-white group-hover:text-white ">
              Financial Projections
              </h1>
              <p className="text-base text-white font-mainFont group-hover:text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                voluptatem doloremque laboriosam ratione fuga dolor quod ipsum
                laudantium eius eveniet.
              </p>
            </div>

            <div className="grid-flow-col p-14 bg-color5 rounded-md space-y-2 group hover:bg-color2">
              <img src={fundsIcons} alt="" />
              <h1 className="text-2xl font-bold font-mainFont group-hover:text-white ">
              Funds and investments
              </h1>
              <p className="text-base text-color1 font-mainFont group-hover:text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                voluptatem doloremque laboriosam ratione fuga dolor quod ipsum
                laudantium eius eveniet.
              </p>
            </div>

            <div className="grid-flow-col p-14 bg-color5 rounded-md space-y-2 group hover:bg-color2">
              <img src={financeRe} alt="" />
              <h1 className="text-2xl font-bold font-mainFont group-hover:text-white ">
              Finance & Restructuring
              </h1>
              <p className="text-base text-color1 font-mainFont group-hover:text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                voluptatem doloremque laboriosam ratione fuga dolor quod ipsum
                laudantium eius eveniet.
              </p>
            </div>

            <div className="grid-flow-col p-14 bg-color5 rounded-md space-y-2 group hover:bg-color2">
              <img src={taxesIcon} alt="" />
              <h1 className="text-3xl font-bold font-mainFont group-hover:text-white ">
              Taxes & Efficiency
              </h1>
              <p className="text-base text-color1 font-mainFont group-hover:text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                voluptatem doloremque laboriosam ratione fuga dolor quod ipsum
                laudantium eius eveniet.
              </p>
            </div>

            <div className="grid-flow-col p-14 bg-color5 rounded-md space-y-2 group hover:bg-color2">
              <img src={invesmentIcon} alt="" />
              <h1 className="text-2xl font-bold font-mainFont group-hover:text-white ">
              Investment banking
              </h1>
              <p className="text-base text-color1 font-mainFont group-hover:text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                voluptatem doloremque laboriosam ratione fuga dolor quod ipsum
                laudantium eius eveniet.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* our services end */}

      <section className="w-full h-[90vh] bg-color5">
        <div className="grid grid-cols-2 items-center justify-between pt-28 mx-16">
        <div className="">
          <img className="" src="/Image2.png" alt="" />
        </div>
        <div>
          <button className="text-[#595566] font-mainFont border-color3 mx-2 px-3 rounded-xl bg-color3">Process</button>
          <h6 className="text-4xl font-bold font-mainFont tablet:text-5xl laptop:text-5xl">Our Consuting Service Development</h6>
          <div className="flex gap-3">
            <img className="" src="/Vector.png" alt="" />
            <p className="font-mainFont text-2xl">Banking and Finance</p>
          </div>
          <div>
            <h1 className="text-xl font-mainFont text-[#595566] ">Professionally fashion wireless leadership rather than prospective experiences my cardinate clicks-and-mortar testing whereas.</h1>
          </div>
        </div>
        </div>
      </section>


      <Footer />

    </>
  );
};

export default Services;
