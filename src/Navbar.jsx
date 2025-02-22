import { Link } from "react-router-dom";
import { useFavorites } from "./FavoritesContext";

const Navbar = ({ setSelectedCategory }) => {
  const { favoriteIds } = useFavorites();

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="nav-link"
        onClick={() => setSelectedCategory(null)} 
      >
        Home
      </Link>
      <Link to="/favourites" className="nav-link">
        Favourites ({favoriteIds.length})
      </Link>
    </nav>
  );
};

export default Navbar;
