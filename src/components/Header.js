import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Header() {
  const location = useLocation();
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Booking Easy
      </Typography>
      {
        location.pathname !== '/' &&
        <Button 
          variant="contained" 
          sx={{margin: '0px 5px 20px 0px'}}
          component={Link}
          to="/"
        >
          <ManageSearchIcon /> Find Hotel
        </Button> 
      }
      {
        location.pathname !== '/bookings' &&
        <Button 
          variant="contained" 
          sx={{margin: '0px 5px 20px 0px'}}
          component={Link}
          to="/bookings"
        >
          <CalendarMonthIcon /> Bookings
        </Button> 
      }

    </>
  );
}
