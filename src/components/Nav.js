import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useRef } from 'react'

const Nav = ({hide,setHide, showModal, setShowModal,events_ref, about_ref, team_ref, contact_ref}) => {
  // window.HTMLElement.prototype.scrollIntoView = function() {};
  // const scrollToSection = (sectionId) => {
  //   const element = document.getElementsByClassName('.EventsContainer');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };


  return (
    // hidden?
    (<motion.div className='Nav'
      variants={{
        hidden: {opacity: 0, translateY:-100},
        dropdown:{opacity:1, translateY: 0}
      }}
      initial='hidden'
      animate={hide?"dropdown":""}
      transition={{duration:0.5}}>

        <ul className='navItems'>
            <li className='logoDiv'>
              <Link to='/'><img src={logo}alt="logo" className='Logo' />
              </Link>
               
            
                
            </li>
            {/* <li>
              <div onClick={()=> setShowModal(true)}>
                Bloom
              </div>
            </li> */}
            {/* <li>
              <button>
                <Link to='/Bloom'>
                    Bloom 
                </Link>
              </button>
            </li> */}
            <li>
              {/* <button onClick={() => {window.scrollTo({ top:607, behavior:'smooth'})}}>Support Group</button> */}
              <Link to='/supportgroup'>
                   Support group
              </Link>
            </li>
            <li><button onClick={() => {window.scrollTo({ top:607, behavior:'smooth'})}}>Blogs</button></li>  
            <li><button onClick={() => {window.scrollTo({ top:607, behavior:'smooth'})}}>About</button></li> 
            {/* <li> */}
            {/* <button onClick={() => {window.scrollTo({ top:1203, behavior:'smooth'})}}>Events</button> */}
            {/* <button onClick={() => {events_ref.current?.scrollIntoView({behavior:'smooth'})}}>Events</button> */}
            {/* </li> */}
            {/* <li><button onClick={() => {window.scrollTo({ top:2404, behavior:'smooth'})}}>Team</button></li> */}
            <li><button onClick={() => {window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"})}}>Contact</button></li>
        </ul> 

    </motion.div>)
    // :(<></>)
  )
}

export default Nav