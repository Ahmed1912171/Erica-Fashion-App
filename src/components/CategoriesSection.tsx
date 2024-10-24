import CategoryItem from "./CategoryItem";

const CategoriesSection = () => {
  return (
    <div className="max-w-screen-2xl px-5 mx-auto mt-24">
      <h2 className="text-black text-5xl font-normal tracking-[1.56px] max-sm:text-4xl mb-12">
        Our Categories
      </h2>
      <div className="flex justify-between flex-wrap gap-y-6">
        <CategoryItem
          categoryTitle="Clothing"
          image="luxury category 1.png"
          link="Clothing"
        />
        <CategoryItem
          categoryTitle="Electronics"
          image="e3.jpg"
          link="Electronics"
        />
        <CategoryItem
          categoryTitle="Perfumes"
          image="p4.jpg"
          link="Perfumes"
        />
        <CategoryItem
          categoryTitle="Shoes"
          image="s1.jpg"
          link="Shoes"
        />
       
      </div>
    </div>
  );
};
export default CategoriesSection;
