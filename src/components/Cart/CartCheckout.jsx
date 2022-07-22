import { useSelector } from "react-redux";


const CartCheckout = () => {

  const totalAllPrice = useSelector((state) => state.cart.totalAllPrice);


  return (
    <div className="h-[20rem] w-[25rem] bg-slate-100 relative top-[5rem] ml-5 mt-5 -translate-x-3 ">
      <div className="border-b-2 h-[4rem]">
        <h1 className="pt-[20px] pl-[2rem]">Order Summary</h1>
      </div>
      {/* <div className="grid grid-cols-2 h-[12rem] border-b-2 pl-[2rem] pt-[3rem]"> */}
      <div className="h-[12rem] flex flex-row gap-[10rem] items-center pl-[2rem] border-b-2">
        <div>
          <p>Subtotal</p>
          <p>Shipping</p>
        </div>
        <div>
          <p>${totalAllPrice.toFixed(2)}</p>
          <p>Free</p>
        </div>
      </div>
      <div className="flex flex-row gap-[188px] pl-[2rem] pt-5 bg-slate-200 h-[4rem]">
        <h1>Total</h1>
        <h1>${totalAllPrice.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default CartCheckout;
