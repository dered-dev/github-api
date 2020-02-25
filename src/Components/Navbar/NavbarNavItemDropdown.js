import React from 'react'

function NavbarItemDropdown () {
  return (
    <li class='nav-item dropdown'>
      <a class='nav-link dropdown-toggle' href='#' id='dropdown01' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Dropdown</a>
      <div class='dropdown-menu' aria-labelledby='dropdown01'>
        <a class='dropdown-item' href='#'>Action</a>
        <a class='dropdown-item' href='#'>Another action</a>
        <a class='dropdown-item' href='#'>Something else here</a>
      </div>
    </li>
  )
}
export default NavbarItemDropdown
