/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

const ResponsiveNav = () => {
  return (
    <div className=" h-[150px] lg:hidden relative">
      <div className="absolute  flex pl-6 gap-2 bottom-[1570px]   h-[70px] p-4   left-[350px]">
        <div className="w-7 h-7 relative origin-top-left bg-black bg-opacity-40 rounded-[23px] flex items-center justify-center">
          <span className="text-white text-lg font-bold">&lt;</span>
        </div>
        <div>
          <div className="w-[438px] h-7 relative bg-black bg-opacity-40 rounded-[46px]">
            <div className="w-[66px] h-3 left-[90px] top-[8px] absolute" />
            <div className="left-[8px] top-[7px] absolute justify-start items-center gap-1.5 inline-flex">
              <div className="w-3.5 h-3.5 pl-[1.17px] pr-[1.16px] pt-[1.16px] pb-[1.17px] justify-center items-center flex">
                <div className="w-[11.67px] h-[11.66px] relative">
                  <img src="https://i.ibb.co/DGBtfjT/search-icon-2044x2048-psdrpqwp.png"></img>
                </div>
              </div>
              <div className="text-white text-[9px] font-normal font-['Inter'] leading-3">
                Search Product
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="h-[28px] w-[28px] rounded-full bg-black opacity-40 relative ">
            <img
              className="w-3 h-3  absolute top-3 left-2"
              src="https://i.ibb.co/CVvYsXJ/Frame-removebg-preview.png"
              alt="User Profile"
            />
            <div className="h-5 w-5 rounded-full bg-black opacity-80 absolute bottom-4 left-4 border-white border-2 ">
              <p className="text-white text-xs font-medium">20</p>
            </div>
          </div>
        </div>

        <div>
          <div className="w-7 h-7  bg-black relative bg-opacity-40 rounded-[100px] justify-start items-start gap-2.5 inline-flex">
            <div className="flex-col left-3 top-[6px] absolute justify-start items-start gap-[3px] inline-flex">
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
