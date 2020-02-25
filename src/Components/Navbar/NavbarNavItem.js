import React from 'react'

function NavbarItem (props) {
  console.log(props.text)
  return (
    <li className='nav-item'>
      <a className='nav-link' href={props.to}>{props.text}</a>
    </li>
  )
}
export default NavbarItem
