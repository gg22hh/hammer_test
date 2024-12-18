import React, { Suspense, lazy } from 'react';
import Loading from 'components/shared-components/Loading';
import { Switch, Route, Redirect } from 'react-router-dom';

const Catalog = ({match}) => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route
          path={`${match.url}/categories`}
          component={lazy(() => import(`./categories`))}
        />
        <Route
          path={`${match.url}/combo`}
          component={lazy(() => import(`./combo`))}
        />
        <Route
          path={`${match.url}/collections`}
          component={lazy(() => import(`./collections`))}
        />
        <Route
          path={`${match.url}/goods`}
          component={lazy(() => import(`./goods`))}
        />
        <Redirect from={`${match.url}`} to={`${match.url}/categories`} />
      </Switch>
    </Suspense>
  );
};

export default Catalog;
