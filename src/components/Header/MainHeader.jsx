import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MainHeader = () => {

  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <div className="bg-rose-500 h-24 text-white flex justify-between px-4 md:justify-evenly fixed w-full z-10">
      <Link className=" flex flex-row pt-7" to="/">
        <ShoppingBagIcon fontSize="large" />
        <p className="text-3xl mt-1 md:text-2xl">Shopaa</p>
      </Link>
      <div className="pt-7">
        <input type="text" className="hidden md:w-[700px] text-black h-[40px]"></input>
        {/* <SearchIcon fontSize="large" className="hidden" /> */}
      </div>
      <Link to={"/cart"} className="pt-7">
        <Badge badgeContent={totalQuantity} color='secondary'>
          <ShoppingCartIcon fontSize='large' />
        </Badge>
      </Link>
    </div>
  );
};

export default MainHeader;
// bg-[#ee5031]