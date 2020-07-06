import React from 'react';

const LanguageItem = ({ language }) => {
  return (
    <div className='language'>
      <div className='btn btn-circle-orange'></div>
      <p className='ml-16'>{language}</p>
    </div>
  );
};

export default LanguageItem;
