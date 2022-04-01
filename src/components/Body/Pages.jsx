import { Routes, Route } from "react-router-dom"
import Product from "./Product"
import ProductCategory from "./ProductCategory"
import ProductDescription from "./ProductDescription"


const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="/category/:type" element={<ProductCategory />} />
        <Route path="/description/:id" element={<ProductDescription />} />
    </Routes>
  )
}

export default Pages