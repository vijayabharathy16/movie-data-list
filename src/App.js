import React, { useEffect, useState} from "react";
import Movie from "./components/Movie";
import './App.css';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b1d6706f0f5168eb2bdeac6346e9ceb&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=6b1d6706f0f5168eb2bdeac6346e9ceb&page=1&query=";

function App() {
const [movies, setMovies] = useState([]);
const [searchTearm, setSearchTerm] = useState('');
useEffect(() => {
  fetch(FEATURED_API)
  .then((res)=> res.json())
  .then((data) => {
    setMovies(data.results)
  });
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTearm) {
    fetch(SEARCH_API + searchTearm)
    .then((res)=> res.json())
    .then((data) => {
      setMovies(data.results)
    });
    setSearchTerm("");
  }
  };

  const handleOnChange = (e) =>{
    setSearchTerm(e.target.value);
  }

  return (<>
    <header>
      <form onSubmit={handleOnSubmit}>
        <h4 style={{color:"#fff"}} >LA cinema</h4>
        <div class="col-lg-3 sm-2 mb-2">
    <input type="search" class="form-control ms-2" placeholder="Search movie" value={searchTearm} onChange={handleOnChange} aria-label="First name"/>
    <button className="btn btn-primary mt-2 ms-2">Search</button>
  </div>

      {/* <input className="search" placeholder="Search Movies" type="search" value={searchTearm} onChange={handleOnChange} /> */}
      </form>
    </header>
    <div className="movie-container">
    {movies.length > 0 && movies.map((movie) => 
    <Movie key={movie.id} {...movie} />
    )}
    </div>
    </>
  );

  
}


export default App;