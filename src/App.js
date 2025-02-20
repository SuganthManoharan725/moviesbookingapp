import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/appContext'; // Import your AppProvider
import Login from './pages/login'; // Your Login component
import Booking from './pages/booking'; // Your Booking component
import Activity from './pages/activity'; // Your Activity component
import Selection from './pages/selection'; // Your Selection component

const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/selection" element={<Selection />} />
      </Routes>
    </AppProvider>
  );
};

export default App;
