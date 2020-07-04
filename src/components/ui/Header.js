import React from 'react';
// import { BrowserRouter } from ' react-router-dom';

import logo from '../../img/logo.png';

function Header() {
  return (
    <header className='center'>
      <img src={logo} alt='logo' />
    </header>
  );
}

export default Header;
