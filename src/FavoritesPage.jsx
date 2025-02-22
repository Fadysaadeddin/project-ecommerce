import { useEffect, useState } from "react";
import { useFavorites } from "./FavoritesContext"; // Removed 'mapping'
import ProductCard from "./ProductCard";

const FavoritesPage = () => {
  const { favoriteIds } = useFavorites();
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const productPromises = favoriteIds.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) => {
            if (!res.ok) throw new Error("Failed to fetch a product.");
            return res.json();
          })
        );

        const products = await Promise.all(productPromises);
        setFavoriteProducts(products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (favoriteIds.length > 0) {
      fetchFavoriteProducts();
    } else {
      setFavoriteProducts([]);
      setLoading(false);
    }
  }, [favoriteIds]);

  if (loading) return <p className="loading-message">LOADING FAVOURITES...</p>;
  if (error) return <p className="error-message">Error: {error}</p>;
  if (favoriteProducts.length === 0)
    return <p className="empty-message">No favourites added yet.</p>;

  return (
    <div>
      <h2>Favourite Products</h2>
      <div className="product-grid">
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
