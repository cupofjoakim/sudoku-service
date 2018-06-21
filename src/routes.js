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
  difficulty = parseInt(difficulty);
  if (isNaN(difficulty)) {
    throw Error('Expected a number for difficulty!');
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(SudokuGenerator.newPuzzle(difficulty));
});

export default routes;
