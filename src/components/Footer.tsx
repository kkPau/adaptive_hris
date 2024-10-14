import logo from "../assets/Adaptive HRIS Web 2024 Artboard 2.png";
import { MdEmail, MdOutlineCopyright } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row py-10 mx-6 md:mx-12">
        <div className="w-full md:w-1/2 bg-primary flex space-x-6 p-6 rounded-2xl">
          <div className="w-1/2">
            <div className="p-3 bg-white rounded-xl w-full content-center">
              <img className="w-[10rem] mx-auto" src={logo} alt="" />
            </div>
            <div className="text-white mt-5 flex items-center space-x-4">
              Follow us on <FaFacebookSquare className="ml-4" /> <FaLinkedin />
            </div>
          </div>

          <div className="w-1/2 text-white">
            <p>ADDRESS</p>
            <p>Hse No.4, Jasmine Street</p>
            <p>Adjacent WW Home, Haatso</p>
            <p className="flex items-center">
              <MdEmail className="mr-2" />
              info@acsint.io
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2" />
              +233 595 950 105
            </p>
          </div>
        </div>
        <div className="flex flex-row  justify-around w-full md:w-1/2 md:justify-around my-5 flex-wrap">
          <div>
            <div className="mb-2 md:mb-6 font-medium">RESOURCES</div>
            <ul className="text-gray-500 space-y-2 cursor-pointer">
              <li className="hover:text-gray-950">Blog</li>
              <li className="hover:text-gray-950">Product Brochure</li>
              <li className="hover:text-gray-950">Product Manuals</li>
            </ul>
          </div>
          <div>
            <div className="mb-2 md:mb-6 font-medium">OTHER LINKS</div>
            <ul className="text-gray-500 space-y-2 cursor-pointer">
              <li className="hover:text-gray-950">Admin Portal</li>
              <li className="hover:text-gray-950">Client Portal</li>
              <li className="hover:text-gray-950">ACS</li>
            </ul>
          </div>
          <div>
            <div className="mb-2 md:mb-6 font-medium">INFO</div>
            <ul className="text-gray-500 space-y-2 cursor-pointer">
              <li className="hover:text-gray-950">Home</li>
              <li className="hover:text-gray-950">About</li>
              <li className="hover:text-gray-950">Features</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-blue-400 flex justify-between px-10 md:px-28 py-6">
        <div className="flex items-center">
          <MdOutlineCopyright className="mr-2" />
          2024 Adaptive Computer Solutions
        </div>
        <div className="flex text-gray-700 space-x-3 md:space-x-10 cursor-pointer">
          <p className="hover:text-black">Terms of Use</p>
          <p className="hover:text-black">Privacy & Security</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
