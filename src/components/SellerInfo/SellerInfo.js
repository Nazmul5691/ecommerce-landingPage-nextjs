/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

const SellerInfo = () => {
  return (
    <div className="lg:w-[1200px] w-[600px] h-[150px]  relative">
      <div className="absolute lg:w-[1200px] w-[600px]  -top-[370px] lg:-top-[750px] lg:flex h-[70px] p-4 bg-white  justify-between left-[350px]">
        <div className="flex gap-3">
          <div className="">
            <img
              className="h[100px] w-[100px] rounded-full"
              src="https://i.ibb.co/ynD7Kj9/Ellipse-2132-removebg-preview.png"
            ></img>
          </div>
          <div>
            <p>Al-Amin Gallery</p>
            <div className="flex mt-2 items-center justify-center">
              <div className="bg-stone-400 h-[12px]  mr-1 rounded-full w-[12px]"></div>
              <div>
                <p className="text-stone-300">
                  <span> </span> Active 6 Hours ago
                </p>
              </div>
            </div>
            <div className="flex gap-10 mt-5">
              <div>
                <p className="text-sky-600">Visit Store </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div>
                  <img src="https://i.ibb.co/JmS50fr/Message-17-removebg-preview.png"></img>
                </div>
                <div>
                  <p className="text-sky-600">Chat</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5">
            <p className="mb-3">
              Seller Rating: <span className="ml-8">95%</span>
            </p>
            <p className="my-3">
              Ship on Time: <span className="ml-7">90%</span>
            </p>
            <p>
              Response Rate: <span className="ml-4">55%</span>
            </p>
          </div>
        </div>
        <div className="lg:p-0 p-4 w-[200px]">
          <p>Service</p>
          <div className="flex  gap-2 items-center">
            <div>
              <img src="https://i.ibb.co/n7wpxmM/Time-Circle-6-removebg-preview.png"></img>
            </div>
            <div>
              <p className="text-orange-400">7 day return</p>
            </div>
          </div>
          <p className="ml-6">Change of mind is not applicable</p>
          <div className="flex  gap-2 items-center">
            <div>
              <img src="https://i.ibb.co/n7wpxmM/Time-Circle-6-removebg-preview.png"></img>
            </div>
            <div>
              <p className="text-slate-400">Warranty Not Available</p>
            </div>
          </div>
        </div>
        <div className="lg:p-0 p-4 w-[350px]">
          <p>Delivery</p>
          <div className="flex  gap-2 items-center">
            <div>
              <img src="https://i.ibb.co/n7wpxmM/Time-Circle-6-removebg-preview.png"></img>
            </div>
            <div>
              <p className="text-orange-400">
                <span className="text-orange-400">Free Delivery</span> 4Nov -
                8Nov 3- 5 days
              </p>
            </div>
          </div>
          <p className="ml-6">
            Enjoy free shipping promotion with minimum spend of ৳ 499 from{" "}
            <span className="text-orange-400">xpress</span>.
          </p>
          <div className="flex  gap-2 items-center">
            <div>
              <img src="https://i.ibb.co/n7wpxmM/Time-Circle-6-removebg-preview.png"></img>
            </div>
            <div>
              <p className="text-orange-400">Cash on delivery available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
