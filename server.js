const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const users = [
  { name: 'Ganza Eloi', email: 'plpurugwiro@gmail.com', password: 'urugwiro' }
];
const resetTokens = new Map();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.post('/api/signup', (req, res) => {
  return res.status(403).json({ success: false, message: 'Sign up is disabled. Use the allowed login credentials.' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required.' });
  }

  const normalizedEmail = email.toLowerCase();
  const user = users.find((item) => item.email === normalizedEmail);
  if (!user || user.password !== password) {
    return res.status(401).json({ success: false, message: 'Invalid login credentials.' });
  }

  return res.json({ success: true, message: `Login successful. Welcome back, ${user.name}!` });
});

app.post('/api/forgot-password', (req, res) => {
  return res.status(403).json({ success: false, message: 'Password reset is disabled. Use the allowed login credentials.' });
});

app.post('/api/reset-password', (req, res) => {
  return res.status(403).json({ success: false, message: 'Reset password is disabled. Use the allowed login credentials.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
