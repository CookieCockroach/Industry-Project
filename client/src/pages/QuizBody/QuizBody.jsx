import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./QuizBody.scss";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [hasAnsweredToday, setHasAnsweredToday] = useState(false);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  useEffect(() => {
    if (!category) {
      alert("No category selected. Redirecting to home page.");
      window.location.href = "/";
      return;
    }

    axios
      .get("/api/questions")
      .then((response) => {
        const filteredQuestions = response.data.filter(
          (q) => q.category === category
        );
        setQuestions(filteredQuestions);
        setCurrentQuestion(filteredQuestions[0]);
        checkIfAnsweredToday();
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, [category]);

  // const checkIfAnsweredToday = () => {
  //   const lastAnsweredDate = localStorage.getItem("lastAnsweredDate");
  //   const today = new Date().toISOString().split("T")[0];
  //   setHasAnsweredToday(lastAnsweredDate === today);
  // };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    setShowAnswer(true);
    const today = new Date().toISOString().split("T")[0];
    localStorage.setItem("lastAnsweredDate", today);
    setHasAnsweredToday(true);
  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-page">
      <h2 className="quiz-page__category">Category: {category}</h2>
      <div className={`quiz-card ${showAnswer ? "flipped" : ""}`}>
        <div className="quiz-card-inner">
          <div className="quiz-card-front">
            <div>
              <h3>{currentQuestion.question}</h3>
              <div className="answers">
                {currentQuestion.answers.map((answer, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(answer)}
                    disabled={showAnswer || hasAnsweredToday}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="quiz-card-back">
            <div>
              <h3>Answer</h3>
              <div className="answer-feedback">
                <p>
                  {selectedAnswer === currentQuestion.correctAnswer
                    ? "Correct!"
                    : `Incorrect. The correct answer is: ${currentQuestion.correctAnswer}`}
                </p>
                <p>Come back tomorrow for the next question!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {hasAnsweredToday && !showAnswer && (
        <div className="answer-feedback">
          <p>
            You have already answered today's question. Come back tomorrow for a
            new question!
          </p>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
