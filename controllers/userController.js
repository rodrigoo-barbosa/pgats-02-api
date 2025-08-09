const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

router.post('/register', (req, res) => {
  const { username, password, isFavored } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
  }
  const result = userService.registerUser({ username, password, isFavored });
  if (result.error) return res.status(409).json({ error: result.error });
  res.status(201).json({ user: result.user });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
  }
  const result = userService.loginUser({ username, password });
  if (result.error) return res.status(401).json({ error: result.error });
  res.json({ user: result.user });
});

router.get('/', (req, res) => {
  res.json({ users: userService.getAllUsers() });
});

module.exports = router;
