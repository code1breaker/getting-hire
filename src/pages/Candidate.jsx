import React, { useState } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import CandidateList from "../components/CandidateList";
import { candidates } from "../constant/data";

const Candidate = () => {
  const [filterData, setFilterData] = useState(candidates);
  return (
    <>
      <Header />
      <div className="w-[80%] mx-auto py-5 flex gap-5">
        <Filter setFilterData={setFilterData} filterData={filterData} />
        <CandidateList filterData={filterData} />
      </div>
    </>
  );
};

export default Candidate;
