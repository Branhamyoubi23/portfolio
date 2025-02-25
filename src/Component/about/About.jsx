import React from 'react'
import './About.css'
import download from '../../assets/download.jpg'
import profile from '../../assets/image.png'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>About me</h1>
        <img src={download} alt='' className='download'/>
      
      </div>
      <div className='about-section'>
      <div className='about-left'>
        <img src={profile} alt='' className='profile'/>
      </div>
      <div className='about-right'>
      <div className='about-para'>
      <p>i am an experienced frondend developer with over a decade of professional expertise in the field. Throughout my career, I have have had the privilege of collaborating with prestigious organizations, contributing to thier success and growth</p>
      <p>My passion for frontend development is not only but also in the enthusiasm and dedication i bring to each project.</p>
      </div>
      <div className='about-skills'>
        <div className='about-skill'><p>HTML & CSS <hr style={{width:'50%'}}/></p></div>
        <div className='about-skill'><p>React JS <hr style={{width:'70%'}}/></p></div>
        <div className='about-skill'><p>JavaScript<hr style={{width:'60%'}}/></p></div>
        <div className='about-skill'><p>Next JS<hr style={{width:'50%'}}/></p></div>

      </div>
       
      </div>
      </div>
      <div className='about-achievements'>
      <div className='about-achievement'>
      <h1>3+</h1>
      <p>YEAR OF EXPERIENCE</p>
      </div>
      <hr/>
      <div className='about-achievement'>
      <h1>70+</h1>
      <p>PROJECT COMPLETED</p>
      </div>
      <hr/>
      <div className='about-achievement'>
      <h1>20+</h1>
      <p>HAPPY CLIENTS</p>
      </div>
      
        
      </div>

    </div>
  )
}

export default About
