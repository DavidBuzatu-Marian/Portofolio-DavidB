import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Landing from './components/layout/Landing';
import Navbar from './components/navbar/Navbar';
const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
      </Fragment>
    </Router>
  );
};

export default App;
