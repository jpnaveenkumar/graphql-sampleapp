import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import typeDef from './schema.js'
import resolvers from './resolver.js'
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/graphql');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("successfully connected to database");
});

const mocks = {
    Int: () => 6,
    Float: () => 22.1,
    String: () => 'Hello',
  };
const server = express();
const apolloServer = new ApolloServer({
    typeDefs: typeDef,
    resolvers: resolvers,
    playground : {
        endpoint : `http://localhost:4000/graphql`
    }
});
apolloServer.applyMiddleware({
    app: server
});
server.get('/home',(request,response) => {
    var data = "<html><body><h1>Naveen Don!!</h1></body></html>"
    response.send(data);
});

server.listen(4000,()  => {
    console.log("listening on the port 4000");
});