import React from "react";

const Hero = () => {
  return (
    <section className="mt-5">
      <div className="w-[80%] mx-auto rounded-xl bg-[#e1eaf4] flex items-center justify-around">
        <div className="w-[35%]">
          <h2 className="text-5xl font-bold text-gray-700">
            The Future of remote Hiring
          </h2>

          <p className="text-sm mt-5 mb-2 w-[80%] text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, eum!
          </p>

          <button className="border-2 border-[#575d63] px-4 py-1 text-gray-700 font-semibold">
            Register
          </button>
        </div>

        <div className="w-[45%] h-[25rem]">
          <img
            className="w-full h-full object-contain"
            src="https://cdn-icons-png.flaticon.com/512/3473/3473808.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
