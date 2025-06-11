import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header/Header';
import Hero from './Components/Landing page/Hero';
import ExploreTour from './Components/Pages/ExploreTour';
import AddTour from './Components/Pages/AddTour';
import BookTour from './Components/Pages/BookTour';
import MyTour from './Components/Pages/MyTour';
import TourDetailsPage from './Components/Pages/TourDetailsPage';



function App() {
  return (
    <Router>
  
      <div >
        <Routes>
          <Route path="/add-tour" element={<AddTour />} />
          <Route path="/book-tour" element={<BookTour />} />
          <Route path="/my-tour" element={<MyTour />} />
          <Route path="/explore" element={<ExploreTour />} />
          <Route path="/tour/:id" element={<TourDetailsPage />} />
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
