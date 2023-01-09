import React from "react";

const SelectOpt = ({}) => {
  return (
    <select
      id="countries"
      className="w-1/3 bg-gray-50 border border-gray-300 text-[#1A202C] text-base font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
    >
      <option selected>Date</option>
      <option value="7">7:00</option>
      <option value="8">8:00</option>
      <option value="9">9:00</option>
      <option value="10">10:00</option>
    </select>
  );
};

export default SelectOpt;
