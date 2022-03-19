import React from 'react';
import '../../styles/button.css';

const Button = ({onClick, disabled, children}) => {
  return (
  <> 
    <button className='button' onClick={ onClick }>{children}</button>
  </>
  );
}

export default Button;