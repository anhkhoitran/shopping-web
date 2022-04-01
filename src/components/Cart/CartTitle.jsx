import Wrapper from "./Wrapper";

const CartTitle = () => {
  return (
    <Wrapper>
      <div className="w-full bg-white relative top-[5rem]">
        <ul className="flex flex-row justify-around py-3">
          <li>Product</li>
          <li>Name</li>
          <li>Price</li>
          <li>Quantity</li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default CartTitle;
