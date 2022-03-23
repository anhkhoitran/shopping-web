import Category from "./Category"
import ProductPages from "./ProductPages"



const MainBody = () => {
  return (
    <div className="pt-7 bg-slate-200 h-40 mt-20 w-full absolute">
        <Category />
        <ProductPages />

    </div>
  )
}

export default MainBody