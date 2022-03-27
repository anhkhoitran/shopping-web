import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const ProductCategory = () => {
    const [catProduct,setCatProduct] = useState([])
    const params = useParams();
    
    const getProduct = async (type) => {
      const check = localStorage.getItem(`${type}`);
      if(check) {
        setCatProduct(JSON.parse(check));
      } else {

        const data = await fetch(`https://fakestoreapi.com/products/category/${type}`);
        const results = await data.json();
        localStorage.setItem(type, JSON.stringify(results));
        setCatProduct(results);
      }
    
    }

    useEffect(() => {
        getProduct(params.type);
    },[params.type])

  return (
    <div className="pt-10 mx-auto grid grid-cols-4 gap-5 text-center">
      {catProduct.map((item) => {
        return (
          <Link to={`/description/${item.id}`} className="border-solid border-2 w-[400px] mx-auto " key={item.id}>
            <img className="h-[250px]  mx-auto mt-2" src={item.image} alt="" />
            <p>{item.title}</p>
          </Link>
        );
      })}
    </div>
  )
}

export default ProductCategory