import Loading from "components/shared-components/Loading";
import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Systemic = ({match}) => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path={`${match.url}/settings`} component={lazy(() => import(`./settings`))} />
        <Route path={`${match.url}/mobile`} component={lazy(() => import(`./mobile`))} />
        <Route path={`${match.url}/logss`} component={lazy(() => import(`./logss`))} />
        <Redirect from={`${match.url}`} to={`${match.url}/settings`} />
      </Switch>
    </Suspense>
  )
}

export default Systemic