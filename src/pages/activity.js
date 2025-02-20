import React, { useState, useEffect } from 'react';
import { FaTicketAlt, FaClipboardList } from 'react-icons/fa'; // Importing icons
import { useAppContext } from '../context/appContext';

const Activity = () => {
  const { bookingEntries } = useAppContext();

  // If bookingEntries is null or undefined, use an empty array
  const safeBookingEntries = bookingEntries || [];

  return (
  <>
  <div className="min-h-screen flex bg-gray-100">
    <div className="w-64 bg-black text-white flex flex-col p-6">
      <div className="flex flex-col space-y-10 mt-20"> {/* Adjusted position */}
        <h2 className="text-2xl font-semibold text-center text-white">Dashboard</h2>
        <a href="/booking" className="flex items-center space-x-2 text-white hover:text-gray-300">
          <FaTicketAlt className="text-xl" /> {/* Booking Icon */}
          <span>Booking</span>
        </a>
        <a  className="flex items-center space-x-2 text-white hover:text-gray-300" style={{ cursor: "pointer" }}>
          <FaClipboardList className="text-xl" /> {/* Activity Icon */}
          <span>Activity</span>
        </a>
      </div>
    </div>
    <div className="max-w-screen-md w-full p-6 bg-white rounded-lg shadow-lg mx-auto">
        {/* Activity Title */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Activity</h1>

        {/* Conditional Content */}
        {safeBookingEntries.length === 0 ? (
          <p className="text-xl text-gray-500">No bookings yet.</p>
        ) : (
          <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
            <ul className="space-y-4">
              {safeBookingEntries.map((entry, index) => (
                <li
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">{entry.name}</span>
                    <span className="text-gray-500 text-sm">{entry.date}</span>
                  </div>
                  <div className="text-gray-600">
                    {entry.ticketCount} Tickets - ₹{25 * entry.ticketCount} - {entry.time}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div></div></>


  );
};

export default Activity;
