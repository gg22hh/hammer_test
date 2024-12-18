import React, { Suspense, lazy } from 'react';
// import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { Switch, Route, Redirect } from 'react-router-dom';

const Catalog = ({match}) => {
  console.log('cataloooog check')
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
        {/* <Route
          path={`${match.url}/chat`}
          component={lazy(() => import(`./chat`))}
        />
        <Route
          path={`${match.url}/calendar`}
          component={lazy(() => import(`./calendar`))}
        />
        <Route
          path={`${match.url}/project`}
          component={lazy(() => import(`./project`))}
        />
        <Route
          path={`${match.url}/ecommerce`}
          component={lazy(() => import(`./e-commerce`))}
        /> */}
        <Redirect from={`${match.url}`} to={`${match.url}/categories`} />
      </Switch>
    </Suspense>
  );
};

export default Catalog;
