import React,  { useState } from 'react';
import Paper from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import BookButton from './BookButton';

export default function BookDetails({ hotel, checkIn = '', checkOut = '' }) {
  const [startDate, setStartDate] =  useState(checkIn);
  const [endDate, setEndDate] =  useState(checkOut);

  return (
    <Paper>
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
           <BookButton startDate={startDate} endDate={endDate} hotel={hotel}/>
        </Grid>
      </Grid>
    </Paper>
  );
}
