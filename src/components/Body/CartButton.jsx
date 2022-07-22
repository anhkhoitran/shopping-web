
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CartButton = (props) => {
  return (
    <div>
      <button
      type="button"
        className="bg-rose-500 px-3 py-3 rounded-md text-white mt-5 hover:bg-rose-400 flex items-center gap-3 "
        onClick={props.onClick}
      >
        <AddShoppingCartIcon />
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
