import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const data = props.category;
  return (
    <div className="flex justify-center">
      {data.map((item) => {
        return (
          <Link to={`/category/${item.name.toLowerCase()}`} key={item.id}>
            <div className="mx-4 border-2 px-4 pt-5 bg-white h-[150px] w-[120px] text-center rounded">
              <img src={item.img} className="h-[56px] w-[42px] mx-auto " />
              <h1 className="">{item.name}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryItem;
