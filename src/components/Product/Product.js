/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
"use client";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import Slider from "../Slider/Slider";
import Ratings from "../Ratings/Ratings";
import { useState } from "react";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [availableQuantity, setAvailableQuantity] = useState(46); 

  const handleIncrease = () => {
    if (quantity < availableQuantity) {
      setQuantity((prevQuantity) => prevQuantity + 1);
      setAvailableQuantity(
        (prevAvailableQuantity) => prevAvailableQuantity - 1
      );
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setAvailableQuantity(
        (prevAvailableQuantity) => prevAvailableQuantity + 1
      );
    }
  };

  return (
    <div className="w-full lg:w-[1220px] flex h-[800px] relative ">
      <div className="absolute w-full lg:w-[1220px] lg:flex lg:h-[800px] h-[1350px] lg:top-[43px] top-[0px] lg:p-4 bg-white lg:left-[350px]">
        <div className="lg:flex ">
          <div className="">
            <Slider className=""></Slider>
          </div>

          <div className="pl-5">
            <div className="lg:w-full  w-full">
              <p>
                Valvet Travel Neck Pillow Folding U-Shaped Memory Foam + Eye
                Masks Ear buds Soft Massage Pillow for Sleeping in Bus Car Plane{" "}
              </p>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex ">
                <div className="mr-2">
                  <p>4.7</p>
                </div>
                <div className="flex  items-center justify-center">
                  <Ratings></Ratings>
                </div>
                <div className="ml-2">
                  <p>|</p>
                </div>
                <div className="mx-2">
                  <p>
                    24 <span className="text-slate-400">Ratings</span>
                  </p>
                </div>
                <div className="mr-2">
                  <p>|</p>
                </div>
                <div>
                  <p>
                    2.5k <span className="text-slate-400">Sold</span>
                  </p>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="flex gap-4">
                  <div className="bg-slate-200 h-[40px] rounded-full w-[40px] flex items-center justify-center">
                    <CiHeart className="h-6 w-6 opacity-60 hover:opacity-100 hover:h-7 hover:w-7 hover:cursor-pointer" />
                  </div>
                  <div className="bg-slate-200 h-[40px] mr-3 rounded-full w-[40px] flex items-center justify-center">
                    <IoShareSocialOutline className="h-6 w-6 opacity-60 hover:opacity-100 hover:h-7 hover:w-7 hover:cursor-pointer" />
                  </div>
                  <div className="flex items-center justify-center">
                    {/* <p className="text-slate-400">Report</p> */}
                    <button className="text-slate-400 hover:text-red-500 hover:font-semibold">
                      Report
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex mt-3 items-center ">
              <div>
                <p>
                  <span className="text-orange-500 text-xl mr-2">
                    ৳ 1,990/-
                  </span>
                  <span
                    className="text-sm mr-3 text-slate-400"
                    style={{ textDecoration: "line-through" }}
                  >
                    ৳ 2,999
                  </span>
                </p>
              </div>
              <div>
                <p className="text-sm bg-orange-500 rounded-sm text-white p-1">
                  -34% OFF
                </p>
              </div>
            </div>
            <div className="mt-3">
              <p>
                <span className="text-slate-400">Brand:</span> No brand:
              </p>
            </div>

            <div className="flex gap-2 mt-5">
              <div>
                <p className="text-slate-400">Size:</p>
              </div>
              <div>
                <p className="bg-slate-200 hover:bg-orange-500 hover:text-white hover:cursor-pointer rounded-sm w-8 p-1 text-orange-600">
                  <span className="ml-1 font-bold">M</span>
                </p>
              </div>
              <div>
                <p className="bg-slate-200  hover:bg-orange-500 hover:text-white hover:cursor-pointer rounded-sm w-8 p-1 text-orange-600">
                  <span className="ml-2 font-bold">L</span>
                </p>
              </div>
              <div>
                <p className="bg-slate-200  hover:bg-orange-500 hover:text-white hover:cursor-pointer rounded-sm w-9 p-1 text-orange-600">
                  <span className="ml-1 font-bold">XL</span>
                </p>
              </div>
              <div className="">
                <p className="bg-orange-500  hover:cursor-pointer w-[50px] rounded-sm p-1 ">
                  <span className=" text-white ml-2 font-bold">XXL</span>
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p>
                <span className="text-slate-400">Color:</span> Black
              </p>
            </div>
            <div className="flex gap-2 mt-2 ">
              <div className="border-2 p-1  rounded-sm">
                <div className="bg-yellow-400 h-8 w-8 hover:cursor-pointer"></div>
              </div>
              <div className="border-2 p-1 rounded-sm">
                <div className="rounded-sm h-8 w-8 hover:cursor-pointer bg-[#79CAAD]"></div>
              </div>
              <div className="border-2 p-1 rounded-sm">
                <div className="h-8 w-8 rounded-sm hover:cursor-pointer bg-[#FF8E40]"></div>
              </div>
              <div className="border-2 p-1 rounded-sm">
                <div className="h-8 w-8 rounded-sm hover:cursor-pointer bg-[#1F93FF]"></div>
              </div>
              <div className="border-2 p-1 rounded-sm">
                <div className="h-8 w-8 rounded-sm hover:cursor-pointer bg-[#E01FFF]"></div>
              </div>
              <div className="border-2 p-1 rounded-sm">
                <div className="h-8 w-8 rounded-sm hover:cursor-pointer bg-[#FF1F1F]"></div>
              </div>
            </div>
            <div className="mt-8">
              <p>
                <span className="text-slate-400 font-semibold">Sku:</span>{" "}
                hdgfhdgf6756dsghgf7
              </p>
            </div>

            <div className="flex mt-7 items-center">
              <div>
                <p className="text-slate-400 mr-2">Quantity:</p>
              </div>
              <div className="bg-slate-100 p-1">
                <p>
                  <span
                    className="bg-white px-2 hover:bg-slate-400 rounded-sm cursor-pointer"
                    onClick={handleDecrease}
                  >
                    -
                  </span>{" "}
                  {quantity}{" "}
                  <span
                    className="bg-white px-2 hover:bg-slate-400 rounded-sm cursor-pointer"
                    onClick={handleIncrease}
                  >
                    +
                  </span>
                </p>
              </div>
              <div>
                <p className="text-orange-500 ml-3">
                  Only {availableQuantity} pieces available
                </p>
              </div>
            </div>

            <div className="hidden lg:flex mt-[29px] gap-3">
              <div>
                <button className="px-14 py-3  bg-[#F97316] text-white rounded-sm">
                  Buy Now
                </button>
              </div>
              <div>
                <button className="px-8 py-3 text-black bg-[#F3D343] rounded-sm flex items-center">
                  <IoCartOutline className="h-6 w-6 opacity-70 mr-2" />
                  Add to Cart
                </button>
              </div>
              {/* <div>
                <button
                  className="px-8 py-3 text-black bg-[#F3D343] rounded-sm flex items-center"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div> */}
            </div>
            <div className="hidden lg:block absolute bottom-[245px] left-[938px]">
              <img src="https://i.ibb.co/pxx6Pjy/Rectangle-4326.jpg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
