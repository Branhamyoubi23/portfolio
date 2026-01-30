import React from 'react'
import './About.css'
import download from '../../assets/download.jpg'
import profile from '../../assets/profil.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={download} alt='' className='download'/>
      </div>

      <div className='about-section'>
        <div className='about-left'>
          <img src={profile} alt='Mboumeu Youbi' className='profile'/>
        </div>

        <div className='about-right'>
          <div className='about-para'>
            <p>
              I’m <strong>Eleazar Dady Mboumeu Youbi</strong>, a Full-Stack Developer
              based in Ebolowa, Cameroon. I build complete web applications,
              working across both frontend and backend, with a focus on clean
              code, performance, and practical solutions.
            </p>
          </div>

          <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS <hr style={{width:'60%'}}/></p></div>
            <div className='about-skill'><p>JavaScript <hr style={{width:'65%'}}/></p></div>
            <div className='about-skill'><p>React / Next.js <hr style={{width:'70%'}}/></p></div>
            <div className='about-skill'><p>Node.js & APIs <hr style={{width:'55%'}}/></p></div>
          </div>
        </div>
      </div>

      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>Full-Stack</h1>
          <p>Frontend & Backend Development</p>
        </div>
        <hr/>
        <div className='about-achievement'>
          <h1>Clean Code</h1>
          <p>Maintainable & Scalable Solutions</p>
        </div>
        <hr/>
        <div className='about-achievement'>
          <h1>Problem Solver</h1>
          <p>Real-World Web Applications</p>
        </div>
      </div>
    </div>
  )
}

export default About
