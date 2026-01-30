import React from 'react'
import './Mywork.css'
import mywork_data from '../../assets/mywork_data'
import icons from '../../assets/icons.png'

const Mywork = () => {
  return (
    <div className='mywork' id='work'>
      <div className='mywork-header'>
        <div className='mywork-title'>
          <h1>My Latest Work</h1>
        </div>
        <p className='mywork-subtitle'>
          Building modern web applications with cutting-edge technologies and user-centric design
        </p>
      </div>

      <div className='mywork-container'>
        {mywork_data.map((work, index) => (
          <a
            key={index}
            href={work.w_live || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className='work-item'
          >
            <img
              src={work.w_img}
              alt={work.w_name}
              className='work-img'
            />

            <div className='work-overlay'>
              <div className='work-info'>
                <h3>{work.w_name}</h3>
                <p>{work.w_desc}</p>

                <div className='work-tech'>
                  {Array.isArray(work.w_stack) &&
                    work.w_stack.map((tech, i) => (
                      <span key={i} className='tech-tag'>{tech}</span>
                    ))
                  }
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <button className='mywork-showmore'>
        <span>Show More Projects</span>
        <img src={icons} alt='arrow' />
      </button>
    </div>
  )
}

export default Mywork
