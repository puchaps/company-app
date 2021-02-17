/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

import "./context.styles.scss";

import ContentItem from "../../components/content-item/content-item.component";

const ContentPages = ({ data }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  const [company] = data.filter(
    (item) => item.company.toLowerCase() === pathname.slice(1).toLowerCase()
  );

  const handleDefaultCompany = useCallback(() => {
    history.push(`/${data[0].company.toLowerCase()}`);
  }, [data, history]);

  useEffect(() => {
    handleDefaultCompany();
  }, [handleDefaultCompany]);

  return (
    <div className="content-pages">
      <Switch>
        <Route
          path={`${pathname}`}
          render={() => <ContentItem {...company} />}
        />
      </Switch>
    </div>
  );
};

export default ContentPages;
