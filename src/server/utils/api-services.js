// API Creators.
import { fetchUser } from './api-service-creators';

// Streams.
import { fromGetRequest } from './server-streams';

export const fetchUserRequest = payload => ( // eslint-disable-line import/prefer-default-export
  fromGetRequest(fetchUser(payload))
);
