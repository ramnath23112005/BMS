import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, color } from "framer-motion";
import Welcome from '../components/Welcome'
import About from '../components/About'
import Events from '../components/Events'
import Team from '../components/Team'
import Team2 from '../components/Team2'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Faculty from '../components/Faculty';
import Wall from '../components/Wall';
import SpotlightModal from '../components/SpotlightModal';

const Home = () => {

  // const [hide, setHide] = useState(false)
  const [hide, setHide] = useState(true)

  const [isDisplayed, setIsDisplayed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if(hide){
    setTimeout(() => {
      setIsDisplayed(true);
    }, 1500);

    // setTimeout(() => {
    //   setShowModal(true);
    // }, 3000);
  }
    
  }, [hide])
  
  const events_ref = useRef(null);
  const about_ref = useRef(null);
  
  const team_ref = useRef(null);
  const contact_ref = useRef(null);
  const { scrollY } = useScroll(
    // {target: ref, offset: ["end end", "end start"]}
    );
  const [scrollvar, setscrollvar]= useState(0)
  
  useMotionValueEvent(scrollY, "change", (latest) => {
      console.log(latest);
      const height = document.body.clientHeight;
      setscrollvar(latest*100/height)
    //  console.log(scrollvar)
       //   const previous = scrollY.getPrevious();
  })

  useEffect(()=>{
    if(showModal){
        document.body.style.overflow = 'hidden';
    }
    else{
        document.body.style.overflow = 'unset';
    }
})

  return (
    <div>
        <Nav hide={hide} setHide={setHide} showModal={showModal} setShowModal={setShowModal}  events_ref={events_ref} about_ref={about_ref} team_ref={team_ref} contact_ref={contact_ref}/>
        <Welcome hide={hide} setHide={setHide} scrollvar={scrollvar}/>
        
        {isDisplayed&&showModal? <SpotlightModal onClose={()=> setShowModal(false)}/>:<></> }
        {isDisplayed? <About about_ref={about_ref} scrollvar={scrollvar}/>:<></> }
        {isDisplayed? <Events events_ref={events_ref}  scrollvar={scrollvar} setShowModal={setShowModal}/>:<></> }
        {isDisplayed?  <Faculty scrollvar={scrollvar}/>:<></> }
        {isDisplayed?  <Team2 team_ref={team_ref}/>:<></> }
        {isDisplayed?  <Wall/>:<></> }
        {/* {isDisplayed?  <Support/>:<></> } */}
        {isDisplayed?  <Footer contact_ref={contact_ref}/>:<></> }
    </div>
  )
}

export default Home