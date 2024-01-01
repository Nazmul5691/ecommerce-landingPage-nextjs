import CategoryList from "@/components/CategoryList/CategoryList";
import Navbar1 from "@/components/Navbar1/Navbar1";
import Navbar2 from "@/components/Navbar2/Navbar2";
import Product from "@/components/Product/Product";
import ResponsiveNav from "@/components/ResponsiveNav/ResponsiveNav";
import SellerInfo from "@/components/SellerInfo/SellerInfo";


const page = () => {
  return (
    <div  className="w-[1920px]  bg-slate-200 h-[1600px] lg:h-[1000px]">
      <Navbar1></Navbar1>
      
      <Navbar2></Navbar2>
      <CategoryList></CategoryList>
      <Product></Product>
      <SellerInfo></SellerInfo>
      <ResponsiveNav></ResponsiveNav>
    </div>
  );
};

export default page;



