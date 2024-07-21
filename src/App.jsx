import React from 'react'
import './App.css'
import LandingPage from "./Components/LandingPage/LandingPage";
import BookTicket from "./Components/BookTicket/BookTicket";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Navigate to="/landing" />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/bookSeat" element={<BookTicket />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
