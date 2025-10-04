import { HtppError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HtppError) {
    res.status(err.status).json({
      error: err.message || err.name,
    });
  }

  res.status(500).json({
    error: err.message,
  });
};
