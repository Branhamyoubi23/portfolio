import React from 'react'
import './Contacte.css'
import download from '../../assets/download.jpg'
import Email from '../../assets/email-svgrepo-com.svg'
import telephone from '../../assets/phone-plus-alt-svgrepo-com.svg'
import Maptres from '../../assets/map-icon.svg'

const Contacte = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2eef898f-3118-4d97-a28d-079519027014");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log(res.message);
    }
  };



  return (
    <div className='contact' id='contact'>
    <div className='contact-title'>
      <h1>Get in touch</h1>
      <img src={download} alt="" id='its' />
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>I'm  currently avalaible to take on new project so feel free to contact</p>
          <div className='contact-details'>
            <div className='contact-detail'>
            <img src={Email}/>
            <p>Halo-developer@gmail.com</p>
            </div>
            <div className='contact-detail'>
            <img src={telephone}/>
            <p>+123457890</p>

            </div>
            <div className='contact-detail'>
            <img src={Maptres} id='wet'/>
            <p>street 1234, ebolowa, CM</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
      <label htmlFor='name'>Your Name</label>
            <input type="text" placeholder ='Enter Your Name' name='name' />

            <label htmlFor='email'>Your Email</label>
            <input type="email" placeholder ='Enter Your Email' name='email' />

            <label htmlFor='message'>Write Your Message here</label>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Enter Your Message'>
           

            </textarea>
            <button className='contact-submit'>Submit Now</button>
      </form>
      </div>
    </div>
      
  )
}

export default Contacte


