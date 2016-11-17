import { API_SERVICE_URL } from '../../config/env';

/** API service to fetch a user with the login from input.
 * @param {string} username - The username.
 * @param {string} password - The user password.
 */
export const fetchUser = // eslint-disable-line import/prefer-default-export
  ({ username, password }) =>
    (`${API_SERVICE_URL}/api/Seguridad?usuario=${username}&password=${password}&JSOPRequest=?`);
