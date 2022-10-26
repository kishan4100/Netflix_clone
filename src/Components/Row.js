import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUlr] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetch);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetch]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUlr("");
    } else {
      movieTrailer(movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUlr(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="row__images">
        {movies.map((movie) => (
          <img
            className={`row__image ${props.isLarge && "row__largeimage"}`}
            onClick={() => handleClick(movie)}
            key={movie.id}
            src={` ${baseUrl}${
              props.isLarge ? movie.poster_path : movie.backdrop_path
            } `}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl ? <Youtube videoId={trailerUrl} opts={opts} /> : null}
    </div>
  );
}

export default Row;
