import React,  { useState, useContext } from 'react';
import Paper from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ChangeButton from './ChangeButton';
import Button from '@mui/material/Button';
import Context from '../context/Context';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function BookingReservation({ booking: { hotel, checkIn, checkOut, id} }) {
  const { bookings, setBookings } = useContext(Context);
  const [startDate, setStartDate] =  useState(checkIn);
  const [endDate, setEndDate] =  useState(checkOut);

  const cancelReservation = () => {
    const allBookings = [...bookings];
    setBookings([...allBookings.filter((item) => {return item.id !== id})]);
  };

  return (
    <Paper sx={{padding: '10px'}}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={12} md={3}>
          <img src={hotel.image} alt={hotel.name}/>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Typography gutterBottom variant="h4" component="div">
            {hotel.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" mb={5}>
            {hotel.description}
          </Typography>
          <TextField 
            type="date" 
            label="Check-in Date"
            value={startDate}
            InputLabelProps={{ shrink: true, required: true }}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <TextField 
            type="date" 
            label="Check-out Date"
            value={endDate}
            InputLabelProps={{ shrink: true, required: true }}
            onChange={(e) => setEndDate(e.target.value)}
          />
           <ChangeButton startDate={startDate} endDate={endDate} hotel={hotel} id={id}/>
        </Grid>
        <Button 
          size="large" 
          color="error"
          sx={{ marginLeft: '10px'}}
          onClick={cancelReservation}
          > 
          <HighlightOffIcon /> Cancel Reservation
        </Button>
      </Grid>
    </Paper>
  );
}


