/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { IoCartOutline } from "react-icons/io5";

const ResponsiveNav = () => {
  return (
    <div className="relative lg:hidden h-[150px] w-full pl-2">
      <div className="absolute  flex  gap-2 bottom-[870px]   h-[70px]">
        <div className="w-7 h-7  bg-black bg-opacity-40 rounded-[23px] flex items-center justify-center">
          <span className="text-white text-lg font-bold">&lt;</span>
        </div>
        <div className="relative h-[70px]">
          <input
            type="text"
            placeholder="Search Product"
            className="w-full  pl-10 bg-black opacity-40 pr-4 py-[2px]  rounded-md "
          />
          <div className="absolute bottom-[47px] left-0 pl-2 flex items-center pointer-events-none">
            <img
              className="w-4 h-4"
              src="https://i.ibb.co/DGBtfjT/search-icon-2044x2048-psdrpqwp.png"
              alt="Search Icon"
            />
          </div>
        </div>
        {/* <div>
          <div className="h-[28px] w-[28px] rounded-full bg-black opacity-40 relative ">
          <IoCartOutline className="w-3 h-3 opacity-100  absolute top-3 left-2" />
            <img
              className="w-3 h-3  absolute top-3 left-2"
              src="https://i.ibb.co/CVvYsXJ/Frame-removebg-preview.png"
              alt="User Profile"
            />
            <div className="h-5 w-5 rounded-full bg-black opacity-80 absolute bottom-4 left-4 border-white border-2 ">
              <p className="text-white text-xs font-medium">20</p>
            </div>
          </div>
        </div> */}
        <div>
          <div className="relative">
            <IoCartOutline className="w- h-5 opacity-18 absolute left-2 top-1" />
            <div className="h-[28px] w-[28px] rounded-full left-[2px] bg-black opacity-50 absolute bottom-0 top-[0px] right-0">
              <p className="text-black left-5 rounded-full bg-slate-500 p-[1px] absolute bottom-4 text-xs font-medium">
                20
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="w-7 h-7  bg-black absolute left-9  bg-opacity-40 rounded-[100px] justify-start items-start gap-2.5 inline-flex">
            <div className="flex-col left-[13px] top-[6px] absolute justify-start items-start gap-[3px] inline-flex">
              <div className="w-[3px] h-[3px] bg-white rounded-full" />
              <div className="w-[3px] h-[3px] bg-white rounded-full" />
              <div className="w-[3px] h-[3px] bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNav;


