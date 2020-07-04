import React from 'react';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar ml-144'>
        <li>
          <ScrollLink
            to='portofolio'
            spy={true}
            smooth={true}
            duration={500}
            activeClass='active'
          >
            Portofolio
          </ScrollLink>
        </li>
        <li>Resume</li>
        <li>
          <ScrollLink
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
            activeClass='active'
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
