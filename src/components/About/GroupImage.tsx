import staffimg from "/Users/kwadwo/Development/React js/adaptive_hris_home/src/assets/groupimg.jpeg";

const GroupImage = () => {
  return (
    <div>
      <div className="relative">
        <img src={staffimg} alt="" />
        <div className="w-full">
          <p className="absolute text-nowrap font-bold text-dreams top-5 z-10 left-1/2 transform -translate-x-1/2 text-[3rem] sm:text-[5rem] md:text-[7rem]">
            we code dreams
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroupImage;
