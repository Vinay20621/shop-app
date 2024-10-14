import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const SectionBar = () => {
  return (
    <div className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-around">
        <div className="relative group">
          <span className="text-lg font-semibold cursor-pointer">Men<ArrowDropDownIcon className="inline ml-1" /></span>
          <div className="absolute left-0 right-0 bg-gray-100 hidden group-hover:block rounded-md">
            {/* Dropdown items */}
          </div>
        </div>

        <div className="relative group">
          <span className="text-lg font-semibold cursor-pointer">Women<ArrowDropDownIcon className="inline ml-1" /></span>
          <div className="absolute left-0 right-0 bg-gray-100 hidden group-hover:block rounded-md">
            {/* Dropdown items */}
          </div>
        </div>

        <div className="relative group">
          <span className="text-lg font-semibold cursor-pointer">
            Baby & Kids<ArrowDropDownIcon className="inline ml-1" />
          </span>
          <div className="absolute left-0 right-0 bg-gray-100 hidden group-hover:block rounded-md">
            {/* Dropdown items */}
          </div>
        </div>

        <div className="relative group">
          <span className="text-lg font-semibold cursor-pointer">Grocery<ArrowDropDownIcon className="inline ml-1" /></span>
          <div className="absolute left-0 right-0 bg-gray-100 hidden group-hover:block rounded-md">
            {/* Dropdown items */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBar;
