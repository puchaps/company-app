import React from 'react';

import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';


const GET_TABS = gql`
  {
    TabTypes{
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
  const{data} = useQuery(GET_TABS);
  
  return (
    <TabContext.Provider value = {{data}}>
      {children}
    </TabContext.Provider>
  );
};

export default TabContextProvider;

