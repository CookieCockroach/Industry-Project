import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Category.scss";

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const startQuiz = () => {
    if (selectedCategory) {
      navigate(`/quiz?category=${selectedCategory}`);
    } else {
      alert("Please select a category to start the quiz.");
    }
  };

  return (
    <>
      <div className="categories-page">
        <h1>Categories</h1>
        <p>Choose a category to start the quiz:</p>
        <div className="category-buttons">
          <button
            className={`category-button ${
              selectedCategory === "investment" ? "selected" : ""
            }`}
            onClick={() => handleCategorySelect("investment")}
          >
            Investment
          </button>
          <button
            className={`category-button ${
              selectedCategory === "budgeting" ? "selected" : ""
            }`}
            onClick={() => handleCategorySelect("budgeting")}
          >
            Budgeting
          </button>
          <button
            className={`category-button ${
              selectedCategory === "taxes" ? "selected" : ""
            }`}
            onClick={() => handleCategorySelect("taxes")}
          >
            Taxes
          </button>
          <button
            className={`category-button ${
              selectedCategory === "retirement planning" ? "selected" : ""
            }`}
            onClick={() => handleCategorySelect("retirement planning")}
          >
            Retirement Planning
          </button>
        </div>
        <button
          className="start-button"
          onClick={startQuiz}
          disabled={!selectedCategory}
        >
          Start Quiz
        </button>
      </div>
    </>
  );
};

export default CategoriesPage;
