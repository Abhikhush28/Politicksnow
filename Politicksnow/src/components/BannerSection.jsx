import React from "react";
const BannerSection = ({title, desc, btn, img}) => {
  return (
    <div className="w-[85%] mx-auto my-40">
      <div className="flex lg:flex-row flex-col md:justify-between md:gap-10">
        <img src={img} className="lg:w-1/2 rounded-2xl" alt="" />
        <div className="lg:w-1/2 mx-auto space-y-5">
          <h1 className=" text-[1.5rem] lg:text-[2rem] font-bold">
            {title}
          </h1>
          <p className="text-gray-500 ">
            {desc}
          </p>

          <button className="bg-[#14B789] text-white border-2 border-white rounded-3xl text-base font-bold w-40 py-3  hover:bg-[#535da1]  hover:shadow-2xl shadow-gray-900">
           {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
