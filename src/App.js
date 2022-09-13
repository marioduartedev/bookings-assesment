import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Book from './pages/Book';
import Bookings from './pages/Bookings';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<Book/>} path="/book/:hotel"/>
          <Route element={<Bookings/>} path="/bookings"/>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
