const { index, show, create, update, destroy } = require('../controllers/users');
const passport = require('passport');

module.exports = (router) => {
  router.get('/users', index);
  router.get('/users/:id', passport.authenticate('jwt', { session: false }), show);
  router.post('/users', create);
  router.post('/users/update/:id', passport.authenticate('jwt', { session: false }), update);
  router.post('/users/destroy/:id', passport.authenticate('jwt', { session: false }), destroy);
  return router;
};