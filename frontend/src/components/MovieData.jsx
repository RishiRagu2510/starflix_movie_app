import React from "react";
import './movieData.css';
function MovieData({movie}){
    return (
        <div className={`date ${movie.active ? 'active':undefined}`}>
            <h2>{movie.date}</h2>
        </div>
    )
}
export default MovieData;