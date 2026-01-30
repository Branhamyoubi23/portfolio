import React from 'react'
import './Hero.css'
import image from '../../assets/profil.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={image} alt='Mboumeu Youbi' id='imgt' />

      <h1>
        <span>I'm Mboumeu Youbi, </span>
        Full-Stack Developer based in Cameroon,
        building modern and reliable web applications.
      </h1>

      <p>
        I’m a Full-Stack Developer from Ebolowa, Cameroon, focused on building
        complete web solutions across frontend and backend with clean and
        maintainable code.
      </p>

      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
        <div className='hero-resume'> <a href="/assets/new.pdf" download="Mboumeu youbi.pdf">My Resume</a></div>
      </div>
    </div>
  )
}

export default Hero
