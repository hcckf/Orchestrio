import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Shell from './components/Shell';
import HelloWorld from './components/HelloWorld';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Shell}>
    <IndexRoute component={HelloWorld}/>
    {/*<Route path="song/:id" component={Song}/>*/}
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
