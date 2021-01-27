const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema');
const cors = require('cors')

const APP = express();

APP.use(cors());

APP.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

const PORT = process.env.PORT || 5000;

APP.listen(PORT, () => console.log('SERVER TABS STAETED PORT 5000'));