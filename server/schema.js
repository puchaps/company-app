const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

//Tab type
const TabType = new GraphQLObjectType({
  name: "Tab",
  fields: () => ({
    id: { type: GraphQLString },
    order: { type: GraphQLInt },
    title: { type: GraphQLString },
    dates: { type: GraphQLString },
    company: { type: GraphQLString },
    duties: { type: GraphQLList(GraphQLString) },
  }),
});

//Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    TabTypes: {
      type: new GraphQLList(TabType),
      resolve(parent, args) {
        return axios
          .get("https://course-api.com/react-tabs-project")
          .then((resolve) => resolve.data);
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
