import { Router } from 'express';
import SudokuGenerator from './services/sudoku-generator';

const routes = Router();

/**
 * GET home page
 */
routes.get('/', (req, res) => {
  res.render('index', { title: 'Express Babel' });
});

routes.get('/sudoku', (req, res, next) => {
  let { difficulty } = req.query;
  if (difficulty == null || difficulty === '') {
    difficulty = 3;
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(SudokuGenerator.newPuzzle(difficulty));
});

export default routes;
