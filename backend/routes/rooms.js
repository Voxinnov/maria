import express from 'express';
import db from '../db.js';

const router = express.Router();

// GET all rooms
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM rooms');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error retrieving rooms' });
  }
});

// GET room by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM rooms WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Room not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error retrieving room' });
  }
});

export default router;
