import { Link } from "react-router-dom";
import { formatCategoryName } from "../utils/formatCategoryName";

// Define the type for the props
interface ProductItemProps {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  popularity: number;
  stock: number;
}

const ProductItem: React.FC<ProductItemProps> = ({
  id,
  image,
  title,
  category,
  price,
  popularity,
  stock,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "10px",
        maxWidth: "400px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        transition: "transform 0.3s",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <Link
        to={`/product/${id}`}
        style={{
          width: "100%",
          height: "250px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={`/src/assets/${image}`}
          alt={title}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            transition: "transform 0.3s",
          }}
        />
      </Link>
      
      <Link
        to={`/product/${id}`}
        style={{
          color: "black",
          textAlign: "center",
          fontSize: "1.25rem",
          fontWeight: "bold",
        }}
      >
        <h2>{title}</h2>
      </Link>
      <p style={{ color: "#8b4513", textAlign: "center", fontSize: "1rem" }}>
        {formatCategoryName(category)}
      </p>
      <p style={{ color: "black", textAlign: "center", fontSize: "1.5rem", fontWeight: "bold" }}>
        ${price}
      </p>
      <p style={{ color: "black", textAlign: "center", fontSize: "0.875rem" }}>
        Popularity: {popularity}
      </p>
      <p style={{ color: "black", textAlign: "center", fontSize: "0.875rem" }}>
        Stock: {stock}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Link
          to={`/product/${id}`}
          style={{
            backgroundColor: "#8b4513",
            color: "white",
            textAlign: "center",
            fontSize: "1rem",
            padding: "8px",
            borderRadius: "4px",
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          View product
        </Link>
        <Link
          to={`/product/${id}`}
          style={{
            backgroundColor: "white",
            color: "black",
            textAlign: "center",
            fontSize: "1rem",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid rgba(0, 0, 0, 0.4)",
            textDecoration: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
