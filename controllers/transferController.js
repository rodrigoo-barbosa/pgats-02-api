const express = require('express');
const router = express.Router();
const transferService = require('../services/transferService');

router.post('/', (req, res) => {
  try {
    const { from, to, amount } = req.body;
    if (!from || !to || typeof amount !== 'number') {
      return res.status(400).json({ error: 'Remetente, destinatário e valor são obrigatórios.' });
    }
    const result = transferService.transfer({ from, to, amount });
    if (result.error) return res.status(400).json({ error: result.error });
    res.status(201).json({ transfer: result.transfer });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Erro interno no servidor.' });
  }
});

router.get('/', (req, res) => {
  res.json({ transfers: transferService.getAllTransfers() });
});

module.exports = router;
