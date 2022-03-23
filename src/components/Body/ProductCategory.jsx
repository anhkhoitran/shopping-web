import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProductCategory = () => {
    const [catProduct,setCatProduct] = useState([])
    const params = useParams();

    const getProduct = async (type) => {
        const data = await fetch(`https://fakestoreapi.com/products/category/${type}`);
        const results = await data.json();
        setCatProduct(results);
    }

    useEffect(() => {
        getProduct(params.type);
    },[params.type])

  return (
    <div className="pt-10 mx-auto grid grid-cols-4 gap-5 text-center">
      {catProduct.map((item) => {
        return (
          <div className="border-solid border-2 w-[400px] mx-auto " key={item.id}>
            <img className="h-[250px]  mx-auto mt-2" src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  )
}

export default ProductCategory