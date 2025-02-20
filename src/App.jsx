

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import FavoritesPage from "./FavoritesPage";
import Navbar from "./Navbar";
import CategoryNavbar from "./CategoryNavbar";
import { FavoritesProvider } from "./FavoritesContext";
import "./App.css";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <FavoritesProvider>
      <Router>
        <Navbar setSelectedCategory={setSelectedCategory} />
        <CategoryNavbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favourites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
};

export default App;
