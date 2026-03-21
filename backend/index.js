import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import roomRoutes from './routes/rooms.js';
import bookingRoutes from './routes/bookings.js';
import contactRoutes from './routes/contacts.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/rooms', roomRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/contact', contactRoutes);

// Base route for testing
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to Hotel Maria API' });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
  console.error("SERVER ERROR:", err);
});
