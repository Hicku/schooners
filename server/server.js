const express = require("express");
const apolloServer = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");

const db = require(".config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new apolloServer.ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client"));
});

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
};

startApolloServer();
