import React, { useState, useEffect } from 'react';
import './Movies.css';
import { useSelector, useDispatch } from 'react-redux';
import data from "../../Location_Data/MoviesData";
import { useNavigate } from "react-router-dom";
import Button1 from '../SharedElements/Button1';

const Movies = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const city = useSelector((state) => state.storecity);
    const theatre = useSelector((state) => state.storetheatre);
    const [movies, moviesset] = useState([]);

    useEffect(() => {
        const location = data.movies.find(movie => movie.Location === city);
        if (location) {
            moviesset(location.Theatres[theatre].Movies);
        } else {
            moviesset([]);
        }
    }, [city,theatre])

    const handelBookTicketClicked = (movieName, moviePoster, movietimming, movietrailer, movierating, moviedetails, moviebookedSeats) => {
        dispatch({
            type: "seatBookdetails",
            payload: moviebookedSeats
        })
        navigate("/bookSeat", { state: { name: movieName, poster: moviePoster, timming: movietimming, trailer: movietrailer, rating: movierating, details: moviedetails } });
    };

    return (
        <div className="m-main-div">
            <div className="m-left">current theatre is {theatre}</div>
            <div className="m-right">
                <h1>Movies in {city}</h1>
                <div className="cards-arena">
                    {movies.map((card, index) => (
                        <div className='cards' key={index}>
                            <img className="images" src={card.poster} alt="#" />
                            <div className="img-hover">
                                <div className="name">{card.name}</div>
                                <div className="timmings">{card.timming}</div>
                            </div>
                            <Button1 handelClick={() => handelBookTicketClicked(card.name, card.poster, card.timming, card.trailer, card.rating, card.details, card.bookedSeats)} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Movies