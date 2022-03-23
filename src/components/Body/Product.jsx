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
    <div className="pt-10 mx-auto grid grid-cols-4 gap-5 text-center">
      {products.map((item) => {
        return (
          <div className="border-solid border-2 w-[400px] mx-auto " key={item.id}>
            <img className="h-[250px]  mx-auto mt-2" src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
