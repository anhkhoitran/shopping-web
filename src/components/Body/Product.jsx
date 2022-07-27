import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const check = localStorage.getItem("all-product");
    if (check) {
      setProducts(JSON.parse(check));
    } else {
      const getProduct = async () => {
        const data = await fetch("https://fakestoreapi.com/products?limit=20");
        const results = await data.json();
        localStorage.setItem('all-product', JSON.stringify(results))
        setProducts(results);
      };
      getProduct();
    }
  }, []);

  return (
    <div className="pt-[50px] grid grid-cols-1 lg:grid-cols-4 gap-4 text-center max-w-[1650px] mx-auto">
      {products.map((item) => {
        return (
          <Link 
            to={`/description/${item.id}`}
            className="border-solid border-2 w-[300px] md:w-[400px] mx-auto "
            key={item.id}
          >
            <img className=" scale-50 md:scale-100 md:h-[250px] mx-auto mt-2" src={item.image} alt="" />
            <p>{item.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Product;
