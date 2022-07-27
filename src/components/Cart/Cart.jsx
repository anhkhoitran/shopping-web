import CartItems from "./CartItems";
import CartTitle from "./CartTitle";
import { useSelector } from "react-redux";
import CartCheckout from "./CartCheckout";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="top-[96px] relative bg-white h-screen">
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-center ">
        <div>
          <CartTitle />
          <div className="relative top-[5rem] max-w-[350px] lg:max-w-[77rem] h-[45rem] overflow-auto">
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
        <CartCheckout />
      </div>
    </div>
  );
};

export default Cart;
