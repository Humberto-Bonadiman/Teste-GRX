import React from 'react';
import { Route, Switch } from 'react-router';
import CollectData from '../pages/CollectData';
import DataResult from '../pages/DataResult';

function Routes() {
  return(
    <>
      <Switch>
        <Route exact path="/" component={ CollectData } />
        <Route exact path="/result" component={ DataResult } />
      </Switch>
    </>
  )
}

export default Routes;