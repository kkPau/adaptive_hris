import { useRef, useState } from "react";
import logo from "../assets/Adaptive HRIS Web 2024 Artboard 2.png";
import { RiMenu3Fill } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const menuRef = useRef(null);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const setMenu = (): void => {
    setShowMenu((prev) => !prev);
    console.log(showMenu);
    if (!showMenu && menuRef.current) {
      gsap.from(menuRef.current, {
        x: "+=100",
        opacity: 0,
        duration: 2,
      });
    }
  };

  //   useGSAP(() => {
  //     gsap.from(menuRef.current, {
  //       x: "+=100",
  //       opacity: 0,
  //       duration: 2,
  //     });
  //   });

  return (
    <nav>
      <div className="flex  px-10 md:pl-0 py-5 md:py-0 justify-between md:justify-around items-center">
        <div className="cursor-pointer">
          <img className="w-[10rem]" src={logo} alt="" />
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-10">
            <li className="cursor-pointer hover:underline">
              <a href="#">About</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Features</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Pricing</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Resources</a>
            </li>
            <li className="cursor-pointer hover:underline">
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="bg-primary text-white px-2 py-6 mb-2 hidden md:block cursor-pointer">
          Request a Demo
        </div>
        <div onClick={setMenu} className="block relative md:hidden">
          <RiMenu3Fill className="text-3xl menu" />

          {showMenu === true ? (
            <div
              ref={menuRef}
              className="w-[400px] h-[50vh] bg-white absolute top-12 right-[-35px] z-10"
            >
              <ul className="flex flex-col text-gray-500 text-center space-y-6 text-3xl cursor-pointer">
                <li className="hover:text-gray-950">About</li>
                <hr />
                <li className="hover:text-gray-950">Features</li>
                <hr />
                <li className="hover:text-gray-950">Pricing</li>
                <hr />
                <li className="hover:text-gray-950">Resources</li>
                <hr />
                <li className="hover:text-gray-950">Contact us</li>
                <hr />
              </ul>
              <div className="text-center text-white mt-10 py-4 w-[170px] mx-auto bg-primary">
                Request a Demo
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
