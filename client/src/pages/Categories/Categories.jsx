import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";

const Categories = () => {
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
    <div className="home-page">
      <h1>Welcome to Wealthsimple Quiz</h1>
      <p>Improve your financial literacy with daily quizzes.</p>
      <DropdownButton
        id="dropdown-category-select"
        title={
          selectedCategory ? `Category: ${selectedCategory}` : "Select Category"
        }
      >
        <Dropdown.Item onClick={() => handleCategorySelect("investment")}>
          Investment
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect("budgeting")}>
          Budgeting
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleCategorySelect("taxes")}>
          Taxes
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleCategorySelect("retirement planning")}
        >
          Retirement Planning
        </Dropdown.Item>
      </DropdownButton>
      <Button
        variant="primary"
        onClick={startQuiz}
        disabled={!selectedCategory}
      >
        Start Quiz
      </Button>
      {/* <Button variant="secondary" onClick={() => navigate('/tracker')}>View Tracker</Button> */}
    </div>
  );
};

export default Categories;
