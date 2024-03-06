import Fastify from "fastify";

// Declare a route
const fastify = Fastify({ logger: true, trustProxy: true });
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen({ host: process.env.HOST, port: process.env.PORT }, err => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})