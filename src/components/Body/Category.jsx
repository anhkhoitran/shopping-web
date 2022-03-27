// import { useEffect, useState } from "react"
import CategoryItem from "./CategoryItem"

const DUMMY_CATEGORY = [
    {
        id: "1",
        name: 'Electronics',
    },
    {
        id: "2",
        name: "Jewelery",
    },
    {
        id: "3",
        name: "Men's clothing",
    },
    {
        id: "4",
        name: "Women's clothing",
    },

]

const Category = () => {
    // const [category, setCategory] = useState([])

    // const getCategory = async () => {
    //     const data = await fetch('https://fakestoreapi.com/products/categories')
    //     const results = await data.json();
    //     setCategory(results);
    // }

    // useEffect(() => {
    //     getCategory();
    // },[])


  return (
    <div>
        <h1 className="text-center mb-4">Category</h1>
        <CategoryItem category={DUMMY_CATEGORY} />
    </div>
  )
}

export default Category