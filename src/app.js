import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';

import errorHandler from './error-handler';
import routes from './routes';

const app = express();
app.disable('x-powered-by');

// View engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(
  logger('dev', {
    skip: () => app.get('env') === 'test',
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/', routes);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(errorHandler);

export default app;
