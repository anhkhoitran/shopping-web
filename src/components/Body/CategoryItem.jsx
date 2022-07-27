import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const data = props.category;
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center max-w-[250px] md:max-w-[700px] mx-auto">
      {data.map((item) => {
        return (
          <Link to={`/category/${item.name.toLowerCase()}`} key={item.id}>
            <div className=" border-2 px-4 pt-5 my-1 bg-white h-[150px] w-[120px] text-center rounded">
              <img src={item.img} alt="" className="h-[56px] w-[42px] mx-auto " />
              <h1 className="">{item.name}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryItem;
