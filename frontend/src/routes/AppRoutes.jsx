import React from 'react';
import { Route, Switch } from 'react-router';
import CollectData from '../pages/CollectData';

function AppRoutes() {
  return(
    <>
      <Switch>
        <Route exact path="/" component={ CollectData } />
      </Switch>
    </>
  )
}

export default AppRoutes;