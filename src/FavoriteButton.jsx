import { useFavorites } from "./FavoritesContext";

const FavoriteButton = ({ productId }) => {
  const { favoriteIds, toggleFavorite } = useFavorites();

  const isFavorite = favoriteIds.includes(productId);

  return (
    <button
      className="favorite-btn"
      onClick={(e) => {
        e.stopPropagation(); 
        toggleFavorite(productId);
      }}
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
};

export default FavoriteButton;
