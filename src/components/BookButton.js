import React,  { useContext, useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Context from '../context/Context';
import { dateIsValid } from './dateIsValid';

export default function BookButton({ startDate, endDate, hotel}) {
  const { bookings, setBookings } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('');

  const bookHotel = () => {
    const booking = {
      id: startDate + endDate + hotel.id,
      hotel,
      checkIn: startDate,
      checkOut: endDate,
    }
    setBookings((prevState) => {
      return [...prevState, booking]
    })
  };

  const validate = () => {
    if (!dateIsValid(startDate) || !dateIsValid(endDate)) {
      setSeverity('error');
      setMessage('This date is not valid');
      setOpen(true);
    }
    else if(bookings.some((e) => e.id === startDate + endDate + hotel.id)) {
      setSeverity('error');
      setMessage('You already booked this hotel at this date');
      setOpen(true);
    }
    else {
      bookHotel();
      setSeverity('success');
      setMessage('Succes! Your reservation is done');
      setOpen(true);
    }
  }
  useEffect(() => {
    setOpen(false)
  }, [startDate, endDate]);

  return (
    <>
    {!open && 
      <Button 
        size="large" 
        variant="contained"
        onClick={validate}
        sx={{ marginLeft: '10px'}}
      >
        Book Now
      </Button>
    }
    <Collapse in={open}>
        <Alert severity={severity}>{message}</Alert>
    </Collapse>
    </>
  );
}