import React, { createContext, useContext, useState } from 'react';

// Create Context
const AppContext = createContext();

// AppContextProvider component to provide context values to child components
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [bookingEntries, setBookingEntries] = useState(null);
  return (
    <AppContext.Provider value={{ user, setUser, bookingEntries, setBookingEntries }}>
       {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};
