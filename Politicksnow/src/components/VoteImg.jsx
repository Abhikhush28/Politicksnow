import React from "react";
import sectionPlay from "../../public/assets/images/sectionplay.jpeg";
import megaphone from "../../public/assets/images/megaphone.png";

const VoteImg = () => {
  return (
    <div className="w-[85%] mx-auto my-20">
      <div className="flex lg:flex-row flex-col items-center md:justify-between md:gap-10">
        <img src={sectionPlay} className="lg:w-1/2 rounded-2xl" alt="" />
        <div className="lg:w-1/2 mx-auto space-y-5">
          <h1 className=" text-[1.5rem] lg:text-[2rem] font-bold">
            Your Voters Are Online, You Should Be Too!
          </h1>
          <p className="text-gray-500 ">
            With 20+ years of experience and expertise, Politicks Now has proven
            marketing solutions that reach, engage, and influence your
            supporters so you get the votes you need to win.
          </p>

          <div className=" grid grid-cols-3 gap-2 lg:gap-5">
           {/* card 1 */}
            <div className="bg-[#727aab] rounded-lg p-4 text-center flex flex-col items-center text-white">
              <div className="text-4xl font-bold">330+</div>
              <div className="text-sm">M</div>
              <div className="text-xl font-semibold mt-2">Views</div>
              <img src={megaphone} alt="" />
            </div>

             {/* card 2 */}
             <div className="bg-[#727aab] rounded-lg p-4 text-center flex flex-col items-center text-white">
              <div className="text-4xl font-bold">330+</div>
              <div className="text-sm">M</div>
              <div className="text-xl font-semibold mt-2">Views</div>
              <img src={megaphone} alt="" />
            </div>

             {/* card 3 */}
             <div className="bg-[#727aab] rounded-lg p-4 text-center flex flex-col items-center text-white">
              <div className="text-4xl font-bold">330+</div>
              <div className="text-sm">M</div>
              <div className="text-xl font-semibold mt-2">Views</div>
              <img src={megaphone} alt="" />
            </div>
          </div>

          <button className="bg-[#14B789] text-white border-2 border-white rounded-3xl text-lg font-bold w-44 py-2.5  hover:bg-[#535da1]  hover:shadow-2xl shadow-gray-900">
          Get Consulting
        </button>
        </div>
      </div>
    </div>
  );
};

export default VoteImg;
