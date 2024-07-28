import React from 'react'
import './BookTicket.css'
import { useLocation } from "react-router-dom";
import Button2 from '../SharedElements/Button2';
import screen from "../../Assests/Images/screen.png";
import seat from "../../Assests/Images/seat.png";

const BookTicket = () => {
  const location = useLocation();
  const { poster, timming, trailer, rating, details, seats } = location.state || {};

  const handelclick = () => {
    console.log("cicked");
    console.log(seats);
  }

  const handelCellclick = (cell) => {
    console.log(cell);
    console.log(generateRandomString());
    let x = generateRandomString();
    confirm(`Your seat is booked & the ticket ID is - ${x}`);
  };

  const showerror = (cell) => {
    alert(`${cell} no. seat is already Booked `);
  };

  function generateRandomString(length = 8) {
    const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  return (
    <>
      <div className="trailer">
        {trailer ? <video className='video-trailer' autoPlay muted loop><source src={trailer} type="video/mp4" />Your browser does not support the video tag.</video> : <span>No trailer data</span>}
      </div>
      <div className="main-book">
        <div className="book-left animate__animated animate__bounceInDown">
          <div className="poster">{poster ? <img src={poster} alt="poster" /> : <h2>No img data</h2>}</div>
          <div className="details">{details ? <span>{details}</span> : <span>No details data</span>}</div>
          <div className="ratings">{rating ? <span>{rating} <i className="fa-solid fa-star fa-beat"></i></span> : <span>No rating data</span>}</div>
          <Button2 clickevent={() => handelclick()}></Button2>
        </div>
        <div className="book-right animate__animated animate__zoomIn">
          <div className="timming">{timming ? <span>You are booking for {timming}</span> : <span>no timming data</span>}</div>
          <img className="screen-image" src={screen} alt="no image for screen" />
          <div className="bookSeats">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {seats.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className={cell.booked ? 'booked-seat' : 'available-seat'}
                        onClick={() => {
                          cell.booked ? showerror(cell.seatId) : handelCellclick(cell.seatId);
                        }}>
                        <img className="seat-image" src={seat} alt="no seat image" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookTicket