import session from 'express-session';
import connectMongo from 'connect-mongo';

// Constants.
import { SESSION_SECRET, MONGODB_HOST } from '../../../config/env';

// Configure session store with mongodb.
const configureSession = () => {
  const MongoStore = connectMongo(session);
  const storeOptions = {
    url: MONGODB_HOST,
    autoRemove: 'disabled',
  };
  const sessionOptions = {
    secret: SESSION_SECRET,
    saveUninitialized: false, // don't create session until something stored
    resave: false, // don't save session if unmodified
    store: new MongoStore(storeOptions),
    cookie: {},
  };

  return session(sessionOptions);
};

export default configureSession;
