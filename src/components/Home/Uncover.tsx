import { GrFormNextLink } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const Uncover = () => {
  return (
    <div className="text-center p-5 bg-gray-100">
      <p className="text-gray-400 text-[9px]">HR Simplified. AdaptiveHRIS</p>
      <p className="text-2xl mb-10"> Uncover our Treasures</p>
      <div className="flex items-center justify-center space-x-2">
        <div className="p-2 rounded-full border border-black transition-transform hover:scale-105 duration-300">
          <GrLinkPrevious />
        </div>
        <div className="text-white bg-primary rounded-3xl text-start p-10">
          <div className="flex flex-col md:flex-row space-y-5 md:space-x-10">
            <div className="w-full md:w-1/2 justify-center place-content-center items-center">
              <h2 className="text-2xl font-mono mb-3">Payroll</h2>
              <p className="text-[10px] mb-6">
                Streamline your payroll process with our user-friendly Payroll
                module, designed to meet the needs of businesses of all sizes.
                Our HRIS Payroll module guarantees precise, prompt, and timely
                payroll processing. Benefit from automated calculations,
                simplified tax management, and flawless integration with other
                HR functionalities. Simplify your payroll responsibilities and
                prioritize what truly counts—your employees.
              </p>
              <div className="px-3 py-3 rounded-full w-full md:w-1/2 cursor-pointer border border-white text-center transition-transform hover:scale-110 duration-300">
                Read more
              </div>
            </div>

            <div className="bg-gray-600 rounded-3xl w-full md:w-1/2 h-[20rem]"></div>
          </div>
        </div>

        <div className="p-2 rounded-full border border-black transition-transform hover:scale-105 duration-300">
          <GrFormNextLink />
        </div>
      </div>
      <div className="mt-5 px-[20%]">
        <div className="w-full bg-blue-400 h-4 rounded-full">
          <div className="h-full w-[20%] bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Uncover;
