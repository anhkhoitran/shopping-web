import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
  const [description, setDescription] = useState([]);
  const params = useParams();

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

        <button className="bg-[#ee5031] px-3 py-3 rounded-md text-white mt-5 hover:bg-[#f55f42] flex items-center gap-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </button>
        <p className="mt-7">{description.description}</p>
      </div>
    </div>
  );
};

export default ProductDescription;
