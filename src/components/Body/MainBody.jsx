import Category from "./Category";
import Pages from "./Pages";

const MainBody = () => {
  return (   
      <div className="pt-7 mb-4 bg-slate-200 h-[400px] md:h-[240px] top-20  absolute w-full">
        <Category />
        <Pages />
      </div>

  );
};

export default MainBody;
