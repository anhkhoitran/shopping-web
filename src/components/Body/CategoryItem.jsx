import { Link } from "react-router-dom";

const CategoryItem = (props) => {
  const data = props.category;
  return (
    <div className="flex justify-center">
      {data.map((item) => {
        return (
          <Link to={`/category/${item.name.toLowerCase()}`} key={item.id}>
            <div className="mx-4 border-2 px-4 py-4 bg-white">
              <h1>{item.name}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryItem;
