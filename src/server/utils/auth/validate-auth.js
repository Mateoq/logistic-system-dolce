import jwt from 'jsonwebtoken';

// Constants.
import { TOKEN_SECRET } from '../../../config/env';

/* It will check for a token in session and validates the expiration date.
 * @param {object} session - The session object.
 * @returns {object} - The user object.
 */
const validateAuth = (session) => {
  const { token } = session;
  if (!token) {
    return null;
  }

  // Verify token.
  try {
    return jwt.verify(token, TOKEN_SECRET);
  } catch (err) {
    return null;
  }
};

export default validateAuth;
