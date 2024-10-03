import React from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Footer(){
    return(
        <footer className="bg-[#102337] text-white">
            <div className="flex items-center justify-between w-full h-[98px] bg-[#877A35] px-28 text-[24px]">
            <h1>Connect with us on our social platforms</h1>
            <div className="grid grid-cols-3 gap-5">
            <FacebookRoundedIcon fontSize="large" />
            <WhatsAppIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
            </div>
            </div>
            {/*coloumn 1*/}
            <div className="grid grid-cols-4 gap-6 h-[330px]">
            <div className="flex justify-center items-center h-[100%]">
            <div className="mt-10">
                
                <h1 className="text-2xl mb-5">DAFTARI MEGA MART</h1>
                <p>Everyday Needs For Everyone</p>
                

            </div>
            </div>
            {/* {coloumn 2} */}
            <div className="flex justify-center items-center h-[100%]">
            <div className="">
                <h1 className="text-2xl mb-5">About</h1>
                <ul className="grid grid-rows-3 gap-2">
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Careers</li>
                </ul>
            </div>
            </div>
            {/* {coloumn 3} */}
            <div className="flex justify-center items-center h-[100%]">
            <div className="">
                <h1 className="text-2xl mb-5">Help</h1>
                <ul className="grid grid-rows-3 gap-2">
                    <li>Payment</li>
                    <li>Shipping</li>
                    <li>Customer support</li>
                    <li>Terms & conditions</li>
                </ul>
            </div>
            </div>
            {/* {coloumn 4} */}
            <div className="flex justify-center items-center">
            <img className="w-[330px] h-[220px] absolute" src="/Rectangle_202.png" alt="" />
                <ul className="z-1000 grid grid-rows-3 gap-5">
                    <li ><div><CallOutlinedIcon className="mr-4"/>1800-3609-1598</div></li>
                    <li ><div><MailOutlineOutlinedIcon className="mr-4"/>megamart12@info.com</div></li>
                    <li ><LocationOnIcon className="mr-4"/>123 lorem ipsum road</li>
                </ul>
            </div>
            </div>
            <div className="flex justify-center items-center w-full h-[47px] bg-[#0E1A2B]">
                <p>Daftari Mega Mart. All Rights Reseved.</p>
            </div>
        </footer>
    )
}