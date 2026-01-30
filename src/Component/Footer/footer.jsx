import React from 'react'
import './Footer.css'
import logo1 from '../../assets/logo1.jpg'
import user from '../../assets/user.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={logo1} alt='Mboumeu Youbi logo' id='lo' />
          <p>
            I’m a Full-Stack Developer based in Cameroon, focused on building
            modern, reliable, and user-friendly web applications.
          </p>
        </div>

        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <img src={user} alt='user icon' />
            <input type='email' placeholder='Enter your email' />
          </div>
          <div className='footer-subscribe'>
            Subscribe
          </div>
        </div>
      </div>

      <hr />

      <div className='footer-bottom'>
        <div className='footer-bottom-left'>
          © 2024 Mboumeu Youbi. All rights reserved.
        </div>
        <div className='footer-bottom-right'>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
