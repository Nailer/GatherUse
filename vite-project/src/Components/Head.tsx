import React from 'react'
import Logo from "../assets/logo.jpeg"
import "./head.css"

export default function Head() {
  return (
    <nav className='head'>
      <div className="headDiv">
        <img src={Logo} alt="" />
      </div>
      <div className="contactUs">
        <h2><a href='https://chat.whatsapp.com/CWd3TRV5Q501ocCtXu1Uz0'>Contact Us</a></h2>
      </div>



    </nav>
  )
}
