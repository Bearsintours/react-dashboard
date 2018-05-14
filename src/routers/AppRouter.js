import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Day from '../components/Day';
import Week from '../components/Week';
import Month from '../components/Month';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/" component={Week}/>
        <Route path="/day" component={Day} />
        <Route path="/month" component={Month} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;