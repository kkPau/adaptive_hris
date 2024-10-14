import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import benz from "../assets/partners/benz.png";
import peugeot from "../assets/partners/peugeot_logo.png";
import japan from "../assets/partners/japan_logo.png";
import maverick from "../assets/partners/maverick.png";
import marina from "../assets/partners/marina.png";
import yamaha from "../assets/partners/yamaha.png";
import startbow from "../assets/partners/starbow.png";
import koudijs from "../assets/partners/koudijs.webp";
import ic from "../assets/partners/icsecurities.png";
import bidvest from "../assets/partners/bidvest.png";
import { useRef } from "react";

const Partners = () => {
  const slideRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(slideRef.current, {
      xPercent: -90,
      ease: "linear",
      repeat: -1,
      duration: 10,
      yoyo: true,
    });
  });

  return (
    <div className="overflow-hidden">
      <div
        ref={slideRef}
        className="flex justify-start px-4 py-5 space-x-10 animate-scroll"
      >
        <img className="h-[4rem] md:h-[6rem]" src={benz} alt="" />
        <img className="h-[4rem] md:h-[6rem]" src={peugeot} alt="" />
        <img className="h-[4rem] md:h-[6rem]" src={japan} alt="" />
        <img className="h-[4rem] md:h-[6rem]" src={maverick} alt="" />
        <img className="h-[4rem] md:h-[6rem]" src={marina} alt="" />
        <img className="h-[4rem] md:h-[6rem]" src={yamaha} alt="" />
        <img className="h-[4rem] md:h-[6rem]" src={startbow} alt="" />
        <img className="h-[4rem] md:h-[6rem]" src={koudijs} alt="" />
        <img className="h-[4rem] md:h-[6rem]" src={ic} alt="" />
        <img className="h-[4rem] md:h-[6rem]" src={bidvest} alt="" />
      </div>
    </div>
  );
};

export default Partners;
