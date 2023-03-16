import React from 'react'
import "./menu.scss";
import { MenuItem } from './MenuItem';

export const Menu = ({menuOpen, setMenuOpen}) => {
  const menuItemArr = ["intro","portfolio","works","testimonials","contact"]
  return (
    <div className={"menu " + (menuOpen && "active")} id="menu">
      <ul>
        {
        menuItemArr.map((menuItem, index)=>{
          return <MenuItem key={index} id={menuItem} menuOpen={false} setMenuOpen={setMenuOpen}/>   
        })
        }
      </ul>
    </div>
  );
}
