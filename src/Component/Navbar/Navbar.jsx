import React, { useRef, useState } from 'react'
import'./Navbar.css'
// import logo from './logo.png'
import logo1 from '../../assets/logo1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/align-justify-svgrepo-coms1.svg'
import menu_close from '../../assets/align-right-svgrepo-com 2.svg'
const Navbar = () => {
  const[Menu,setMenu]=useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right='0';
  }
  const closeMenu = () => {
    menuRef.current.style.right='-350px';
  }
  return (
    <div className="navbar">
      <img src={logo1}alt="" className='img'/>
      <img src={menu_open} alt="" className='nav-mob-open' onClick={openMenu}/>
      <ul ref={menuRef} className='nav-menu'> 
      <img src={menu_close} alt='' className='nav-mob-close' onClick={closeMenu}/>
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={()=>setMenu("service")}>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>

    </div>
  )
}

export default Navbar
