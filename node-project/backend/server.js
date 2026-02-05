require('dotenv').config();
const fastify = require('fastify')({ logger: true });

fastify.register(require('./src/modules/user/user.routes'));

fastify.listen({ port: 3000, host: '0.0.0.0' });
