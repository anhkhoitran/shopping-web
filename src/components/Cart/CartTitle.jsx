const CartTitle = () => {
  return (
    <div className="max-w-[75rem] bg-white relative top-[5rem] left-[6rem] border-b-2">
      <div className="flex flex-row py-3">
        <div className="w-[300px] text-center">
          <h2>Product</h2>
        </div>
        <div className="w-[400px] "></div>
        <div className="w-[150px] text-center">
          <h2>Price</h2>
        </div>
        <div className="w-[200px] text-center">
          <h2>Quantity</h2>
        </div>
        <div className="w-[150px] text-center">Total Price</div>
      </div>
    </div>
  );
};

export default CartTitle;
