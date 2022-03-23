import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="bg-[#ee4d2d] h-24 text-white flex justify-evenly fixed w-full z-10">
      <Link className=" flex flex-row pt-7" to='/'>
        <ShoppingBagIcon fontSize="large" />
        <span className="text-2xl mt-1">mini-Shopee</span>
      </Link>
      <div className="pt-7">
        <input type="text" className="w-[700px] text-black h-[40px] "></input>
        <SearchIcon fontSize="large" />
      </div>
      <div className="pt-7">
        <ShoppingCartIcon fontSize="large" />
      </div>
    </div>
  );
};

export default MainHeader;
