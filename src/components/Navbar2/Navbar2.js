/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";


const Navbar2 = () => {

  

  return (
    <div className="hidden lg:block w-[1920px] h-[70px] left-0 top-[25px] relative bg-white">
      <div className="absolute w-[1920px] h-[70px] bottom-[25px]">
        <img
          className="w-[129px] h-[37.88px] left-[350px] top-[41px] absolute"
          src="https://i.ibb.co/QHzQrGf/Alzaf-Logo.jpg"
        />
        
        <input
          type="text"
          placeholder="Search Product"
          className="w-[706px] h-11 left-[505px] top-[38px] absolute bg-gray-100 border border-gray-300 rounded-[10px] px-2"
        />
        <div className="w-[47px] h-[43px] left-[1164px] top-[38px] absolute">
          <div className="w-[47px] h-[42px] left-0 top-[1px] absolute hover:cursor-pointer hover:bg-orange-400 bg-orange-500 rounded-[10px]">
            <img
              className=" w-[24px] h-[24px] mt-3 ml-3"
              src="https://i.ibb.co/DGBtfjT/search-icon-2044x2048-psdrpqwp.png"
              alt="Search Icon"
            />
          </div>
        </div>
      

        <div className="absolute w-[177px] h-11 left-[1230px] flex gap-2 top-[38px]">
          <div className="bg-slate-200 h-[40px] rounded-md w-[40px] hover:cursor-pointer  flex items-center justify-center">
            <FaRegUser className="h-5 w-5 opacity-60 hover:opacity-100 hover:h-6 hover:w-6" />
          </div>
          <div className="bg-slate-200 h-[40px] rounded-md w-[40px] hover:cursor-pointer flex items-center justify-center">
            <CiHeart className="h-6 w-6 opacity-70 hover:opacity-100 hover:h-7 hover:w-7" />
          </div>
          <div className="bg-slate-200 h-[40px] rounded-md w-[40px] hover:cursor-pointer flex items-center justify-center">
            <IoCartOutline className="h-6 w-6 opacity-70 hover:opacity-100 hover:h-7 hover:w-7" />
          </div>
          {/* <div className="bg-slate-200 h-[40px] rounded-md w-[40px] hover:cursor-pointer flex items-center justify-center">
          <IoCartOutline className="h-6 w-6 opacity-70 hover:opacity-100 hover:h-7 hover:w-7" />
          {cartItemCount > 0 && <span className="bg-red-500 text-white px-2 rounded-full ml-1">{cartItemCount}</span>}
        </div> */}
        </div>

        <div className="w-[170px] h-11 hover:cursor-pointer  left-[1393px] top-[38px] absolute">
          {/* <div className="w-[150px] h-11 left-[8.56px] top-0 absolute bg-orange-400 rounded-[13px]" /> */}
          <button className="bg-orange-400 hover:cursor-pointer absolute left-[27.56px] w-[150px] h-[40px] text-white font-bold rounded-lg"><span className="hover:cursor-pointer">Cloud Service</span></button>
          <div className="w-[17.13px] h-[18px] left-[111.34px] top-[20px] opacity-35 absolute hover:cursor-pointer bg-gradient-to-b from-white to-white rounded-full" />
          <div className="w-[6.66px] h-[7px] left-[151.31px] top-[15px] opacity-35  absolute bg-gradient-to-b from-white to-white rounded-full" />
          <div className="w-[6.66px] h-[7px] left-[94.21px] top-[5px] opacity-35  absolute bg-gradient-to-b from-white to-white rounded-full" />
          <div className="w-[3.81px] h-1 left-[79.94px] top-[32px] opacity-35  absolute bg-gradient-to-b from-white to-white rounded-full" />
          <div className="w-[12.37px]   h-[13px] left-[45.68px] top-[15px] opacity-35  absolute bg-gradient-to-b from-white to-white rounded-full" />
          <div className="w-[10.47px] h-[11px] left-[158.92px] top-[27px] opacity-35  absolute bg-gradient-to-b from-white to-white rounded-full" />

          <div className="w-[130.37px]  h-6 left-[41.87px] top-[10px] absolute text-center text-white text-base font-normal font-['Anton'] tracking-wider">
            <img
              className="w-[42.016px] h-[44px] right-[128px] bottom-0 -top-[14px] border-none absolute "
              src="https://i.ibb.co/Ctzsc3Y/cloud.png"
            />
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
