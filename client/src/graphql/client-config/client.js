import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql'
});

const cache = new InMemoryCache();

export const CLIENT = new ApolloClient({
  link: httpLink,
  cache
});