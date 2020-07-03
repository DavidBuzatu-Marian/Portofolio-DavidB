import React from 'react';
import { Link } from 'react-router-dom';
const ExternalLinks = () => {
  return (
    <div className='external-contact'>
      <Link
        to={{ pathname: 'https://github.com/DavidBuzatu-Marian' }}
        target='_blank'
      >
        <i className='fab fa-github'></i>
      </Link>
      <Link
        to={{
          pathname: 'https://www.linkedin.com/in/david-buzatu-160620198/',
        }}
        target='_blank'
      >
        <i className='fab fa-linkedin-in'></i>
      </Link>
    </div>
  );
};

export default ExternalLinks;
