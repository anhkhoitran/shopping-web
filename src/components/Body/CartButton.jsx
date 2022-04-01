import { BsCartPlus } from "react-icons/bs";

const CartButton = (props) => {
  return (
    <div>
      <button
      type="button"
        className="bg-[#ee5031] px-3 py-3 rounded-md text-white mt-5 hover:bg-[#f55f42] flex items-center gap-3 "
        // onClick={props.onClick}
      >
        <BsCartPlus />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
