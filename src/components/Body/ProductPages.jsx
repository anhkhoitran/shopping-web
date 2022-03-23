import { Routes, Route } from "react-router-dom"
import Product from "./Product"
import ProductCategory from "./ProductCategory"


const ProductPages = () => {
  return (
    <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="/category/:type" element={<ProductCategory />} />
    </Routes>
  )
}

export default ProductPages