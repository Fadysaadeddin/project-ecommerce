

import { useNavigate } from "react-router-dom"; 
import useFetch from "./useFetch";

const CategoryNavbar = ({ selectedCategory, setSelectedCategory }) => {
  const { data: categories, loading, error } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );
  const navigate = useNavigate(); 

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="category-navbar">
      {categories?.map((category) => (
        <button
          key={category}
          className={`category-item ${selectedCategory === category ? "active" : ""}`}
          onClick={() => {
            setSelectedCategory(category); 
            navigate("/"); 
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryNavbar;
