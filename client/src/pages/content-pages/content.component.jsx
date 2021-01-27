import {Route, Switch, useLocation } from "react-router-dom"

import ContentItem from "../../components/content-item/content-item.component";

const ContentPages = ({data}) => {
  const {pathname} = useLocation();
  
  const filterDataByPathName = data.filter( item => {
    if (item.company.toLowerCase() === pathname.slice(1)) {
      return item;
    };
  });

  return (
    <div className="content-pages"> 
      <Switch>
        <Route exact path = {`${pathname}`} render = {() => (
          <ContentItem {...filterDataByPathName[0]}/>
        )} />
      </Switch>
    </div>
  );
};

export default ContentPages;