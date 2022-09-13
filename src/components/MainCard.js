import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function MainCard({ hotel }) {
  return (
    <Card >
      <CardMedia
        component="img"
        alt={hotel.name}
        height="256"
        image={hotel.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {hotel.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hotel.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small"
          component={Link}
          to={`/book/${hotel.id}`}
        >
          Book this property
        </Button>
      </CardActions>
    </Card>
  );
}
