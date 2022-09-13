import * as React from 'react';
import { useParams } from "react-router-dom";
import '../App.css';
import BookDetails from '../components/BookDetails';
import { data } from '../data';
import Header from '../components/Header'

export default function Book() {
  let params = useParams();
  const hotel = data.find((property) => property.id === params.hotel);
  return (
    <div className='App'>
      <Header />
      <BookDetails  hotel={hotel}/>
    </div>
  );
}
