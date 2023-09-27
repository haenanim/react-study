import React, { useEffect, useState } from 'react';

function MovieInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year'
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  });
  return (
    <div>
      <h1>Movie App !</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((genre, index) => (
                  <li key={index}>{genre}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieInfo;
