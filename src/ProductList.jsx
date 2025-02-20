import { useEffect } from "react";
import useFetch from "./useFetch";
import ProductCard from "./ProductCard";

const ProductList = ({ selectedCategory }) => {
  const {
    data: products,
    loading,
    error,
    setUrl,
  } = useFetch("https://fakestoreapi.com/products");

  useEffect(() => {
    if (selectedCategory) {
      setUrl(`https://fakestoreapi.com/products/category/${selectedCategory}`);
    } else {
      setUrl("https://fakestoreapi.com/products");
    }
  }, [selectedCategory, setUrl]);

  if (loading) return <p className="loading-message">LOADING PRODUCTS ...</p>;
  if (error) return <p className="error-message">Error: {error}</p>;

  return (
    <div>
      <h2>PRODUCTS</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
