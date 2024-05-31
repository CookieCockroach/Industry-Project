import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from "./pages/QuizBody/QuizBody";
import Categories from "./pages/Category/Category";
import Tracker from "./pages/Tracker/Tracker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Categories />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
      </BrowserRouter>
  );
}
export default App;
