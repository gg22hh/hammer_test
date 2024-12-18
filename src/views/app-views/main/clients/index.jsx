import Loading from "components/shared-components/Loading";
import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Clients = ({match}) => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path={`${match.url}/list`} component={lazy(() => import(`./list`))} />
        <Route path={`${match.url}/listItem/:id`} component={lazy(() => import(`./listItem/index`))} />
        <Route path={`${match.url}/groups`} component={lazy(() => import(`./groups`))} />
        <Redirect from={`${match.url}`} to={`${match.url}/list`} />
      </Switch>
    </Suspense>
  )
}

export default Clients