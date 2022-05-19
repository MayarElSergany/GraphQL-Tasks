const { ApolloServer, gql } = require("apollo-server");
const fs = require("fs");
const path = require("path");
const { resolvers } = require("./resolvers");
const mongoose = require("mongoose");
const { PostDataSource } = require("./datasource/post");
const { CommentDataSource } = require("./datasource/comment");

mongoose.connect(process.env.MONGO_URI);
mongoose.set("debug", true);

const schemaString = fs.readFileSync(
  path.join(__dirname, "schema.graphql"),
  "utf8"
);
const typeDefs = gql(schemaString);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    post: new PostDataSource(),
    comment: new CommentDataSource(),
  }),
});

server.listen(8000, () => {
  console.log("Server has been started on port 8000");
});