import { GrFormNextLink } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import customer from "../assets/customer1.jpeg";

const Customer = () => {
  return (
    <div className="p-5 text-center">
      <p className="text-2xl mb-10">Customer buzz</p>
      <div className="flex items-center justify-center space-x-2">
        <div className="p-2 rounded-full border border-black">
          <GrLinkPrevious />
        </div>
        <div className="bg-primary flex flex-col md:flex-row rounded-3xl text-start p-10 space-y-5 md:space-x-10 ">
          <div className="w-full md:w-1/2 overflow-hidden h-[20rem] rounded-2xl">
            <img src={customer} alt="" />
          </div>
          <div className="text-white w-full md:w-1/2 mt-6 md:mt-0 px-4">
            <p>
              The automated calculations save us countless hours each pay
              period, and we no longer have to worry about compliance issues or
              tax regulations—they're all built into the system! What really
              stands out is the user-friendly interface; our HR and finance
              teams quickly adapted to the platform with minimal training.{" "}
              <br />
              <br />
              <br />
              Rosemary - Payroll Officer Vineyard Media
            </p>
          </div>
        </div>
        <div className="p-2 rounded-full border border-black">
          <GrFormNextLink />
        </div>
      </div>
      <div className="mt-6 mx-auto rounded-full bg-blue-400 md:w-[18vw] w-[40vw] py-4 text-white transition-transform hover:scale-105 duration-300 cursor-pointer">
        Talk to us
      </div>
    </div>
  );
};

export default Customer;
