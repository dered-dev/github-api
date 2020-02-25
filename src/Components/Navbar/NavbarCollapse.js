import React from 'react'

import NavbarNav from './NavbarNav'
import NavbarFormSearch from './NavbarFormSearch'

function NavbarCollapse () {
  return (
    <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
      <NavbarNav />
      <NavbarFormSearch />
    </div>
  )
}

export default NavbarCollapse
