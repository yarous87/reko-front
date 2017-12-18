import util from 'util';
import basicAuth from 'express-basic-auth';

const setTimeoutPromise = util.promisify(setTimeout);

const auth = basicAuth({
    authorizer: (username, password, cb) => {
        setTimeoutPromise(200).then(() => {
            if (username === password && password === 'test') {
                return cb(null, true);
            } else {
                return cb(null, false);
            }
        });
    },
    authorizeAsync: true,
    unauthorizedResponse: 'Unauthorized access'
});

export { auth };