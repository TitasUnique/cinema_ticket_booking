import React from 'react'
import './BookTicket.css'
import { useLocation } from "react-router-dom";

const BookTicket = () => {
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <>
    <div>BookTicket</div>
    <div>{data ? <h2>{data}</h2> : <h2>No data</h2>}</div>
    </>
  )
}

export default BookTicket