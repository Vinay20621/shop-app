
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
export default function Footer({ bgColor = "#877A35" }) {
  return (
    <footer className="bg-[#102337] text-white">
      <div className={`flex items-center justify-between w-full h-[98px] max-[640px]:px-5 sm:px-11 lg:px-28 sm:text-[18px] lg:text-[24px]`} style={{ backgroundColor: bgColor }}>
        <h1>Connect with us on our social platforms</h1>
        <div className="grid grid-cols-3 gap-5 ">
          <FacebookRoundedIcon fontSize="large" />
          <WhatsAppIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
        </div>
      </div>
      {/*coloumn 1*/}
      <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1 lg:py-20 min-[900px]:py-16 gap-10 max-[640px]:text-center max-[640px]:p-16  md:p-10 sm:p-6">
        <div className="flex justify-center items-center h-[100%]">
          <div className="mt-10 max-[640px]:mt-0 ">
            <h1 className="sm:text-[18px] lg:text-2xl mb-5">
              DAFTARI MEGA MART
            </h1>
            <p className="sm:text-[12px]">Everyday Needs For Everyone</p>
          </div>
        </div>
        {/* {coloumn 2} */}
        <div className="flex justify-center items-center h-[100%]">
          <div className="">
            <h1 className="sm:text-[20px] text-2xl mb-5">About</h1>
            <ul className="grid grid-rows-3 gap-2 sm:text-[13px]">
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        {/* {coloumn 3} */}
        <div className="flex justify-center items-center h-[100%]">
          <div className="">
            <h1 className="sm:text-[20px] xl:text-2xl mb-5">Help</h1>
            <ul className="grid grid-rows-3 gap-2 sm:text-[13px]">
              <li>Payment</li>
              <li>Shipping</li>
              <li>Customer support</li>
              <li>Terms & conditions</li>
            </ul>
          </div>
        </div>
        {/* {coloumn 4} */}
        <div className="flex justify-center items-center">
          <img
            className="xl:w-[310px] xl:h-[220px] lg:w-[280px] lg:h-[210px] md:w-[210px] md:h-[190px] sm:w-[200px] sm:h-[170px] max-[640px]:w-[270px] max-[640px]:h-[180px] absolute"
            src="/Rectangle_202.png"
            alt=""
          />
          <ul className="z-1000 grid grid-rows-3 gap-5 max-[640px]:text-[10px] xl:text-[20px] lg:text-[16px] md:text-[10px] sm:text-[8px]">
            <li>
              <div>
                <CallOutlinedIcon className="mr-4" />
                1800-3609-1598
              </div>
            </li>
            <li>
              <div>
                <MailOutlineOutlinedIcon className="mr-4" />
                megamart12@info.com
              </div>
            </li>
            <li>
              <LocationOnIcon className="mr-4" />
              123 lorem ipsum road
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-[47px] bg-[#0E1A2B]">
        <p>Daftari Mega Mart. All Rights Reseved.</p>
      </div>
    </footer>
  );
}
