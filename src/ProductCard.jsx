import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      key={product.id}
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <FavoriteButton productId={product.id} />
    </div>
  );
};

export default ProductCard;
