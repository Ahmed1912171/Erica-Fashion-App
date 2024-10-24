import React from "react";
import ProductItem from "./ProductItem";
import { nanoid } from "nanoid";

// Define Product type
type Product = {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  popularity: number;
  stock: number;
};

const ProductGrid = ({ products }: { products?: Product[] }) => {
  return (
    <div
      id="gridTop"
      className="max-w-screen-2xl grid grid-cols-1 gap-6 px-4 mx-auto mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {products &&
        products.slice(0, 8).map((product: Product) => (
          <ProductItem
            key={nanoid()}
            id={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
            popularity={product.popularity}
            stock={product.stock}
          />
        ))}
    </div>
  );
};

export default React.memo(ProductGrid);
