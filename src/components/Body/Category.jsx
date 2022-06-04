// import { useEffect, useState } from "react"
import CategoryItem from "./CategoryItem";
import electronic from '../../asset/electronic.jpg';
import jewelery from '../../asset/jewelery.jpg';
import men_clothing from '../../asset/men_clothing.jpg';
import women_clothing from '../../asset/women_clothing.jpg';


const CATEGORY = [
    {
        id: "1",
        name: 'Electronics',
        img: electronic,
    },
    {
        id: "2",
        name: "Jewelery",
        img: jewelery,
    },
    {
        id: "3",
        name: "Men's clothing",
        img: men_clothing,
    },
    {
        id: "4",
        name: "Women's clothing",
        img: women_clothing,
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
        <CategoryItem category={CATEGORY} />
    </div>
  )
}

export default Category