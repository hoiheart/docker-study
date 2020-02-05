const env = require('dotenv').config({ path: '../.env' }).parsed
const { ApolloServer } = require('apollo-server-fastify')
const { typeDefs, resolvers } = require('./graphql/schema')
const mongoose = require('mongoose')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const fastify = require('fastify')()

fastify.register(server.createHandler({
  path: '/',
  cors: true
}))

const start = async () => {
  try {
    await mongoose.connect(`mongodb://${env.MONGODB_USER}:${env.MONGODB_PASS}@localhost:27017/${env.MONGODB_DATABASE}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    await fastify.listen(3001)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start(fastify)
