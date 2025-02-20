// /pages/selection.js
import React, { useState } from 'react';
import { FaTicketAlt, FaClipboardList } from 'react-icons/fa'; // Importing icons
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Button from '../components/button';
import Input from '../components/input';

const Selection = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  
  // Hooks must be called at the top, before any conditionals or early returns
  const { setBookingEntries } = useAppContext();
  
  // Safe destructuring with optional chaining
  const movie = state?.movie;  

  // Always call hooks before any early returns
  const [ticketCount, setTicketCount] = useState(1);
  const [time, setTime] = useState('12:00');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  // Early return if movie is not available
  if (!movie) {
    return <div>Error: Movie data not found</div>;
  }

  const handleBooking = () => {
    const newBooking = {
      name: movie.name,
      ticketCount,
      time,
      date,
    };
    setBookingEntries(prevTicketCount => prevTicketCount + 1);
    let storedBookings = JSON.parse(localStorage.getItem('bookingEntries')) || [];  // Default to empty array if nothing is stored

    // Add the new booking entry
    storedBookings.push(newBooking);

    // Save updated bookings back to localStorage
    localStorage.setItem('bookingEntries', JSON.stringify(storedBookings));

    // Optionally, you may also want to update the state here if you use context or state for sharing booking entries
    setBookingEntries(storedBookings);  // Update your state with the new list of bookings

    // Navigate to the activity page
    navigate('/activity');
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
    {/* Left Sidebar */}
    <div className="w-64 bg-black text-white flex flex-col p-6">
      <div className="flex flex-col space-y-10 mt-20"> {/* Adjusted position */}
        <h2 className="text-2xl font-semibold text-center text-white">Dashboard</h2>
        <a href="/booking" className="flex items-center space-x-2 text-white hover:text-gray-300">
          <FaTicketAlt className="text-xl" /> {/* Booking Icon */}
          <span>Booking</span>
        </a>
        <a onClick={handleBooking} className="flex items-center space-x-2 text-white hover:text-gray-300" style={{cursor:"pointer"}}>
          <FaClipboardList className="text-xl" /> {/* Activity Icon */}
          <span>Activity</span>
        </a>
      </div>
    </div>

  {/* Main Content */}
  <div className="flex-1 p-6">
    <div className="max-w-screen-md w-full p-6 bg-white rounded-lg shadow-lg mx-auto">
      {/* Image above title */}
      <div className="mb-6">
        <img 
          src={movie.image} 
          alt="Movie Poster" 
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Book Tickets for {movie.name}
      </h1>

      {/* Ticket Count Input */}
      <Input 
        label="Ticket Count" 
        type="number" 
        value={ticketCount} 
        onChange={(e) => setTicketCount(e.target.value)} 
        className="mb-6" 
      />

      {/* Time Input */}
      <Input 
        label="Time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        className="mb-6" 
      />

      {/* Date Input */}
      <Input 
        label="Date" 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        className="mb-6" 
      />

      {/* Book Ticket Button */}
      <Button 
        onClick={handleBooking} 
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
        Book Ticket
      </Button>
    </div>
  </div>
</div>


  );
};

export default Selection;
