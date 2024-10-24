import React from "react";
import { Link } from "react-router-dom";

// Define the types for the props
interface CategoryItemProps {
  categoryTitle: string; // Title of the category
  image: string;         // Image filename or URL
  link: string;          // Path for the link
}

// Functional component with typed props
const CategoryItem: React.FC<CategoryItemProps> = ({
  categoryTitle,
  image,
  link,
}) => (
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
