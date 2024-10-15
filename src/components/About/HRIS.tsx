import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import hrislogo from "/Users/kwadwo/Development/React js/adaptive_hris_home/src/assets/Adaptive HRIS Web 2024 Artboard 2.png";
import art from "/Users/kwadwo/Development/React js/adaptive_hris_home/src/assets/artboard.png";

const HRIS = () => {
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const visionRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const contents: string[] = [
    "We sustainably delight our customers with information solutions powered by the best in kind talent, processes, and technologies.",
    "To become the best provider of enterprise information solutions in the world.",
    "Ingenious Collaborative Accountable Resilient Empathetic",
  ];

  const handleContent = (index: number) => {
    return gsap.to(".content", {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setActiveIndex(index);
        console.log(activeIndex);
        gsap.to(".content", { opacity: 1, duration: 0.5 });
      },
    });
  };

  // Use useEffect to handle the background changes based on the activeIndex
  useEffect(() => {
    const buttons = [missionRef.current, visionRef.current, valuesRef.current];

    // Reset background for all buttons
    buttons.forEach((button) => {
      gsap.to(button, {
        background: "transparent",
        color: "black",
        duration: 0.3,
      });
    });

    // Set active background for the selected button
    if (activeIndex === 0) {
      gsap.to(missionRef.current, {
        background: "rgba(0, 0, 49, 1)",
        color: "white",
        duration: 0.3,
      });
    } else if (activeIndex === 1) {
      gsap.to(visionRef.current, {
        background: "rgba(0, 0, 49, 1)",
        color: "white",
        duration: 0.3,
      });
    } else if (activeIndex === 2) {
      gsap.to(valuesRef.current, {
        background: "rgba(0, 0, 49, 1)",
        color: "white",
        duration: 0.3,
      });
    }
  }, [activeIndex]); // This effect will run every time activeIndex changes

  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <img className="w-[30vw] md:w-[20vw]" src={hrislogo} alt="" />
      </div>
      <div className="text-sm mx-20 md:mx-40 lg:mx-60 mb-6">
        Adaptive HRIS is an advanced HR and payroll system designed to meet the
        highest standards of quality and technology. Proudly developed locally,
        our solution serves a diverse range of industries, including banking,
        manufacturing, and information technology. With Adaptive HRIS,
        experience reliable, efficient, and cutting-edge HR management tailored
        to your unique business needs.
      </div>
      <div className="flex justify-center">
        <img className="w-[20vw] md:w-[10vw]" src={art} alt="" />
      </div>
      <div className="grid grid-cols-6 grid-rows-2 gap-4 p-5 mb-8">
        <div className="col-span-2 bg-gray-300 h-64 rounded-lg flex justify-center items-center">
          1
        </div>
        <div className="col-span-4 bg-gray-300 h-64 rounded-lg flex justify-center items-center">
          2
        </div>
        <div className="col-span-4 bg-gray-300 h-64 rounded-lg flex justify-center items-center">
          3
        </div>
        <div className="col-span-2 bg-gray-300 h-64 rounded-lg flex justify-center items-center">
          4
        </div>
      </div>
      <div className="flex justify-center space-x-5 md:space-x-10 mb-7 cursor-pointer">
        <div
          ref={missionRef}
          onClick={() => handleContent(0)}
          className="border border-gray-950 font-semibold rounded-full px-3 py-2"
        >
          Our Mission
        </div>
        <div
          ref={visionRef}
          onClick={() => handleContent(1)}
          className="border border-gray-950 font-semibold rounded-full px-3 py-2"
        >
          Our Vision
        </div>
        <div
          ref={valuesRef}
          onClick={() => handleContent(2)}
          className="border border-gray-950 font-semibold rounded-full px-3 py-2"
        >
          Our Values
        </div>
      </div>
      <div className="flex bg-gray-100 mx-14 md:mx-25 lg:mx-40 rounded-2xl px-20 py-10 mb-16">
        <div className="w-full content">{contents[activeIndex]}</div>
      </div>
    </div>
  );
};

export default HRIS;
