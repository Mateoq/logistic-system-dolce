/* Service to fetch the user from the main server.
 * @param {object} payload - with the username and password.
 * @returns {string} - with the api url.
**/
export const callFetchUser = // eslint-disable-line import/prefer-default-export
  ({ username, password }) =>
    (`/api/callFetchUser?username=${username}&password=${password}`);

/* Service to destroy the current user session.
 * @returns {string} - with the api url.
**/
export const destroyUserSession = () => ('/api/destroyUserSession');
