import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SuccessAdd from "../Notification/SuccessAdd";
import { cartAction } from "../store/cart-slice";
import CartButton from "./CartButton";

const ProductDescription = () => {
  const [description, setDescription] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(
      cartAction.addItemtoCart({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
      })
    );

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    },1000)
  };

  const getDescription = async (id) => {
    const check = localStorage.getItem(`${id}`);
    if (check) {
      setDescription(JSON.parse(check));
    } else {
      const data = await fetch(`https://fakestoreapi.com/products/${id}`);
      const results = await data.json();
      localStorage.setItem(id, JSON.stringify(results));
      setDescription(results);
    }
  };

  useEffect(() => {
    getDescription(params.id);
  }, [params.id]);

  return (
    <div>
      <div className=" flex flex-col items-center lg:flex-row lg:justify-center mt-20 gap-[60px] pb-[4rem] max-w-[300px] mx-auto md:max-w-full">
        <div>
          <img src={description.image} alt="" className="md:h-[400px] scale-50" />
        </div>
        <div className="text-2xl max-w-xl">
          <p className="font-bold">{description.title}</p>
          <div className="bg-slate-100 h-[70px] mt-2">
            <p className="font-bold text-rose-500 pl-4 py-3 text-4xl">
              ${description.price}
            </p>
          </div>

          <CartButton onClick={() => addItemHandler(description)} />

          <p className="mt-7 text-justify text-lg">{description.description}</p>
        </div>
      </div>
      {isAdded && <SuccessAdd />}
    </div>
  );
};

export default ProductDescription;
