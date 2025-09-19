import { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import MovieList from './components/MovieList.jsx';
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url =
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="bg-black" style={{ backgroundColor: 'black' }}>
        <Header />
        <Banner />
        <MovieList title="PHIM HOT" data={movies.slice(0, 9)} />
        <MovieList title="PHIM ĐÁNH GIÁ CAO" data={movies.slice(10, 19)} />
      </div>
    </>
  );
}

export default App;
