import React from "react";
import logo from "../../public/assets/images/logo.png";
import { MdApartment } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaAt } from "react-icons/fa6";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { BsSendFill } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="bg-[#14B789] p-10">
      <div className=" w-[85%] mx-auto flex flex-col  gap-10 lg:gap-0 lg:flex-row">
        <div className="lg:w-1/3 flex flex-col gap-5">
          <img src={logo} className="w-52 h-16" alt="logo" />
          <p className="text-xs text-white">
            Learn more about PolitickNow Marketing's full-service political
            website packages and marketing services for your campaign
          </p>
          <h1 className="text-xl font-semibold text-white">Follow us</h1>
          <div className="flex text-white gap-3 pl-5 text-xl">
            <MdOutlineFacebook />
            <FaInstagram />
            <FaWhatsapp />
            <CiTwitter />
          </div>
        </div>

        {/* contact us */}
        <div className=" lg:w-1/3 flex flex-col gap-5">
          <div className="space-y-2">
            <h1 className="text-white text-xl text-nowrap font-semibold">
              Contact us
            </h1>
            <div className="border-b-2 border-violet-600 w-14"></div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center  gap-5">
              <MdApartment className="text-3xl text-orange-500" />{" "}
              <span className="text-white text-xl">Patna Bihar India</span>
            </div>
            <div className="flex items-center  gap-5">
              <MdOutlineWifiCalling3 className="text-3xl text-orange-500" />{" "}
              <span className="text-white text-xl">+91-7870165544</span>
            </div>

            <div className="flex items-center  gap-5">
              <FaAt className="text-3xl text-orange-500" />{" "}
              <span className="text-white text-xl">
                conatct@politicksnow.in
              </span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 flex flex-col gap-5">
          <div className="space-y-2">
            <h1 className="text-white text-xl text-nowrap font-semibold">
              Subscribe
            </h1>
            <div className="border-b-2 border-violet-600 w-14"></div>
          </div>
          <p className="text-xs text-white">
            Don't missto subscribe to our new feeds, kindly fill the form below
          </p>
          <div className="flex">
            <input
              type="email"
              className="bg-white w-52 lg:w-96 h-12 px-5 focus:outline-none"
              placeholder="Email Address"
            />
            <div className="bg-[#535da1] w-20 lg:w-12 flex justify-center cursor-pointers text-white items-center">
            <BsSendFill/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
