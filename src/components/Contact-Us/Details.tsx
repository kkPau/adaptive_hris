import React from "react";

const Details = () => {
  return (
    <div className="text-center">
      <div className="mt-20 text-primary text-5xl font-bold">
        Got Questions?
      </div>
      <div className="mt-10 text-sm mx-[20vw]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime
        dolorem mollitia sed error quo, nesciunt dolores labore enim, ea
        aspernatur odio, totam amet quisquam? Magnam harum incidunt
        reprehenderit accusantium?
      </div>
      <div className="mx-[10vw] md:mx-[15vw]">
        <div className="mt-14 font-medium text-4xl">Contact</div>
        <div className="grid grid-cols-2 grid-rows-2 gap-5 mt-8">
          <input
            className="border border-gray-300 rounded-full px-4 py-3 focus:outline-gray-900"
            type="text"
            placeholder="Name"
            id=""
          />
          <input
            className="border border-gray-300 rounded-full px-4 py-3 focus:outline-gray-900"
            type="text"
            placeholder="Company"
            id=""
          />
          <input
            className="border border-gray-300 rounded-full px-4 py-3 focus:outline-gray-900"
            type="tel"
            id=""
          />
          <input
            className="border border-gray-300 rounded-full px-4 py-3 focus:outline-gray-900"
            type="email"
            placeholder="Email"
            id=""
          />
          <textarea
            className="col-span-2 border border-gray-300 rounded-xl px-4 py-3 focus:outline-gray-900"
            rows={5}
            placeholder="Message"
            id=""
          />
        </div>
        <button className="mt-5 py-3 w-full bg-blue-400 rounded-full">
          Send message
        </button>
      </div>
    </div>
  );
};

export default Details;
