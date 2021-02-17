/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import React, { useEffect, useState } from "react";

import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import Loader from "../components/loader/loader.component";

const GET_TABS = gql`
  {
    TabTypes {
      id
      title
      dates
      order
      company
      duties
    }
  }
`;

export const TabContext = React.createContext();

const TabContextProvider = ({ children }) => {
  const { data } = useQuery(GET_TABS);
  return (
    <Loader onLoader={data}>
      <TabContext.Provider value={{ data }}>{children}</TabContext.Provider>
    </Loader>
  );
};

export default TabContextProvider;
