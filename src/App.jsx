import React from 'react'
import './App.css'
import LandingPage from "./Components/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <div className='App'>
      <Routes>
      <Route path="/" element={<Navigate to="/landing" />} />
      <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
