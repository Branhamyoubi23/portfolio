import React from 'react'
import './Hero.css'
import image from '../../assets/image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className="hero">
    <img src={image}alt=''id='imgt'/>

    <h1>
      <span>I'm Mboumeu youbi, </span>front-end developer based in Cameroon.
    </h1>   
    <p>I am a frontend developer from Ebolowa , Cameroon with 3 year of experience in multple companies like Tesla and Google developement</p>
    <div className='hero-action'>
    <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
    <div className='hero-resume'>My resume</div> 
    </div> 
     </div>
  )
}

export default Hero
