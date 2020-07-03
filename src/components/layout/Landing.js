import React, { Fragment } from 'react';
import Contact from './Contact';
import Navbar from '../navbar/Navbar';

const Landing = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Contact></Contact>
    </Fragment>
  );
};

export default Landing;
