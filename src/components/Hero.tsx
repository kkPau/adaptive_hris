import hero from "../assets/Adaptive HRIS Web 2024 screenshot.png";

const Hero = () => {
  return (
    <div className="relative">
      <div className="w-[100vw]  relative">
        <img className="w-full" src={hero} alt="" />
      </div>
      <div className="w-100 text-white border border-white absolute left-[40px] bottom-[20px] cursor-pointer md:left-[100px] md:bottom-[60px] lg:left-[120px] lg:bottom-[100px] px-5 py-3 rounded-full bg-transparent transform hover:scale-110 duration-300">
        Get AdaptiveHRIS
      </div>
    </div>
  );
};

export default Hero;
