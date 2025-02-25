import React from 'react'
import './Mywork.css'
import download from '../../assets/download.jpg'
import mywork_data from '../../assets/mywork_data'
import icons from '../../assets/icons.png'
const Mywork = () => {
  return (
    <div className='mywork' id='work'>
    <div className='mywork-title'>
      <h1>My latest Work</h1>
      <img src={download} alt=''/>
    </div>
    <div className='mywork-container'>
{mywork_data.map((work,index)=>{
    
    return <img key={index}src={work.w_img} alt="" id='imgs'/>
})
}
    </div>
      <div className='mywork-showmore'>
        <h1>Show More</h1>
        <img src={icons} alt=''/>
      </div>
    </div>
  )
}

export default Mywork
