import React, { useState, useEffect } from 'react';
import './Movies.css';
import { useSelector } from 'react-redux';
const Movies = () => {
    const city = useSelector((state)=>state.storecity)
    return (
        <div className="m-main-div">
            <div className="m-left">unknown</div>
            <div className="m-right">
                <h1>Movies in {city}</h1>
                <div className="coming-soon">Comming soon</div>
                <div className="m-cards">

                </div>
            </div>
        </div>
    )
}

export default Movies