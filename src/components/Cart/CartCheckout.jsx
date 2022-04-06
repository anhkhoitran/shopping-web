const CartCheckout = (props) => {
  return (
    <div className="h-[20rem] w-[25rem] bg-slate-100 relative top-[5rem] left-[10rem]">
      <div className="border-b-2 h-[4rem]">
        <h2 className="pt-[20px] pl-[2rem]">Order Summary</h2>
      </div>
      {/* <div className="grid grid-cols-2 h-[12rem] border-b-2 pl-[2rem] pt-[3rem]"> */}
      <div className="h-[12rem] flex flex-row gap-[10rem] items-center pl-[2rem] border-b-2">
        <div>
          <h1>Subtotal</h1>
          <h1>Shipping</h1>
        </div>
        <div>
          <p>${props.totalPrice}</p>
          <p>Free</p>
        </div>
      </div>
      <div className="flex flex-row gap-[188px] pl-[2rem] pt-5 bg-slate-200 h-[4rem]">
        <h2>Total</h2>
        <h2>${props.totalPrice}</h2>
      </div>
    </div>
  );
};

export default CartCheckout;
