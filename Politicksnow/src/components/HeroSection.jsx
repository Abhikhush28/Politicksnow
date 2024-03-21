import React from "react";
import bg from "../../public/assets/image.svg";
import logo from "../../public/assets/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const HeroSection = () => {
  return (

     <div className="bg-[url(/assets/background.svg)] ">
      {/* navBar for laptop */}
      <nav className=" hidden lg:flex container w-[85%] mx-auto px-6 py-7  justify-between items-center">
        <div className="flex space-x-10 items-center justify-center">
          <img alt="Logo" className="h-10 w-40" src={logo} />
          <a
            className="text-white hover:text-green-400 hover:border-b-2 hover:border-green-400"
            href="#"
          >
            HOME
          </a>
          <a className="text-white hover:text-gray-300" href="#">
            SERVICES
          </a>
          <a className="text-white hover:text-gray-300" href="#">
            PRODUCT
          </a>
          <a className="text-white hover:text-gray-300" href="#">
            ABOUT US
          </a>
          <a className="text-white hover:text-gray-300" href="#">
            CONTACT
          </a>
        </div>
        <button className="bg-transparent text-white border-2 border-white rounded-3xl text-xl font-semibold w-44 py-2 hover:bg-white hover:text-green-400">
          Get Consulting
        </button>
      </nav>
      {/* navBar for phone */}
      <nav className=" lg:hidden sticky top-5 rounded-3xl flex container w-[90%] mx-auto px-6 py-4   bg-white justify-between items-center">
        <div className="flex items-center justify-between gap-3">
          <RxHamburgerMenu className="text-3xl" />
          <img alt="Logo" className="h-10 w-30" src={logo} />
        </div>
        <button className="bg-transparent text-green-400 border-2 border-green-400 rounded-3xl text-sm font-semibold w-30 p-2 hover:border-white hover:text-green-400">
          Get Consulting
        </button>
      </nav>
      <div className="container w-[85%] mx-auto lg:px-6  py-10 md:py-7 lg:py-20 flex flex-col  lg:flex-row justify-between gap-10 items-center">
        <div className="max-w-xl md:space-y-6 space-y-7">
          <h1 className=" text-3xl md:text-4xl font-semibold text-white">
            Get Scalable Digital Marketing Solutions to Win Your Political
            Campaign
          </h1>
          <p className="text-lg font-semibold text-white">
            We'll help you reach and engage targeted voters online
          </p>
          <button className=" bg-[#535da1] text-white hover:bg-[#51cfa1] rounded-full  font-bold w-36 h-14">
            Let's Begin
          </button>
        </div>
        <img className="lg:h-96 lg:w-[35rem]" src={bg} />
      </div>
    </div>
      

  )
}

export default HeroSection
