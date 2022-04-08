import 'dotenv/config'
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { resolvers, typeDefs } from "./data";

// Initiate Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Initiate express server and add Apollo Server middleware
const app = express();
server.applyMiddleware({ app });

app.get("/", (req, res) => {
  console.log("GraphQL server is up!");
});

app.listen({ port: process.env.PORT }, () => {
  console.log(
    `GraphQL Server is running on http://localhost:${process.env.PORT}${server.graphqlPath}`
  );
});
