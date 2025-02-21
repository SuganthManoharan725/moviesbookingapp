import React, { useState, useEffect } from 'react';
import { FaTicketAlt, FaClipboardList } from 'react-icons/fa'; // Importing icons

const Activity = () => {
  // Local state to hold the booking entries
  const [bookingEntries, setBookingEntries] = useState([]);

  // Load bookings from localStorage on component mount
  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem('bookingEntries'));
    if (storedBookings) {
      setBookingEntries(storedBookings);
    }
  }, []); // This runs only once on mount

  // If bookingEntries is null or undefined, use an empty array
  const safeBookingEntries = bookingEntries || [];

  return (
    <>
      <div className="min-h-screen flex bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-black text-white flex flex-col p-6">
          <div className="flex flex-col space-y-10 mt-20">
            <h2 className="text-2xl font-semibold text-center text-white">Dashboard</h2>
            <a href="/booking" className="flex items-center space-x-2 text-white hover:text-gray-300">
              <FaTicketAlt className="text-xl" /> {/* Booking Icon */}
              <span>Booking</span>
            </a>
            <a className="flex items-center space-x-2 text-white hover:text-gray-300" style={{ cursor: 'pointer' }}>
              <FaClipboardList className="text-xl" /> {/* Activity Icon */}
              <span>Activity</span>
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-screen-md w-full p-6 bg-white rounded-lg shadow-lg mx-auto">
            {/* Activity Title */}
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Activity</h1>

            {/* Conditional Content - Table */}
            {safeBookingEntries.length === 0 ? (
              <p className="text-xl text-gray-500">No bookings yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
                  {/* Table Header */}
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium">ID</th>
                      <th className="px-6 py-3 text-left text-sm font-medium">Movie Name</th>
                      <th className="px-6 py-3 text-left text-sm font-medium">Tickets</th>
                      <th className="px-6 py-3 text-left text-sm font-medium">Amount</th>
                      <th className="px-6 py-3 text-left text-sm font-medium">Show Time</th>
                      <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className="text-gray-700">
                    {safeBookingEntries.map((entry, index) => (
                      <tr
                        key={index}
                        className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'} hover:bg-gray-200 transition duration-300`}
                      >
                        <td className="px-6 py-4 text-sm font-medium">{index + 1}</td>
                        <td className="px-6 py-4 text-sm font-medium">{entry.name}</td>
                        <td className="px-6 py-4 text-sm">{entry.ticketCount}</td>
                        <td className="px-6 py-4 text-sm">₹{25 * entry.ticketCount}</td>
                        <td className="px-6 py-4 text-sm">{entry.selectedTime}</td>
                        <td className="px-6 py-4 text-sm">{entry.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;
