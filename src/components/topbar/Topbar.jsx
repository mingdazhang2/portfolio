import React from 'react'
import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export const Topbar = () => {
  return (
    <div className='topbar active'>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className='logo'>Daming.Z</a>
                <div className="itemContainer">
                    <Person className='icon'></Person>
                    <span>0212683008</span>
                </div>
                <div className="itemContainer">
                    <Mail className='icon'></Mail>
                    <span>449144331@qq.com</span>
                </div>
            </div>
          
            <div className="right">
                <div className="hamburger">
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>
        </div>
    </div>
  )
}
