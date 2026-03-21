import express from 'express';
import db from '../db.js';

const router = express.Router();

// POST a new booking
router.post('/', async (req, res) => {
  try {
    const { room_id, customer_name, phone, email, checkin_date, checkout_date, guests } = req.body;
    
    // Basic validation
    if (!room_id || !customer_name || !phone || !checkin_date || !checkout_date) {
      return res.status(400).json({ error: 'Missing required booking fields' });
    }

    const query = `
      INSERT INTO bookings (room_id, customer_name, phone, email, checkin_date, checkout_date, guests)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    const [result] = await db.query(query, [room_id, customer_name, phone, email, checkin_date, checkout_date, guests]);
    
    res.status(201).json({ message: 'Booking successful', bookingId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error creating booking' });
  }
});

export default router;
