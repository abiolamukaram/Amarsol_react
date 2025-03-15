import { useEffect } from "react";
import { FaCalendarDays } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import resultImg from "../../assets/img/s3Img.png";
import aboutImg from "../../assets/img/aboutImg.png";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import auditIcon from "../../assets/img/auditIcon.png";
import financeRe from "../../assets/img/financeRe.svg";
import financialPro from "../../assets/img/financialPro.svg";
import fundsIcons from "../../assets/img/fundsIcons.svg";
import taxesIcon from "../../assets/img/taxesIcon.svg";
import invesmentIcon from "../../assets/img/investmentIcon.svg";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-heroBG bg-cover bg-no-repeat w-full h-[80vh] overflow-hidden">
        <div className="container mx-auto flex justify-center tablet:justify-start laptop:justify-start items-center h-[70vh]">
          <div className="w-[350px] h-[50vh] p-6 tablet:w-[450px] tablet:h-[400px] tablet:p-14 laptop:w-[500px] laptop:h-[395px] laptop:p-16  bg-white bg-opacity-85 border-2 rounded-2xl  border-white space-y-3">
            <h1 className="text-4xl font-bold font-mainFont tablet:text-5xl">
              Your small business growth advisors
            </h1>
            <p className="text-base text-[#595566] font-mainFont">
              Get help from Alex Moore, a professional business coach with
              advanced experience on growth and business scaling.
            </p>
            <div className="flex gap-4">
              <Link to="/services">
                <button className=" px-3 laptop:px-6 py-3 bg-[#1F274F] text-white rounded-full font-mainFont">
                  Our Services
                </button>
              </Link>
              <Link to='/services'>
                <button className=" px-3 laptop:px-6 py-3 bg-white text-black rounded-full flex gap-2 items-center font-mainFont border">
                  {" "}
                  <span className="p-2 bg-[#FFCC4A] rounded-full">
                    <FaCalendarDays />
                  </span>{" "}
                  Book a Meeting
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}

      {/* Services section start */}
      <section className="w-full mt-16">
        <div className="container mx-auto px-5 grid grid-row gap-6 laptop:px-0 laptop:grid-cols-3 laptop:gap-8">
          <div className="grid-flow-col h-[470px] bg-gray-300 bg-serviceOne bg-cover bg-no-repeat px-10 pb-16 rounded-2xl space-y-3">
            <h1 className="mt-60 text-2xl font-bold font-mainFont">
              Finance & Restructuring
            </h1>
            <p className="text-[#595566] font-mainFont text-base">
              Get help from Alex Moore, a professional business coach with
              advanced experience on growth and business scaling.{" "}
            </p>
            <button className="px-7 py-3 bg-white rounded-full font-mainFont">
              Our Services
            </button>
          </div>

          <div className="grid-flow-col h-[470px] bg-gray-300 bg-serviceTwo bg-cover bg-no-repeat px-10 pb-16 rounded-2xl space-y-3">
            <h1 className="mt-60 text-2xl font-bold font-mainFont">
              Our Approach
            </h1>
            <p className="text-[#595566] font-mainFont text-base">
              Get help from Alex Moore, a professional business coach with
              advanced experience on growth and business scaling.{" "}
            </p>
            <button className="px-7 py-3 bg-white rounded-full font-mainFont">
              Our Services
            </button>
          </div>

          <div className="grid-flow-col h-[470px] bg-[#1F274F] px-10 pb-16 rounded-2xl space-y-3">
            <img src={resultImg} alt="" className="mb-12" />
            <h1 className="mt-64 text-2xl font-bold font-mainFont text-white ">
              Consultalk Result
            </h1>
            <p className="text-white font-mainFont text-base">
              Get help from Alex Moore, a professional business coach with
              advanced experience on growth and business scaling.{" "}
            </p>
            <button className="px-7 py-3 bg-white bg-opacity-10 rounded-full font-mainFont text-white">
              Explore Our Solution
            </button>
          </div>
        </div>
      </section>

      {/* Services section start */}

      {/* About section start */}
      <section className="w-full py-20 laptop:py-32">
        <div className="container mx-auto px-5 laptop:px-0 flex flex-col laptop:flex-row justify-between items-center gap-6">
          <div className="space-y-4 flex-[50%] laptop:pr-10 ">
            <h4 className="border-b-8 border-[#FFCC4A] w-32  line-clamp-2 uppercase">
              About us
            </h4>
            <h1 className="text-5xl font-bold font-mainFont">
              About our Consuting Agency Team
            </h1>
            <h3 className="text-2xl font-semibold font-mainFont">
              We create experiences and build products that make business grow
            </h3>
            <p className="text-color1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              fugiat error, debitis perspiciatis corrupti autem totam nemo
              placeat molestias eveniet quia ut at facilis voluptate qui? Veniam
              accusantium quo fugiat dolore exercitationem quae similique qui
              vitae ut, nemo neque omnis.
            </p>
            <br />
            <br />
            <hr className="border" />
            <h4 className="flex items-center gap-3 text-xl font-mainFont font-semibold">
              {" "}
              <span className="p-2 rounded-full bg-color3 bg-opacity-20 text-color3">
                <MdEmail />
              </span>{" "}
              info@amarsorl.com
            </h4>

            <hr className="border" />
            <h4 className="flex items-center gap-3 text-xl font-mainFont font-semibold">
              {" "}
              <span className="p-2 rounded-full bg-color2 bg-opacity-20 text-color2">
                <MdLocalPhone />
              </span>{" "}
              +234 703 053 8243
            </h4>
          </div>

          <div className="flex-[50%] ">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </section>
      {/* About section end */}

      {/* our services start */}
      <section className="w-full py-20 laptop:py-32 bg-color4">
        <div className="container mx-auto">
          <div className="px-80 space-y-3">
            <h4 className="uppercase text-center font-mainFont">
              our services
            </h4>
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
    </>
  );
};

export default Home;
