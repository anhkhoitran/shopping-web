import { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async (type) => { 
      const data = await fetch("https://fakestoreapi.com/products?limit=20");
      const results = await data.json();
      setProducts(results);
    };

    getProduct();
  }, []);

  return (
    <div className="pt-10 grid grid-cols-5 gap-5 content-center">
      {products.map((item) => {
        return (
          <div className="border-solid border-2" key={item.id}>
            <img className="h-[300px] mx-auto " src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
