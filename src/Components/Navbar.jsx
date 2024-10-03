import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Navbar(){
    return(
        <nav className="flex justify-between w-full h-[90px] px-7 bg-[#29A841]">
            <div className="w-[200px]">
            <img className="" src="./public/megamart_logo1.svg"/>
            </div>
            <div className="relative flex items-center mt-5 w-[30%] h-[50px]">
                <SearchIcon className="absolute left-3 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search for Products, Brands and More"
                    className="pl-12 p-2 w-full h-full outline-none rounded-[12px]"
                />
            </div>
            <div className="grid grid-cols-2 gap-1">
            <button className=" mt-5 w-[120px] h-[50%] bg-white rounded-full"><PersonIcon className="text-gray-500 mr-3"/>Login</button>
            <button><ShoppingCartIcon fontSize="large" className="text-white"/></button>
            </div>
            
        </nav>
    )
}