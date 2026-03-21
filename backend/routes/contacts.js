import express from 'express';
import db from '../db.js';

const router = express.Router();

// POST a contact inquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    const [result] = await db.query(query, [name, email, message]);
    
    res.status(201).json({ message: 'Message sent successfully', contactId: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error sending message' });
  }
});

export default router;
