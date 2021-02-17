/* eslint-disable no-debugger */
import React, { useContext } from "react";

import { TabContext } from "../../context/tab.context";

import "./tabs-block.styles.scss";

import MenuCompany from "../menu-company/menu-company.component";
import ContentPages from "../../pages/content-pages/content.component";

const TabsBlock = () => {
  const { data } = useContext(TabContext);
  return (
    <div className="tabs-container">
      <div className="tabs-container-title">
        <h1>Tabs Company</h1>
      </div>
      <div className="tabs-container-menu-content">
        <div className="menu">
          {data.TabTypes.map((item) => (
            <MenuCompany key={item.id} onNameCompany={item.company} />
          ))}
        </div>
        <div className="content">
          <ContentPages data={data.TabTypes} />
        </div>
      </div>
    </div>
  );
};

export default TabsBlock;
