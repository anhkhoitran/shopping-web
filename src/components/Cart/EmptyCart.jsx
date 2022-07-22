import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="relative top-[20rem] text-center text-xl">
      <h1>Your cart is still empty!</h1>
      <Link to={"/"}>
        <button className="mt-4 border-2 px-4 py-4 rounded-md bg-rose-500 text-white">
          <p>Back to shopping!</p>
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
