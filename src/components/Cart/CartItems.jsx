import { useDispatch } from "react-redux";
import { cartAction } from "../store/cart-slice";
import Wrapper from "./Wrapper";

const CartItems = (props) => {
  const { id, title, price, image, total, quantity } = props.item;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartAction.addItemtoCart({ id, title, price }));
  };

  const removeItemHandler = () => {
    dispatch(cartAction.removeItemfromCart({ id }));
  };

  return (
    <Wrapper>
      <div className="w-full bg-white  relative top-[6rem]">
        <div className="flex flex-row justify-around  py-3">
          <div>{id}</div>
          <div>{title}</div>
          <div>{price}</div>
          <div>{quantity}</div>
          <button onClick={addItemHandler} >+</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default CartItems;
