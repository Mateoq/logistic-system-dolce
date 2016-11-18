import express from 'express';
import jwt from 'jsonwebtoken';

// Config.
import configureSession from './utils/config/configure-session';

// Constants.
import { API_PORT, TOKEN_SECRET } from '../config/env';

// Services.
import { fetchUserRequest } from './utils/api-services';

const app = express();

// Setup session.
app.use(configureSession());

app.get('/api', (req, res) => {
  res.send('Hello!!');
});

app.get('/api/callFetchUser', (req, res) => {
  fetchUserRequest(req.query)
    .subscribe(
      (data) => {
        const { session } = req;
        const {
          username,
          password,
          rememberMe,
        } = req.query;
        const user = {
          username,
          password,
          ...data,
        };
        const tokenOptions = { user };

        // Set expiration if the remember flag is false.
        if (!rememberMe) {
          tokenOptions.expiresIn = '4h';
        }
        const token = jwt.sign(tokenOptions, TOKEN_SECRET);
        // Save token in the session object.
        session.token = token;

        // Responds with the user data
        res.status(200).send({ user });
      },
      () => {
        res.status(401).send({
          loginFailed: true,
          message: 'El usuario o contraseña son incorrectos.',
        });
      }
    );
});

app.post('/api/destroyUserSession', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(503).send({ err });
    }

    res.status(200).send({
      userLogout: true,
    });
  });
});

app.listen(API_PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`API listening on port: ${API_PORT}`);
  }
});
