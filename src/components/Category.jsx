import React from "react";
import { cateogries } from "../constant/data";

const Category = () => {
  return (
    <section className="w-[80%] mx-auto my-8">
      <p className="text-xl text-gray-700 font-bold mb-5">
        Browse talent by category
      </p>

      <div className="grid grid-cols-4 gap-5">
        {cateogries.map((category) => {
          return (
            <div
              key={category.id}
              className="bg-[#e1eaf4] py-4 rounded-lg cursor-pointer flex flex-col items-center"
            >
              <p className="font-semibold ">{category.title}</p>
              <p>{category.noOfJob} jobs</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
