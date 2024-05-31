import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from "./pages/QuizBody/QuizBody";
import Categories from "./pages/Category/Category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Categories />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
