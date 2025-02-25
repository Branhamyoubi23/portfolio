import React from 'react'
import './Service.css'
import download from '../../assets/download.jpg'
import icons from '../../assets/icons.png'
import Service_data from '../../assets/Service_data'
const Service = () => {
  return (
    <div className='Services'id='service'>
    <div className='Service-title'>
    <h1>My Services</h1>
    <img src={download} alt=''/>
        </div>
        <div className='Service-container'>
        {Service_data.map((Services, index) => {
          return <div className='Service-format' key={index}>
          <h3>{Services.s_no}</h3>
          <h2>{Services.s_name}</h2>
          <p>{Services.s_desc}</p>
          <div className='Service-readmore'>
            <p>Read more</p>
            <img src={icons} alt=''/>

          </div>
          </div>
        })}
        </div>
    

      
    </div>
  )
}

export default Service
