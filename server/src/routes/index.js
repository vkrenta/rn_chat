import verify from './verify.route';
import auth from './auth.route';

export default (app) => {
  app.use('/api/auth', auth);
  app.use('/verify', verify);
};
