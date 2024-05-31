import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
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
      <h2>Category: {category}</h2>
      <div className={`quiz-card ${showAnswer ? "flipped" : ""}`}>
        <div className="quiz-card-inner">
          <div className="quiz-card-front">
            <Card>
              <Card.Body>
                <Card.Title>{currentQuestion.question}</Card.Title>
                <div className="answers">
                  {currentQuestion.answers.map((answer, index) => (
                    <Button
                      key={index}
                      variant="outline-primary"
                      onClick={() => handleAnswerClick(answer)}
                      disabled={showAnswer || hasAnsweredToday}
                    >
                      {answer}
                    </Button>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="quiz-card-back">
            <Card>
              <Card.Body>
                <Card.Title>Answer</Card.Title>
                <div className="answer-feedback">
                  <p>
                    {selectedAnswer === currentQuestion.correctAnswer
                      ? "Correct!"
                      : `Incorrect! The correct answer is: ${currentQuestion.correctAnswer}`}
                  </p>
                  <p>Come back tomorrow for the next question!</p>
                </div>
              </Card.Body>
            </Card>
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
