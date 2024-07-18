import React, { useState, useEffect } from 'react';
import './Movies.css';
import { useSelector } from 'react-redux';
import data from "../../Location_Data/MoviesData";
const Movies = () => {
    const city = useSelector((state)=>state.storecity);
    const theatre = useSelector((state)=>state.storetheatre);
    const [movies,moviesset]=useState([]);

    useEffect(()=>{
        const location = data.movies.find(movie => movie.Location === city);
        if (location) {
            moviesset(location.Theatres[theatre].Movies);
          } else {
            moviesset([]);
          }
    },[city])
    return (
        <div className="m-main-div">
            <div className="m-left">Upcoming Movies</div>
            <div className="m-right">
                <h1>Movies in {city}</h1>
                <div className="cards-arena">
                    {movies.map((card,index)=>(
                        <div className='cards' key={index}>
                            <img className="images" src={card.poster} alt="#" />
                            <div className="name">{card.name}</div>
                            <div className="timmings">{card.timming}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Movies