import React from 'react'

import NavbarToggler from './NavbarToggler'
import NavbarBrand from './NavbarBrand'
import NavbarCollapse from './NavbarCollapse'

function Navbar () {
  return (
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
      <NavbarBrand />
      <NavbarToggler />
      <NavbarCollapse />
    </nav>
  )
}

export default Navbar
