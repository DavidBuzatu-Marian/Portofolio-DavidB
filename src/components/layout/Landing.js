import React, { Fragment } from 'react';
import Contact from './Contact';
import Navbar from '../navbar/Navbar';
import Presentation from './Presentation';
import Projects from './Projects';
import Services from './Services';
import About from './About';
import SoftwareSkills from './SoftwareSkills';

const Landing = () => {
  return (
    <Fragment>
      <Navbar />
      <Presentation />
      <Projects />
      <Services />
      <About />
      <SoftwareSkills />
      <Contact />
    </Fragment>
  );
};

export default Landing;
