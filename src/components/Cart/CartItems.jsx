import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/cart-slice";


const CartItems = (props) => {
  const { id, title, price, image, total, quantity } = props.item;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);


  const addItemHandler = () => {
    dispatch(cartAction.addItemtoCart({ id, title, price, image }));
  };

  const removeItemHandler = () => {
    dispatch(cartAction.removeItemfromCart(id));
  };

  return (
    <div className="flex flex-row h-[260px] items-center border-solid border-2 max-w-[75rem] bg-white ">
      <div className="w-[300px]">
        <img src={image} alt="" className=" mx-auto scale-50" />
      </div>
      <div className=" w-[400px]">
        <h2>{title}</h2>
      </div>
      <div className="w-[200px] text-center">
        <h2>${price}</h2>
      </div>
      <div className="w-[300px] flex flex-row justify-center gap-4">
        <button onClick={removeItemHandler}>-</button>
        <h2>{quantity}</h2>
        <button onClick={addItemHandler}>+</button>
      </div>
    </div>
  );
};

export default CartItems;
