import React, { useEffect, useState } from "react";
import { candidates } from "../constant/data";
import { AiOutlineDown } from "react-icons/ai";

const Filter = ({ filterData, setFilterData }) => {
  const [inputValue, setInputValue] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [dropdownValue, setDropdownvalue] = useState("Select Location");

  const locations = [
    ...new Set(candidates.map((candidate) => candidate.location)),
  ];

  useEffect(() => {
    const filterByJob = candidates.filter((data) =>
      data.jobRole.toLowerCase().includes(inputValue.toLowerCase())
    );
    const filterByLocation = candidates.filter((data) =>
      data.location.toLowerCase().includes(dropdownValue.toLowerCase())
    );
    const data = new Set([...filterByJob, ...filterByLocation]);

    setFilterData([...data]);
  }, [inputValue, dropdownValue]);

  return (
    <div className="h-fit bg-white rounded-xl p-5">
      <p className="text-lg font-semibold">Filter</p>
      <div className="border-2 w-60">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full h-full outline-none py-1 px-3 text-sm text-gray-700"
          placeholder="Search by job role"
        />
      </div>

      <div>
        <div
          onClick={() => setDropdown(!dropdown)}
          className="border-2 mt-5 flex items-center justify-between px-2 cursor-pointer"
        >
          <p>{dropdownValue}</p>
          <AiOutlineDown />
        </div>

        {dropdown && (
          <div className="border-2 shadow-md mt-2">
            <p
              onClick={() => {
                setDropdownvalue("Select Location");
                setDropdown(false);
              }}
              className="flex gap-2 cursor-pointer hover:bg-gray-200 px-2 py-1"
            >
              Select Location
            </p>
            {locations.map((location, index) => (
              <p
                key={index}
                onClick={() => {
                  setDropdownvalue(location);
                  setDropdown(false);
                }}
                className="flex gap-2 cursor-pointer hover:bg-gray-200 px-2 py-1"
              >
                {location}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;
