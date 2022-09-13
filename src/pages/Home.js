import * as React from 'react';
import '../App.css';
import MainCard from '../components/MainCard';
import { data } from '../data';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Header from '../components/Header'

export default function Home() {
  return (
    <div className='App'>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data.map((hotel, index) => 
            <Grid item xs={12} sm={6} md={3} key={index}>
              <MainCard  hotel={hotel}/>
            </Grid>
          )}
        </Grid>
      </Box>
    </div>
  );
}
