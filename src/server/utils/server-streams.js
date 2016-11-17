import { Observable } from 'rxjs';

// Node.
import request from 'request';

// Constants.
// import { POST } from '../config/constants';

export const fromGetRequest = url => ( // eslint-disable-line import/prefer-default-export
  Observable.create((observer) => {
    let reject = false;
    request.get(url)
      .on('data', (response) => {
        if (!reject) {
          try {
            const data = JSON.parse(response.toString());
            observer.next(data);
          } catch (err) {
            observer.error(err);
          }
        }
        observer.complete();
      })
      .on('error', (err) => {
        observer.error(err);
      });
    return function dispose() {
      reject = true;
    };
  })
);
