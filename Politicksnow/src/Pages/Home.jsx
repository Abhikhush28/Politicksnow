import HeroSection from "../components/HeroSection";
import VoteImg from "../components/VoteImg";
import megaphone from "../assets/images/marketing.png";
import BannerSection from "../components/BannerSection";
import BannerSection2 from "../components/BannerSection2";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <VoteImg />
      <BannerSection
        title={"Voter Outreach and Engagement Solutions"}
        desc={
          "Increase support for your campaign or organization with all-inclusive packages featuring 100% managed email, text messaging, digital ad and design services that help you reach voters."
        }
        btn={"View Solutions"}
        img={"../src/assets/images/section2.jpg"}
      />
      <BannerSection2
        title={"Political Advertising Services for Winning Campaigns"}
        desc={
          "Quickly increase your visibility with targeted marketing services to help your political campaign succeed. Politicks Now offers scalable services from design to digital ads managed on behalf so that you can focus on winning your campaign."
        }
        btn={"View Services"}
        img={"../src/assets/images/section3.jpeg"}
      />
      <BannerSection
        title={"Establish your political presence with your own website"}
        desc={
          "We create high-visibility campaign websites that set you apart from other candidates and beautifully displays your campaign message online. No need to spend hours with do-it-yourself website builders."
        }
        btn={"Get Started"}
        img={"../src/assets/images/section4.png"}
      />

      <div className="bg-[#535da1] text-center flex items-center justify-center lg:text-3xl font-bold text-white  py-14 lg:py-28">
        Winning an election starts with <br />
        reaching, engaging, and influencing voters online.
      </div>

      <div className="w-[85%] mx-auto my-40 space-y-10">
        <div className="bg-[#14B789] text-center flex gap-2 text-white flex-col py-5 justify-center items-cente rounded-3xl">
          <h1 className=" text-2xl lg:text-5xl font-semibold">
            Why Political Candidates Trust Us
          </h1>
          <p className="text-sm">
            Here Are The Primary Reasons Why EnSpot Political Is A Trusted
            Partner For Political Campaiging.
          </p>
        </div>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5  px-5 lg:px-28 py-5 mx-auto bg-gray-100 rounded-3xl">
          {/* card 1 */}
          <div className=" shadow-sm  px-5 hover:shadow-2xl hover:shadow-blue-950 bg-white  rounded-md py-20 text-center gap-10 flex flex-col items-center ">
            <div className="border-2 border-[#14B789] rounded-full w-32 h-32 flex justify-center items-center">
              <img src={megaphone} className=" w-10" alt="" />
            </div>
            <div className=" text-wrap font-bold">
              Experienced Marketing Professionals
            </div>
            <div className="text-xs text-gray-500">
              Get a dedicated team of experts who know exactly how to get votes
              for your campaign.
            </div>
          </div>
          {/* card 2 */}
          <div className=" shadow-sm  px-5 hover:shadow-2xl hover:shadow-blue-950 bg-white  rounded-md py-20 text-center gap-10 flex flex-col items-center ">
            <div className="border-2 border-[#14B789] rounded-full w-32 h-32 flex justify-center items-center">
              <img src={megaphone} className=" w-10" alt="" />
            </div>
            <div className=" text-wrap font-bold">
              Experienced Marketing Professionals
            </div>
            <div className="text-xs text-gray-500">
              Get a dedicated team of experts who know exactly how to get votes
              for your campaign.
            </div>
          </div>

          {/* card 3 */}
          <div className=" shadow-sm  px-5 hover:shadow-2xl hover:shadow-blue-950 bg-white  rounded-md py-20 text-center gap-10 flex flex-col items-center ">
            <div className="border-2 border-[#14B789] rounded-full w-32 h-32 flex justify-center items-center">
              <img src={megaphone} className=" w-10" alt="" />
            </div>
            <div className=" text-wrap font-bold">
              Experienced Marketing Professionals
            </div>
            <div className="text-xs text-gray-500">
              Get a dedicated team of experts who know exactly how to get votes
              for your campaign.
            </div>
          </div>
        </div>
      </div>

      <div className="w-[85%] mx-auto my-40 space-y-32 lg:space-y-52">
        <div className="bg-[#14B789] text-center flex gap-2 text-white flex-col py-5 justify-center items-cente rounded-3xl">
          <h1 className=" text-2xl lg:text-5xl font-semibold">
            Be Equipped with the Right Resources
          </h1>
          <p className="text-sm">
            Everything And Anything You Need To Know About EnSpot Political And
            Campaigning In The Digital Space Is Just A Click Away.
          </p>
        </div>
        <div className=" grid md:grid-cols-2 gap-32 lg:gap-5  px-5 lg:px-64 py-5">
          {/* card 1 */}
          <div className="relative">
            <img
              src="../src/assets/images/image.png"
              className="absolute bottom-20 duration-200 hover:bottom-40 lg:hover:bottom-36"
              alt=""
            />
            <div className=" shadow-2xl shadow-gray-900  px-5  bg-white  rounded-md flex flex-col justify-start py-5 gap-3 ">
              <div>
                Find out more about our services and learn about our winning
                solutions.
              </div>
              <button className="bg-[#14B789] text-white border-2 border-white rounded-3xl text-base font-bold w-40 py-3  hover:bg-[#535da1]  hover:shadow-2xl shadow-gray-900">
                Download Now
              </button>
            </div>
          </div>

          {/* card 2 */}
          <div className="relative">
            <img
              src="../src/assets/images/image.png"
              className="absolute bottom-20 duration-200  hover:bottom-40 lg:hover:bottom-36"
              alt=""
            />
            <div className=" shadow-2xl shadow-gray-900  px-5  bg-white  rounded-md flex flex-col justify-start py-5 gap-3 ">
              <div>
                Find out more about our services and learn about our winning
                solutions.
              </div>
              <button className="bg-[#14B789] text-white border-2 border-white rounded-3xl text-base font-bold w-40 py-3  hover:bg-[#535da1]  hover:shadow-2xl shadow-gray-900">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>


         {/* Company  Presence */}

      <div className="w-[85%] mx-auto my-40">
        <div className="flex lg:flex-row-reverse flex-col md:justify-between lg:gap-20 ">
          <div className="lg:w-1/2">
            <img
              src="../src/assets/images/map.png"
              className="w-[25rem] rounded-2xl h-[29rem]"
              alt=""
            />
          </div>
          <div className="lg:w-1/2 mx-auto  border rounded-3xl">
            <div className="px-10 py-3 border-b">
              <h1 className=" text-[1.5rem] lg:text-[2rem] font-bold ">
                Company Presence
              </h1>
            </div>
            <div className=" flex items-center bg-gray-100 font-bold gap-5 text-yellow-500">
              <img
                src="./src/assets/images/a.png"
                className="w-20 h-20"
                alt=""
              />
              <span className="text-xl">State of Bihar</span>
            </div>

            <div className=" flex items-center font-bold gap-5 text-yellow-500">
              <img
                src="./src/assets/images/a.png"
                className="w-20 h-20"
                alt=""
              />
              <span className="text-xl">Uttar Pradesh</span>
            </div>

            <div className=" flex items-center bg-gray-100 font-bold gap-5 text-yellow-500">
              <img
                src="./src/assets/images/a.png"
                className="w-20 h-20"
                alt=""
              />
              <span className="text-xl">Delhi</span>
            </div>

            <div className=" flex items-center font-bold gap-5 text-yellow-500">
              <img
                src="./src/assets/images/a.png"
                className="w-20 h-20"
                alt=""
              />
              <span className="text-xl">Punjab</span>
            </div>

            <div className=" flex items-center bg-gray-100 font-bold gap-5 rounded-b-3xl text-yellow-500">
              <img
                src="./src/assets/images/a.png"
                className="w-20 h-20"
                alt=""
              />
              <span className="text-xl">Assam</span>
            </div>
          </div>
        </div>
      </div>

        <Footer/>
   
    </div>
  );
};

export default Home;
