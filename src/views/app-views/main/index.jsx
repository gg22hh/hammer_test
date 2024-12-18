import Loading from "components/shared-components/Loading";
import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Main = ({ match }) => {
  console.log(match, 'match')
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path={`${match.url}/dashboard`} component={lazy(() => import(`./dashboard`))} />
        <Route path={`${match.url}/catalog`} component={lazy(() => import(`./catalog`))} />
        <Route path={`${match.url}/orders`} component={lazy(() => import(`./orders`))} />
        <Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
        <Route path={`${match.url}/banners`} component={lazy(() => import(`./banners`))} />
        <Route path={`${match.url}/promocodes`} component={lazy(() => import(`./promocodes`))} />
        <Route path={`${match.url}/offline`} component={lazy(() => import(`./offline`))} />
        <Route path={`${match.url}/staff`} component={lazy(() => import(`./staff`))} />
        <Route path={`${match.url}/mailings`} component={lazy(() => import(`./mailings`))} />
        <Redirect from={`${match.url}`} to={`${match.url}/dashboard`} />
      </Switch>
    </Suspense>
  );
};


export default Main