import React from 'react'

export const MenuItem = ({id, menuOpen, setMenuOpen}) => {
  return (
    <li onClick={()=>{setMenuOpen(menuOpen)}}><a href={'#'+id}>{id}</a></li>
  )
}
