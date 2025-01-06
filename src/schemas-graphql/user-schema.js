const { gql } = require('apollo-server-express');
const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        lastname: String!
        password: String!
    }
    
    type Query {
        getUsers: [User]
        getUser(id: ID!): User
    }
    
    type Mutation {
        createUser(name: String!, email: String!, lastname: String!, password: String!): User
        updateUser(id: ID!, name: String!, email: String!, lastname: String!, password: String!): User
        deleteUser(id: ID!): String
    }
`
module.exports = typeDefs;