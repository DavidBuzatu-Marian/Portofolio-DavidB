import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Landing from './components/layout/Landing';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Landing} />
      </Fragment>
    </Router>
  );
};

export default App;
