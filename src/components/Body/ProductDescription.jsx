import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cartAction } from "../store/cart-slice";
import CartButton from "./CartButton";

const ProductDescription = () => {
  const [description, setDescription] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(
      cartAction.addItemtoCart({
        id: item.id,
        title: item.title,
        price: item.price,
      })
    );
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
    <div className=" flex flex-row justify-center mt-20 gap-[60px]">
      <div>
        <img src={description.image} alt="" className="h-[400px]" />
      </div>
      <div className="text-2xl max-w-xl">
        <p className="font-bold">{description.title}</p>
        <div className="bg-slate-100 h-[70px] mt-2">
          <p className="font-bold text-orange-500 pl-4 py-3 text-4xl">
            ${description.price}
          </p>
        </div>
        

        <CartButton onClick={console.log('a')} />
   
        <p className="mt-7 text-justify">{description.description}</p>
      </div>
    </div>
  );
};

export default ProductDescription;
