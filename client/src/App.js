import React from "react";

import TabsBlock from "./components/tabs-block/tabs-block.component";
import TabContextProvider from "./context/tab.context";

const App = () => (
  <TabContextProvider>
    <TabsBlock />
  </TabContextProvider>
);

export default App;
