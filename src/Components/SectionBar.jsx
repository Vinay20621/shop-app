import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from "react-router-dom";

const SectionBar = () => {
  const navigate=useNavigate()
  return (
    <div className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-around">
        <div className="relative group">
          <span className="text-lg font-semibold cursor-pointer" onClick={()=>navigate('/category/men')}>Men<ArrowDropDownIcon className="inline ml-1" /></span>
          <div className="absolute left-0 right-0 bg-gray-100 hidden group-hover:block rounded-md">
            {/* Dropdown items */}
          </div>
        </div>

        <div className="relative group">
          <span className="text-lg font-semibold cursor-pointer"  onClick={()=>navigate('/category/women')}>Women<ArrowDropDownIcon className="inline ml-1" /></span>
          <div className="absolute left-0 right-0 bg-gray-100 hidden group-hover:block rounded-md">
            {/* Dropdown items */}
          </div>
        </div>

        <div className="relative group">
          <span className="text-lg font-semibold cursor-pointer" onClick={()=>navigate('/category/baby-kids')}>
            Baby & Kids<ArrowDropDownIcon className="inline ml-1" />
          </span>
          <div className="absolute left-0 right-0 bg-gray-100 hidden group-hover:block rounded-md">
            {/* Dropdown items */}
          </div>
        </div>

        <div className="relative group">
          <span className="text-lg font-semibold cursor-pointer" onClick={()=>navigate('/grocery')}>Grocery<ArrowDropDownIcon className="inline ml-1" /></span>
          <div className="absolute left-0 right-0 bg-gray-100 hidden group-hover:block rounded-md">
            {/* Dropdown items */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBar;
