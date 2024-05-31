<<<<<<< HEAD
import './App.scss'
import Tracker from './pages/Tracker/Tracker'
=======
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from "./pages/QuizBody/QuizBody";
import Categories from "./pages/Category/Category";
>>>>>>> develop

function App() {
  return (
<<<<<<< HEAD
    <>
    <Tracker></Tracker>
    </>
  )
=======
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Categories />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
>>>>>>> develop
}
export default App;
