import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './Layout/Main';
import NotFound from './Layout/Main/NotFound';

export default() => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() =>  <Redirect to='/gardening' />}/>
          <Route exact path='/gardening' component={Home} />
          <Route exact path='/livestock' component={Home} />
          <Route exact path='/community' component={Home} />
          <Route component={NotFound} />
        </Switch>   
      </BrowserRouter>
    </Fragment>
  ); 
};