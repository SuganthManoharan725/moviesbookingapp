// /pages/booking.js
import React, { useState, useEffect } from 'react';
import { FaTicketAlt, FaClipboardList } from 'react-icons/fa'; 
import { Link, useNavigate } from 'react-router-dom';
import MovieCard from '../components/movieCard';
import Input from '../components/input';
import { getMovies } from '../services/movieService';

const Booking = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getMovies();
      setMovies(moviesData);
    };
    fetchMovies();
  }, []);

  const handleSearch = (e) => setSearch(e.target.value);

  const filteredMovies = movies.filter(movie =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <><div className="min-h-screen flex bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-black text-white flex flex-col p-6">
        <div className="flex flex-col space-y-10 mt-20"> {/* Adjusted position */}
          <h2 className="text-2xl font-semibold text-center text-white">Dashboard</h2>
          <Link to="/booking" className="flex items-center space-x-2 text-white hover:text-gray-300">
            <FaTicketAlt className="text-xl" /> {/* Booking Icon */}
            <span>Booking</span>
          </Link>
          <Link to="/activity" className="flex items-center space-x-2 text-white hover:text-gray-300" style={{ cursor: "pointer" }}>
            <FaClipboardList className="text-xl" /> {/* Activity Icon */}
            <span>Activity</span>
          </Link>
        </div>
      </div>
      
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
        <div className="max-w-screen-lg w-full p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Booking</h1>

          {/* Search Bar */}
          <Input
            label="Search Movies"
            value={search}
            onChange={handleSearch}
            className="mb-6" />

          {/* Movie List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => navigate('/selection', { state: { movie } })}
                className="cursor-pointer hover:scale-105 transform transition-all duration-200" />
            ))}
          </div>
        </div>
      </div></div></>
  );
};

export default Booking;
