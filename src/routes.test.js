import request from 'supertest';
import app from '../src/app.js';

describe('GET /', () => {
  it('should render properly', async () => {
    await request(app)
      .get('/')
      .expect(200);
  });
});

describe('GET /sudoku', () => {
  it('should return json with difficulty, puzzle and solution', async () => {
    await request(app)
      .get('/sudoku?difficulty=5')
      .expect(200);
  });

  it('should respect difficulty query', async () => {
    await request(app)
      .get('/sudoku?difficulty=5')
      .expect(200);
  });

  it('should return 500 if difficulty is not a number', async () => {
    await request(app)
      .get('/sudoku?difficulty=totally-not-a-number')
      .expect(500);
  });
});

describe('GET /404', () => {
  it('should return 404 for non-existent URLs', async () => {
    await request(app)
      .get('/404')
      .expect(404);
    await request(app)
      .get('/notfound')
      .expect(404);
  });
});
