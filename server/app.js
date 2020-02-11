module.exports = (db) => {
  const express = require("express");
  const path = require("path");
  const { ApolloServer } = require("apollo-server-express");

  const app = express();

  app.use(express.static(path.resolve(__dirname, "..", "build")));

  const typeDefs = require("./gql/type.js");
  const resolvers = require("./gql/sql.js")(db);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    playground: true,
  });
  server.applyMiddleware({ app, path: "/api" });

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
  });

  return app;
};
