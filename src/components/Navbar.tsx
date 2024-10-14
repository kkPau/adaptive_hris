import { useState } from "react";
import logo from "../assets/Adaptive HRIS Web 2024 Artboard 2.png";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const setMenu = (): void => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

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

          {showMenu && (
            <div className="w-[400px] h-[50vh] bg-white absolute top-12 right-[-15px] z-10">
              <ul className="flex flex-col text-center space-y-6 text-3xl">
                <li>About</li>
                <hr />
                <li>Features</li>
                <hr />
                <li>Pricing</li>
                <hr />
                <li>Resources</li>
                <hr />
                <li>Contact us</li>
                <hr />
              </ul>
              <div className="text-center text-white mt-10 py-4 w-[170px] mx-auto bg-primary">
                Request a Demo
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
