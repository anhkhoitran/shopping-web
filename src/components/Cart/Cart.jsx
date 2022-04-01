import CartItems from "./CartItems"
import CartTitle from "./CartTitle"
import { useSelector } from 'react-redux';


const Cart = () => {

  const cartItems = useSelector(state => state.cart.items);
  // const cartItems = [
  //   {
  //     id: 1,
  //     title: 'a',
  //     image: 'aa',
  //     price: 21,
  //     quantity: 1,
  //     total: 1
  //   }
  // ]



  return (
    <div className="top-[96px] relative bg-slate-100 h-[100vh]">
      <CartTitle />
      <ul>
        {cartItems.map(item => (
          <CartItems key={item.id} 
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
      </ul>
    </div>
  )
}

export default Cart