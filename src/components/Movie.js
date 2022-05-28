import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w500";

const Movie = ({ title, poster_path, overview, vote_average }) => (
<div className="movie">
    <img src={IMG_API + poster_path} alt={title} />
     <div className="movie-info">
         <h3 style={{color:"#fff"}} >{title}</h3>
         <span style={{color:"#fff"}} >⭐{vote_average}</span>
     </div>
     <div className="movie-over">
         <h2 style={{color:"#fff"}} >Overview:</h2>
         <p style={{color:"#fff"}} >{overview}</p>
     </div>
</div>);

export default Movie;