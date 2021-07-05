const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require('./Schemas/index')


app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
