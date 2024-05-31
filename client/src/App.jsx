import "./App.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from "./pages/Quiz/Quiz";
import Categories from "./pages/Categories/Categories";

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
