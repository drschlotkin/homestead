import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Gardening from './Layout/Main/Gardening';
import Header from './Layout/Header'
// import Footer from './Layout/Footer'

export default() => {
  return (
    <Fragment>
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' render={() =>  <Redirect to='/gardening' />}/>
          <Route exact path='/gardening' component={Gardening} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </Fragment>
  ); 
};