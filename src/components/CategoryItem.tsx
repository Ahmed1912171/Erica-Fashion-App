import { Link } from "react-router-dom";

const CategoryItem = ({ categoryTitle, image, link }) => (
  <div className="w-[300px] relative max-sm:w-[250px] max-sm:h-[250px]">
    <Link to={`/shop/${link}`}>
      <img src={`/src/assets/${image}`} className="h-full w-full" alt={categoryTitle} />
      <div className="bg-secondaryBrown text-white absolute bottom-0 w-full h-12 flex justify-center items-center">
        <h3 className="text-lg max-sm:text-base">{categoryTitle}</h3>
      </div>
    </Link>
  </div>
);

export default CategoryItem;
