import React from 'react'
import "./hero.scss"
import Sidebar from './sidebar/Sidebar'

const Hero = () => {
  return (
  <>
  <div className="hero">
    <div className="sidebar">
      <Sidebar />
    </div>
  <nav className='navbar'>
    <div className="logo"><span>A</span><h1>wais</h1></div>
    <div className="socials">
        <a href="https://web.facebook.com/oppennminded/"><img src="/facebook.png"/></a>
        <a href=""><img src="/instagram.png"/></a>
        <a href="https://www.youtube.com/channel/UCGYdvAWaiZQaJkDalm4JY_A"><img src="/youtube.png"/></a>
        <a href=""><img src="dribbble.png"/></a>
    </div>
  </nav>
  </div>
  </>
  )
}

export default Hero