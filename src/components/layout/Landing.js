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
      <SoftwareSkills />
      {/* <Presentation/>
      <Projects/>
      <Services/>
      <About/>
      <Contact/> */}
    </Fragment>
  );
};

export default Landing;
