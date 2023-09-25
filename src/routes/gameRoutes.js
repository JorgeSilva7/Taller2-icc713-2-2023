// src/routes/gameRoutes.js
import express from 'express';
import { getGameByName } from '../controllers/gameController.js'; // Añade la extensión .js

const router = express.Router();

// Ruta para buscar un juego por nombre
router.get('/game', (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: 'Debes proporcionar un nombre de juego.' });
  }

  const game = getGameByName(name);

  if (!game) {
    return res.status(404).json({ error: 'Juego no encontrado.' });
  }

  res.json(game);
});

export default router;
