import { useContext } from 'react';
import { TabContext } from '../../context/tab.context';

import './tabs-block.styles.scss';

import Loader from '../loader/loader.component';
import MenuCompany from '../menu-company/menu-company.component';
import ContentPages from '../../pages/content-pages/content.component';

const TabsBlock = () => {
  const{data} = useContext(TabContext);

  if (!data) {
    return <Loader/>
  };

  const showMenuByCompany = data.TabTypes.map( item => {
    return <MenuCompany key = {item.id} nameCompany = {item.company}/>
  });
  
  return (
    <div className="tabs-container">
      <div className="tabs-container-title">
        <h1>Expierence</h1>
      </div>
      <div className="tabs-container-menu-content">
        <div className="menu">
          {
            showMenuByCompany
          }
        </div>
        <div className="content">
          <ContentPages data = {data.TabTypes}/>
        </div>
      </div>
    </div>
  );
};

export default TabsBlock;