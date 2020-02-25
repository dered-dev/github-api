import React from 'react'

import NavbarNavItem from './NavbarNavItem'

function NavbarNav (params) {
  return (
    <ul className='navbar-nav mr-auto'>
      <NavbarNavItem
        text='Home'
        to='/home'
        active
      />
      <NavbarNavItem
        text='Sign In'
        to='/sign-in'
      />
    </ul>
  )
}

export default NavbarNav
