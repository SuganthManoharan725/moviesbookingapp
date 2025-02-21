import React, { useState } from 'react';
import { FaTicketAlt, FaClipboardList, FaSun, FaMoon, FaRegSun } from 'react-icons/fa'; // Importing icons
import { WiMoonAltWaningCrescent1 } from "react-icons/wi";
import {Link, useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const Selection = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  
  const { setBookingEntries } = useAppContext();
  
  // Safe destructuring with optional chaining
  const movie = state?.movie;  

  // Always call hooks before any early returns
  const [ticketCount, setTicketCount] = useState(3);
  const [selectedTime, setSelectedTime] = useState('9:00');
  const [date, setDate] = useState('2025-02-11');

  // Early return if movie is not available
  if (!movie) {
    return <div>Error: Movie data not found</div>;
  }

  const handleBooking = () => {
    const newBooking = { name: movie.name, ticketCount, selectedTime, date };
    setBookingEntries((prev) => prev + 1);

    let storedBookings = JSON.parse(localStorage.getItem('bookingEntries')) || []; // Default to empty array if nothing is stored
    storedBookings.push(newBooking);
    localStorage.setItem('bookingEntries', JSON.stringify(storedBookings));
    setBookingEntries(storedBookings); // Update your state with the new list of bookings
    navigate('/activity');
  };

  const handleIncrement = () => setTicketCount(ticketCount + 1);
  const handleDecrement = () => ticketCount > 1 && setTicketCount(ticketCount - 1);

  const handleTimeSelect = (time) => setSelectedTime(time);

  return (
    <div className="min-h-screen flex">
      {/* Left Sidebar */}
      <div className=" w-64 bg-black text-white flex flex-col p-6">
        <div className="flex flex-col space-y-10 mt-20">
          <h2 className="text-2xl font-semibold text-center text-white">Dashboard</h2>
          <Link to="/booking" className="flex items-center space-x-2 text-white hover:text-gray-300">
            <FaTicketAlt className="text-xl" />
            <span>Booking</span>
          </Link>
          <a onClick={handleBooking} className="flex items-center space-x-2 text-white hover:text-gray-300 cursor-pointer">
            <FaClipboardList className="text-xl" />
            <span>Activity</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-screen-md w-full p-6 bg-white rounded-lg shadow-lg mx-auto">
          {/* Image */}
          <div className="mb-6">
            <img src={movie.image} alt="Movie Poster" className="w-full h-64 object-cover rounded-lg mb-4" />
          </div>

          {/* Movie Title */}
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Book Tickets for {movie.name}</h1>

          {/* Ticket Count */}
          <div className="mb-4" style={{display:"flex"}}>
            <label className="block text-gray-700 text-sm font-bold mb-2">Ticket Count</label>
            <div className="flex items-center" style={{margin:"0px 40px"}}>
              <button onClick={handleDecrement} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l">
                -
              </button>
              <input
                type="number"
                value={ticketCount}
                readOnly
                className="appearance-none bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 w-16 text-center leading-tight focus:outline-none focus:border-blue-500"
              />
              <button onClick={handleIncrement} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-r">
                +
              </button>
            </div>
          </div>

          {/* Show Time */}
          <div className="mb-4" style={{ display: "flex" }}>
          <label className="block text-gray-700 text-sm font-bold mb-2">Show Time</label>
          <div className="flex space-x-2" style={{ margin: "0px 40px" }}>
            {[
              { time: '9:00', label: 'Morning', icon: <FaSun className="text-white-500" style={{margin:"auto"}}/> },
              { time: '12:00', label: 'Noon', icon: <WiMoonAltWaningCrescent1 className="text-white-500" style={{margin:"auto"}} /> },
              { time: '18:00', label: 'Night', icon: <FaMoon className="text-white-600" style={{margin:"auto"}} /> }
            ].map(({ time, label, icon }) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded ${selectedTime === time ? 'bg-gray-800 text-white' : ''}`}
                style={{display:"flex"}}
              >
                {icon} {/* Show the icon */}
                <span className="ml-2">{time}</span> {/* Show the time */}
              </button>
            ))}
          </div>
        </div>

          {/* Date Picker */}
          <div className="mb-6" style={{display:"flex"}}>
            <label className="block text-gray-700 text-sm font-bold mb-2"  style={{margin:"0px 40px"}}>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {/* Book Ticket Button */}
          <button
            onClick={handleBooking}
            className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-50"
            style={{margin:"0px 80px"}}>
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Selection;
