import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Main from './Layout/Main';
import NotFound from './Layout/Main/NotFound';
import Livestock from './Layout/Main/Livestock';
// import Community from './Layout/Main/Community'


export default() => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() =>  <Redirect to='/gardening' />}/>
          <Route exact path='/gardening' component={Main} />
          <Route exact path='/livestock' component={Livestock} />
          {/* <Route exact path='/community' component={Community} /> */}
          <Route component={NotFound} />
        </Switch>   
      </BrowserRouter>
    </Fragment>
  ); 
};