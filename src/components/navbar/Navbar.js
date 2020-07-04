import React from 'react';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;

const Navbar = () => {
  return (
    <div className='container margin-0-auto'>
      <ul className='navbar'>
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
