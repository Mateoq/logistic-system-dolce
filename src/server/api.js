import express from 'express';
import { API_PORT } from '../config/env';

const app = express();

app.get('/api', (req, res) => {
  res.send('Hello!!');
});

app.listen(API_PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`API listening on port: ${API_PORT}`);
  }
});
