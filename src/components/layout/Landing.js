import React, { Fragment } from 'react';
import Contact from './Contact';
import Navbar from '../navbar/Navbar';
import Presentation from './Presentation';

const Landing = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Presentation></Presentation>
      <Contact></Contact>
    </Fragment>
  );
};

export default Landing;
