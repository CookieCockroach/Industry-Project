import './App.scss'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tracker from './pages/Tracker/Tracker'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/track" element={<Tracker />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App