const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).render('error', {
    message: 'Something went wrong and error was triggered!',
  });
};

export default errorHandler;
