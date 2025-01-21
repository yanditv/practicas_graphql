const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas-graphql/user-schema');
const resolvers = require('./resolvers-graphql/user-resolver');

async function startServer() {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();
    server.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log('Server is running on port 4000');
    });
}
startServer();