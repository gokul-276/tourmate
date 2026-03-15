const express = require('express');
const cors = require('cors');
const path = require('path');
const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Initialize SQLite database
const db = new Database(path.join(__dirname, 'tourmate.db'));
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT NOT NULL,
    password TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    destination TEXT NOT NULL,
    checkIn TEXT NOT NULL,
    checkOut TEXT NOT NULL,
    adults TEXT NOT NULL,
    children TEXT DEFAULT '0',
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    paymentMethod TEXT NOT NULL,
    specialRequests TEXT,
    status TEXT DEFAULT 'confirmed',
    bookingDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id)
  );

  CREATE TABLE IF NOT EXISTS contact_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

console.log('Database initialized');

// ============ AUTH API ============

// Register
app.post('/api/register', (req, res) => {
  try {
    const { fullName, email, phone, password } = req.body;
    if (!fullName || !email || !phone || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const stmt = db.prepare('INSERT INTO users (fullName, email, phone, password) VALUES (?, ?, ?, ?)');
    stmt.run(fullName, email, phone, hashedPassword);

    res.json({ success: true, message: 'Registration successful', email });
  } catch (err) {
    if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return res.status(400).json({ error: 'Email already registered' });
    }
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login
app.post('/api/login', (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    res.json({ success: true, user: { email: user.email, name: user.fullName } });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// ============ BOOKINGS API ============

app.post('/api/bookings', (req, res) => {
  try {
    const { destination, checkIn, checkOut, adults, children, firstName, lastName, email, phone, paymentMethod, specialRequests } = req.body;

    if (!destination || !checkIn || !checkOut || !adults || !firstName || !lastName || !email || !phone || !paymentMethod) {
      return res.status(400).json({ error: 'Required booking fields missing' });
    }

    const stmt = db.prepare(`
      INSERT INTO bookings (destination, checkIn, checkOut, adults, children, firstName, lastName, email, phone, paymentMethod, specialRequests)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    const result = stmt.run(destination, checkIn, checkOut, adults || '0', children || '0', firstName, lastName, email, phone, paymentMethod, specialRequests || '');

    res.json({ success: true, id: result.lastInsertRowid, message: 'Booking confirmed' });
  } catch (err) {
    res.status(500).json({ error: 'Booking failed' });
  }
});

app.get('/api/bookings', (req, res) => {
  try {
    const email = req.query.email;
    let rows;
    if (email) {
      rows = db.prepare('SELECT * FROM bookings WHERE email = ? ORDER BY bookingDate DESC').all(email);
    } else {
      rows = db.prepare('SELECT * FROM bookings ORDER BY bookingDate DESC').all();
    }
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

// ============ CONTACT API ============

app.post('/api/contact', (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Name, email, subject and message are required' });
    }

    const stmt = db.prepare('INSERT INTO contact_messages (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)');
    stmt.run(name, email, phone || '', subject, message);

    res.json({ success: true, message: 'Message sent successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// Serve frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`TourMate server running at http://localhost:${PORT}`);
});
