const CategoryItem = (props) => {
  const data = props.category;
  return (
    <div className="flex justify-center">
      {data.map((item) => {
        return (
          <div className="mx-4 border-2 px-4 py-4 bg-white" key={item.id}>
            <h1 >{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryItem;
