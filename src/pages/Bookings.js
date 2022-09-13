import React,  { useContext } from 'react';
import '../App.css';
import Header from '../components/Header'
import Context from '../context/Context';
import BookingReservation from '../components/BookingReservation';
import Alert from '@mui/material/Alert';

export default function Bookings() {
  const { bookings } = useContext(Context);
  if(bookings.length > 0 ) {
    return (
      <div className='App'>
        <Header />
        {bookings.map((booking, index) => 
          <div key={index} style={{marginBottom: '15px'}}>
            <BookingReservation  booking={booking} />
          </div>
        )}
      </div>
    );
  }
  return (
    <div className='App'>
      <Header />
      <Alert severity="info">You do not have any reservation.</Alert>
    </div>
  )
}
