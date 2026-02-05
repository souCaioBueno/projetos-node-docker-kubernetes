module.exports = async (fastify) => {
  const controller = require('./user.controller');
  const auth = require('../../middlewares/auth');

  fastify.post('/users', controller.create);
  fastify.get('/users/me', { preHandler: auth }, controller.me);
  fastify.put('/users/me', { preHandler: auth }, controller.update);
  fastify.delete('/users/me', { preHandler: auth }, controller.remove);
};
