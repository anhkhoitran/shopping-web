import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slice";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItems = (props) => {
  const { id, title, price, image, total, quantity } = props.item;
  const dispatch = useDispatch();
  // const cart = useSelector(state => state.cart.items);


  const addItemHandler = () => {
    dispatch(cartAction.addItemtoCart({ id, title, price, image }));
  };

  const removeItemHandler = () => {
    dispatch(cartAction.removeItemfromCart(id));
  };

  return (
    <div className="flex flex-row h-[260px] items-center border-solid border-b-2 max-w-[400px] lg:max-w-[75rem] bg-white ">
      <div className="w-[300px]">
        <img src={image} alt="" className=" mx-auto scale-50" />
      </div>
      <div className=" w-[300px] lg:w-[400px]">
        <p>{title}</p>
      </div>
      <div className="w-[150px] text-center">
        <p>${price}</p>
      </div>
      <div className="w-[200px] flex flex-col-reverse lg:flex-row justify-center gap-1 lg:gap-4 items-center">
        <button onClick={removeItemHandler}><RemoveIcon fontSize="medium"/></button>
        <p>{quantity}</p>
        <button onClick={addItemHandler}><AddIcon fontSize="medium"/></button>
      </div>
      <div className="w-[150px] text-center">
        <p>${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItems;
