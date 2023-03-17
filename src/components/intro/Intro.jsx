import { init } from 'ityped'
import React, { useEffect, useRef } from 'react'
import "./intro.scss"

export const Intro = () => {

  const textRef = useRef();
  useEffect(()=>{
    init(textRef.current,{
      showCursor:true,
      backDelay:1500,
      strings:["Developer","Team member",],
    })
  },[])

  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className='wrapper'>
          <h2>Hi there, I'm</h2>
          <h1>Daming Zhang</h1>
          {/* <h3>“We will never make a 32-bit operating system”</h3> 
          <h4>- Bill Gates</h4> */}
          <div className='h3'> who is a <span className='typedTxt' ref={textRef}></span></div>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
