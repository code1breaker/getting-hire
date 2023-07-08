import React from "react";
import { candidates } from "../constant/data";

const CandidateList = ({ filterData }) => {
  return (
    <div className="w-[70% flex flex-col gap-5">
      {filterData.map((candidate) => {
        return (
          <div key={candidate.id} className="py-2 px-5 bg-white rounded-xl">
            <div className="flex gap-3 items-center ">
              <p className="bg-gray-200 p-3 text-2xl rounded-full cursor-pointer">
                {candidate.image}
              </p>
              <p className="text-lg font-semibold cursor-pointer">
                {candidate.name}
              </p>
            </div>

            <div className="flex gap-10 ml-[3.8rem]">
              <div>
                <p>Job Role</p>
                <p>Location</p>
                <p>Details</p>
                <p>Skills</p>
              </div>
              <div>
                <p>{candidate.jobRole}</p>
                <p>{candidate.location}</p>
                <p>{candidate.details}</p>
                <p>{candidate.skills.join(", ")}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CandidateList;
