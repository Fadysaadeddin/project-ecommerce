import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

import FavoriteButton from "./FavoriteButton";

const ProductDetail = () => {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`, [id]);

  if (loading) return <p className="loading-message">LOADING PRODUCT...</p>;
  if (error) return <p className="error-message">Error: {error}</p>;
  if (!product) return <p className="error-message">Product not found</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">
          Price: <span>${product.price}</span>
        </p>
        <FavoriteButton productId={product.id} />{" "}
      </div>
    </div>
  );
};

export default ProductDetail;
