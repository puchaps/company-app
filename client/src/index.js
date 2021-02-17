/* eslint-disable import/order */
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.styles.scss";

import client from "./graphql/client-config/client";
import { ApolloProvider } from "react-apollo";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
