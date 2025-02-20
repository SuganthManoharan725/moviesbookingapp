// /components/BookingForm.js
import React from 'react';
import Input from './input';
import Button from './button';

const BookingForm = ({ ticketCount, setTicketCount, time, setTime, date, setDate, onBookTicket }) => {
  return (
    <div className="booking-form">
      <Input 
        label="Ticket Count"
        type="number"
        value={ticketCount}
        onChange={(e) => setTicketCount(e.target.value)}
      />
      <Input 
        label="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <Input 
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button onClick={onBookTicket}>Book Ticket</Button>
    </div>
  );
};

export default BookingForm;
