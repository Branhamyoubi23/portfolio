import React from 'react'
import './footer.css'
import logo1 from '../../assets/logo1.jpg'
import user from '../../assets/user.svg'

const footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
<div className='footer-top-left'>
    <img src={logo1} alt  id='lo'/>
    <p>i am frontend developer from Cameroon with  3 years of experience in companies like IREX ,Google developer Team</p>

</div>
<div className='footer-top-right'>
    <div className='footer-email-input'>
        <img src={user} alt=''/>
        <input type='email' placeholder='Enter your email'/>
    </div>
    <div className='footer-Subcribe'>Subscribe
    </div>

</div>
      </div>
      <hr/>
      <div className='footer-bottom'>
        <div className='footer-bottom-left'>
          @ 2024 Mboumeu youbi. ALL RIGHTS RESERVED
        </div>
        <div className='footer-bottom-right'>
          <p>Term of Services</p>
          <p>Privact Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default footer
