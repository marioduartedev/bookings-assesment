import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

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
          Back Home Page
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
          View your bookings
        </Button> 
      }

    </>
  );
}
