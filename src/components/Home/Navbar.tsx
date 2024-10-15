import { useRef, useState } from "react";
import logo from "/Users/kwadwo/Development/React js/adaptive_hris_home/src/assets/Adaptive HRIS Web 2024 Artboard 2.png";
import { RiMenu3Fill } from "react-icons/ri";
import gsap from "gsap";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuRef = useRef(null);
  const navigate = useNavigate();
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
          <NavLink to="/">
            <img className="w-[10rem]" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-10">
            <NavLink to="/about">
              <li className="cursor-pointer hover:underline">About</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to="/features">
              <li className="cursor-pointer hover:underline">Features</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>

            <NavLink to="/pricing">
              <li className="cursor-pointer hover:underline">Pricing</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to="/resources">
              <li className="cursor-pointer hover:underline">Resources</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
            <NavLink to="/contact-us">
              <li className="cursor-pointer hover:underline">Contact us</li>
              <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
            </NavLink>
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
