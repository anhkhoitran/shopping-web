import { useState } from "react";
import { useParams } from "react-router-dom";


const ProductCategory = () => {
    const [catProduct,setCatProduct] = useState([])
    const params = useParams();

    const getProduct = async (type) => {
        const data = await fetch(`https://fakestoreapi.com/products/category/${type}`);
        const results = await data.json();
        setCatProduct(results);
    }

  return (
    <div>ProductCategory</div>
  )
}

export default ProductCategory