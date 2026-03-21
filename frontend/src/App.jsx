import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import RoomDetailPage from './pages/RoomDetailPage';
import AboutPage from './pages/AboutPage';
import AmenitiesPage from './pages/AmenitiesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import RestaurantPage from './pages/RestaurantPage';
import AttractionsPage from './pages/AttractionsPage';
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/rooms/:id" element={<RoomDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/amenities" element={<AmenitiesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/restaurant" element={<RestaurantPage />} />
            <Route path="/attractions" element={<AttractionsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
