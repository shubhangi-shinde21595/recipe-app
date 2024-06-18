import Home from "./Components/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetails from "./Components/RecipeDetails";
import Category from "./Components/Category";
import SearchElement from "./Components/SearchElement";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:idMeal" element={<RecipeDetails />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/search/:searchTerm" element={<SearchElement />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
