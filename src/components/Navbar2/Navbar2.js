/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

const Navbar2 = () => {
  return (
    <div className="hidden lg:block w-[1920px] h-[70px] left-0 top-[25px] relative bg-white">
      <div className="absolute w-[1920px] h-[70px] bottom-[25px]">
        <img
          className="w-[129px] h-[37.88px] left-[350px] top-[41px] absolute"
          src="https://i.ibb.co/QHzQrGf/Alzaf-Logo.jpg"
        />
        <div className="w-4 h-4 px-[4.17px] left-[409px] top-[6px] absolute justify-center items-center inline-flex" />
        <div className="w-[704px] h-11 left-[507px] top-[38px] absolute bg-gray-100 rounded-[10px]" />
        <div className="left-[520px] top-[51px] absolute text-neutral-500 text-sm font-normal font-['Inter'] leading-[18.20px]">
          Search Product
        </div>
        <div className="w-[47px] h-11 left-[1164px] top-[38px] absolute">
          <div className="w-[47px] h-11 left-0 top-0 absolute bg-orange-500 rounded-[10px]">
            <img
              className="w-[24px] h-[24px] mt-3 ml-3   "
              src="https://i.ibb.co/DGBtfjT/search-icon-2044x2048-psdrpqwp.png"
            ></img>
          </div>
        </div>

        <div className="absolute w-[177px] h-11 left-[1230px] flex gap-2 top-[38px]">
          <div className="bg-slate-200 h-[40px] rounded-md w-[40px] flex items-center justify-center">
            <img
              className="w-[20px] h-[20px]"
              src="https://i.ibb.co/MgmkSk9/Group.jpg"
              alt="Group Image"
            />
          </div>
          <div className="bg-slate-200 h-[40px] rounded-md w-[40px] flex items-center justify-center">
            <img
              className="w-[20px] h-[20px]"
              src="https://i.ibb.co/sJTrRr8/Love-removebg-preview.png"
              alt="Group Image"
            />
          </div>
          <div className="bg-slate-200 h-[40px] rounded-md w-[40px] flex items-center justify-center">
            <img
              className="w-[20px] h-[20px]"
              src="https://i.ibb.co/CVvYsXJ/Frame-removebg-preview.png"
              alt="Group Image"
            />
          </div>
        </div>

        <div className="w-[177px] h-11 left-[1393px] top-[38px] absolute">
          <div className="w-[168.44px] h-11 left-[8.56px] top-0 absolute bg-orange-400 rounded-[13px]" />
          <div className="w-[17.13px] h-[18px] left-[111.34px] top-[20px] opacity-35 absolute bg-gradient-to-b from-white to-white rounded-full" />
          <div className="w-[6.66px] h-[7px] left-[151.31px] top-[15px] opacity-35  absolute bg-gradient-to-b from-white to-white rounded-full" />
          <div className="w-[6.66px] h-[7px] left-[94.21px] top-[5px] opacity-35  absolute bg-gradient-to-b from-white to-white rounded-full" />
          <div className="w-[3.81px] h-1 left-[79.94px] top-[32px] opacity-35  absolute bg-gradient-to-b from-white to-white rounded-full" />
          <div className="w-[12.37px] h-[13px] left-[45.68px] top-[15px] opacity-35  absolute bg-gradient-to-b from-white to-white rounded-full" />
          <div className="w-[10.47px] h-[11px] left-[158.92px] top-[27px] opacity-35  absolute bg-gradient-to-b from-white to-white rounded-full" />

          <div className="w-[130.37px] h-6 left-[41.87px] top-[10px] absolute text-center text-white text-base font-normal font-['Anton'] tracking-wider">
            <img
              className="w-[39.016px] h-[50px] right-[140px] bottom-0 -top-3 border-none absolute "
              src="https://i.ibb.co/TtQB32r/Vector-removebg-preview.png"
            />
            Cloud Service
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
