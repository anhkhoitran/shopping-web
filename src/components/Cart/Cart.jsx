import CartItems from "./CartItems";
import CartTitle from "./CartTitle";
import { useSelector } from "react-redux";
import CartCheckout from "./CartCheckout";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAllPrice = useSelector((state) => state.cart.totalAllPrice);

  return (
    <div className="top-[96px] relative bg-white h-[100vh]">
      <div className="flex flex-row">
        <div>
          <CartTitle />
          <div className="relative top-[5rem] w-[77rem] left-[6rem] h-[45rem] overflow-auto">
            {cartItems.map((item) => (
              <CartItems
                key={item.id}
                item={{
                  id: item.id,
                  title: item.title,
                  image: item.image,
                  price: item.price,
                  quantity: item.quantity,
                  total: item.totalPrice,
                }}
              />
            ))}
          </div>
        </div>
        <CartCheckout totalPrice={totalAllPrice.toFixed(2)} />
      </div>
    </div>
  );
};

export default Cart;
