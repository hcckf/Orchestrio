import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Shell from './components/Shell';
import NotFoundPage from './components/NotFoundPage';
import index from './components/index';

const routes = (
  <Route path="/" component={Shell}>
    <IndexRoute component={index}/>
    {/*<Route path="song/:id" component={Song}/>*/}
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
