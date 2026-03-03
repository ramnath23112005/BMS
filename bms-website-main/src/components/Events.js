import React, {useEffect, useState} from 'react'
import bibo from '../assets/events/bibo.png'
import cpc1 from '../assets/events/cpc1.png'
import bvest from '../assets/events/bvest.png'
import udd from '../assets/events/uddeshya.png'
import aksh from '../assets/events/aksh.png'
import event1 from '../assets/events/event1.jpg'
import event2 from '../assets/events/event2.jpg'
import event3 from '../assets/events/event3.jpg'
import event4 from '../assets/events/event4.jpg'
import mod1 from '../assets/events/mod1.jpg'
import udd3 from '../assets/events/udd3_1.jpeg'
import pause3 from '../assets/events/pause3.jpeg'
import bloom1 from '../assets/events/bloom1.jpeg'
import {motion} from 'framer-motion'
import EventModal from './EventModal'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Events = ({events_ref,scrollvar,setShowModal}) => {

    const [inView, setInView] = useState(false);
    const [showEventModal, setShowEventModal] = useState(false);
    const [EventName, setEventName] = useState('');

    useEffect(()=>{
        document.querySelector('.Events').style.setProperty("--scroll", (scrollvar))
        if(scrollvar>=140){setInView(true)}
      },[scrollvar])

  const slideAnimation = {
    visible:{
        opacity:1,
        x:"0", y:'0'
    },
    transition:{duration:0.8, type:"easeInOut"}
}

    useEffect(()=>{
        if(showEventModal){
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'unset';
        }
    })

    const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
        xml: 
                <div className="eventsCarousel" >
                            <div>
                                <div className='eventsHeading'>Events</div>
                                <div className='eventsSubHeading'>2023-24</div>
                            </div>
                            <div className='bentoGrid'>
                                    <motion.div className='event1' variants={slideAnimation}
                                        onClick={() => {setShowEventModal(true); setEventName('event1')}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={cpc1} alt="" style={{height:'350px'}}/>
                                    </motion.div>
        
                                    <motion.div className='event2' variants={slideAnimation}
                                        onClick={() => {setShowEventModal(true); setEventName('event2')}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={udd} alt="" style={{width:'390px'}}/>
                                    </motion.div>
        
                                    <motion.div className='event3' variants={slideAnimation}
                                        onClick={(e)=> {setShowModal(true);}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        Spotlight
                                    </motion.div>
        
                                    <motion.div className='event4' variants={slideAnimation}
                                        onClick={() => {setShowEventModal(true); setEventName('event4')}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={aksh} alt="" style={{width:'190px'}}/>
                                    </motion.div>
        
                                    <motion.div className='event5' variants={slideAnimation}
                                        onClick={() => {setShowEventModal(true); setEventName('event5')}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={bibo} alt="" style={{width:'390px'}}/>
                                    </motion.div>
        
                                    <motion.div className='event6' variants={slideAnimation}
                                        onClick={() => {setShowEventModal(true); setEventName('event6')}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={bvest} alt="" style={{width:'190px'}}/>
                                    </motion.div>
                            </div>
            </div>
    },
    {
        xml: 
                <div className='eventsCarousel'>
                            <div>
                                <div className='eventsHeading'>Events</div>
                                <div className='eventsSubHeading'>2022-23</div>
                            </div>
                            <div className='bentoGrid bento2'>

                                    <motion.div className='event11' variants={slideAnimation}
                                        onClick={() => {setShowEventModal(true); setEventName('event11')}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={event1} alt="" style={{height:'255px', objectPosition:'left'}}/>
                                    </motion.div>

                                    <motion.div className='event12' variants={slideAnimation}
                                        onClick={() => {setShowEventModal(true); setEventName('event12')}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={event2} alt="" style={{height:'255px', objectPosition:'left'}}/>
                                    </motion.div>

                                    <motion.div className='event13' variants={slideAnimation}
                                        onClick={() => {setShowEventModal(true); setEventName('event13')}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={event3} alt="" style={{height:'255px'}}/>
                                    </motion.div>

                                    <motion.div className='event14' variants={slideAnimation}
                                        onClick={() => {setShowEventModal(true); setEventName('event14')}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={event4} alt="" style={{height:'255px'}}/>
                                    </motion.div>

                            </div>
                </div>
    },
    {
        xml: 
                <div className="eventsCarousel" >
                            <div>
                                <div className='eventsHeading'>Events</div>
                                <div className='eventsSubHeading'>2024-25</div>
                            </div>
                            <div className='bentoGrid bento2'>
                                    <motion.div className='event2425_1' variants={slideAnimation}
                                        onClick={() => {setShowEventModal(true); setEventName('event2425_1')}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={mod1} alt=""/>
                                    </motion.div>
        
                                    <motion.div className='event2425_2' variants={slideAnimation}
                                        onClick={() => {setShowEventModal(true); setEventName('event2425_2')}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={udd3} alt=""/>
                                    </motion.div>
        
                                    <motion.div className='event2425_3' variants={slideAnimation}
                                        onClick={() => {setShowEventModal(true); setEventName('event2425_3')}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={pause3} alt=""/>
                                    </motion.div>
        
                                    <motion.div className='event2425_4' variants={slideAnimation}
                                        onClick={() => {setShowEventModal(true); setEventName('event2425_4')}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={bloom1} alt=""/>
                                    </motion.div>
                            </div>
            </div>
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div ref={events_ref} className='EventsContainer'>
        <div className='Events'>
            
        <div className='carousel'>
            <div
                className="slider"
                style={{ transform: `translate(-${activeIndex * 100}%)`
            }}
            >
                {items.map((item, index) => {
                return <div key={index} className="eventsCarouselCon" > {item.xml}
                    </div>;
                })}
            </div>

            <div className="carousel-buttons">
                <button
                className="button-arrow1"
                onClick={() => {
                    updateIndex(activeIndex - 1);
                }}
                >
                <span className="material-symbols-outlined"><IoIosArrowBack/></span>{" "}
                </button>
                <button
                className="button-arrow2"
                onClick={() => {
                    updateIndex(activeIndex + 1);
                }}
                >
                <span className="material-symbols-outlined"><IoIosArrowForward/></span>
                </button>
            </div>
        </div>

            {showEventModal? <EventModal onClose={()=> setShowEventModal(false)} EventName={EventName}/>:<></>}
        </div>
    </div>
  )
}

export default Events
