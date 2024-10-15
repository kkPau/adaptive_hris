const RequestTrial = () => {
  return (
    <div className="bg-primary py-6 flex justify-center">
      <div className="flex bg-white justify-between w-[80vw] md:w-[50vw] lg:w-[40vw] pl-4 overflow-hidden rounded-full">
        <input
          className="w-full focus:outline-none"
          type="text"
          placeholder="Enter your email"
        />
        <button className="py-4 px-8 bg-blue-300 rounded-full text-nowrap">
          Request Free Trial
        </button>
      </div>
    </div>
  );
};

export default RequestTrial;
