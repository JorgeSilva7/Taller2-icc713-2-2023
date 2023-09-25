// src/controllers/gameController.js
import videoGames from '../load-games.js';

// Función para buscar un juego por nombre
const getGameByName = (name) => {
  for (const category in videoGames) {
    const games = videoGames[category];
    const foundGame = games.find((game) =>
      game.name.toLowerCase() === name.toLowerCase()
    );
    if (foundGame) {
      return foundGame;
    }
  }
  return null;
};

export { getGameByName };


