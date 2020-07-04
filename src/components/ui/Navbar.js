import { Link } from 'react-router-dom';

import React from 'react';

export default function Navbar() {
  return (
    <div className='menu'>
      <Link to='/breaking-bad-react' className='nav-link'>
        Characters
      </Link>
      <Link to='/quotes' className='nav-link'>
        Quotes
      </Link>
    </div>
    // <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
    //   {/* <Link to='/' className='navbar-brand'>
    //     Home
    //   </Link> */}
    //   <div className='collpase navbar-collapse'>
    //     <ul className='navbar-nav mr-auto'>
    //       <li className='navbar-item'>
    //         <Link to='/characters' className='nav-link'>
    //           Characters
    //         </Link>
    //       </li>
    //       <li className='navbar-item'>
    //         <Link to='/quotes' className='nav-link'>
    //           Quotes
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}
