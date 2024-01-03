"use client"
import ReactStars from "react-stars";

const Ratings = () => {
  return (
    <div className="relative">
      <ReactStars className="absolute bottom-[5px]" count={5} size={24} color2={"#ffd700"} />
    </div>
  );
};

export default Ratings;
