import Loading from "components/shared-components/Loading";
import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Offline = ({match}) => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path={`${match.url}/addresses`} component={lazy(() => import(`./addresses`))} />
        <Route path={`${match.url}/zones`} component={lazy(() => import(`./zones`))} />
        <Redirect from={`${match.url}`} to={`${match.url}/addresses`} />
      </Switch>
    </Suspense>
  )
}

export default Offline
