import React, { Fragment } from 'react';
import Contact from './Contact';
import Navbar from '../navbar/Navbar';
import Presentation from './Presentation';
import Projects from './Projects';
import Services from './Services';

const Landing = () => {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Presentation></Presentation>
      <Projects></Projects>
      <Services></Services>
      <Contact></Contact>
    </Fragment>
  );
};

export default Landing;
