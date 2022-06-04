import Category from "./Category";
import Pages from "./Pages";

const MainBody = () => {
  return (
    <div className="pt-7 mb-4 bg-slate-200 h-[240px] top-20 w-full absolute">
      <Category />
      <Pages />
    </div>
  );
};

export default MainBody;
