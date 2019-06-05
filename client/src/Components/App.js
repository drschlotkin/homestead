import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Banner from './Layout/Landing';
import Gardening from './Layout/Main/Gardening';

// import Header from './Layout/Main/Header'
// import Footer from './Layout/Footer'

export default() => {
  return (
    <Fragment>
      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route path='/' exact component={Banner} />
          <Route path='/gardening' component={Gardening} />
          
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </Fragment>
  ); 
};