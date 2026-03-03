import React, {useEffect, useState} from 'react'
import bibo from '../assets/events/bibo.png'
import cpc1 from '../assets/events/cpc1.png'
import bvest from '../assets/events/bvest.png'
import udd from '../assets/events/uddeshya.png'
import aksh from '../assets/events/aksh.png'
import bloom from '../assets/events/bloom.png'
import event1 from '../assets/events/event1.jpg'
import event2 from '../assets/events/event2.jpg'
import event3 from '../assets/events/event3.jpg'
import event4 from '../assets/events/event4.jpg'
import teamprev from '../assets/events/l4.jpeg'
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
                                        onClick={(e)=> {setShowEventModal(true); setEventName(e.target.parentNode.className)}}
                                        initial={{opacity:0, 
                                            // x:'-10%', y:'-10%'
                                    }}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={cpc1} alt="" style={{height:'350px'}}/>
                                    </motion.div>
        
                                    <motion.div className='event2' variants={slideAnimation}
                                        onClick={(e)=> {setShowEventModal(true); setEventName(e.target.parentNode.className)}}
                                        initial={{opacity:0,
                                            //  x:'10%', y:'-10%'
                                            }}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={udd} alt="" style={{width:'390px'}}/>
                                    </motion.div>
        
                                    <motion.div className='event3' variants={slideAnimation}
                                        onClick={(e)=> {setShowModal(true);}}
                                        initial={{opacity:0,
                                            //  x:'0', y:'0'
                                            }}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        Spotlight
                                        {/* <img src={bloom} alt=""  /> */}
                                    </motion.div>
        
                                    <motion.div className='event4' variants={slideAnimation}
                                        onClick={(e)=> {setShowEventModal(true); setEventName(e.target.parentNode.className)}}
                                        initial={{opacity:0,
                                            //  x:'10%', y:'0'
                                            }}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={aksh} alt="" style={{width:'190px'}}/>
                                    </motion.div>
        
                                    <motion.div className='event5' variants={slideAnimation}
                                        onClick={(e)=> {setShowEventModal(true); setEventName(e.target.parentNode.className)}}
                                        initial={{opacity:0,
                                            //  x:'-10%', y:'10%'
                                            }}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={bibo} alt="" style={{width:'390px'}}/>
                                    </motion.div>
        
                                    <motion.div className='event6' variants={slideAnimation}
                                        onClick={(e)=> {setShowEventModal(true); setEventName(e.target.parentNode.className)}}
                                        initial={{opacity:0,
                                            //  x:'10%', y:'10%'
                                            }}
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
                                        onClick={(e)=> {setShowEventModal(true); setEventName(e.target.parentNode.className)}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={event1} alt="" style={{height:'255px', objectPosition:'left'}}/>
                                    </motion.div>

                                    <motion.div className='event12' variants={slideAnimation}
                                        onClick={(e)=> {setShowEventModal(true); setEventName(e.target.parentNode.className)}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={event2} alt="" style={{height:'255px', objectPosition:'left'}}/>
                                    </motion.div>

                                    {/* <motion.div className='teamprev' variants={slideAnimation}
                                        onClick={(e)=> {setShowEventModal(true); setEventName(e.target.parentNode.className)}}
                                        initial={{opacity:0, x:'0', y:'0'}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={teamprev} alt="" style={{width:'300px'}} />
                                    </motion.div> */}

                                    <motion.div className='event13' variants={slideAnimation}
                                        onClick={(e)=> {setShowEventModal(true); setEventName(e.target.parentNode.className)}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={event3} alt="" style={{height:'255px'}}/>
                                    </motion.div>

                                    <motion.div className='event14' variants={slideAnimation}
                                        onClick={(e)=> {setShowEventModal(true); setEventName(e.target.parentNode.className)}}
                                        initial={{opacity:0}}
                                        animate={inView?"visible":""}
                                        transition={slideAnimation.transition}
                                    >
                                        <img src={event4} alt="" style={{height:'255px'}}/>
                                    </motion.div>

                            </div>
                </div>
    },
    // {
    //   title: "Weights",
    //   description:
    //     "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
    // //   icon: require("./Media/example3.svg"),
    // },
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
                {items.map((item) => {
                return <div className="eventsCarouselCon" > {item.xml}
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
                <span class="material-symbols-outlined"><IoIosArrowBack/></span>{" "}
                </button>
                {/* <div className="indicators">
                {items.map((item, index) => {
                    return (
                    <button
                        className="indicator-buttons"
                        onClick={() => {
                        updateIndex(index);
                        }}
                    >
                        <span
                        className={`material-symbols-outlined ${
                            index === activeIndex
                            ? "indicator-symbol-active"
                            : "indicator-symbol"
                        }`}
                        >
                        radio_button_checked
                        </span>
                    </button>
                    );
                })}
                </div> */}
                <button
                className="button-arrow2"
                onClick={() => {
                    updateIndex(activeIndex + 1);
                }}
                >
                <span class="material-symbols-outlined"><IoIosArrowForward/></span>
                </button>
            </div>
        </div>

            {showEventModal? <EventModal onClose={()=> setShowEventModal(false)} EventName={EventName}/>:<></>}
        </div>


        {/* <div className='FacultyLayer'>
            <div></div>
            <div className='facultyLayerContent'>
                <div className='facultyHeading'>
                Meet Our Faculty Coordinator
                </div>
                <div className='facultyName'>Prof. Rubeena Vohra</div>
                <div className='facultyText'>
                    <p style={{marginTop:0}}>Professionally, I am an Assistant Professor in the ECE Department of BVCOE. During my educational journey from schooling to B.Tech (batch topper), M.Tech (Gold Medalist) and then Ph.D (Remote Sensing), I have always valued myself which I think, is one necessary tip to keep up a balanced mindset.</p>
                    <p> In every phase of life, we encounter challenges, overcome obstacles, and jump past hurdles before enjoying the victory. What we must not forget is to set realistic goals to stay on track. Realistic goals are attained if and only if we have a healthy mindset. Mental health plays an important role in all of our lives and with the aim to help engineers, my students and I built the Blissful Minds Society. </p>
                    <p>Our society aims to educate students on how to take good care of their minds by hosting various stress relieving sessions.
                    Few tips that I wish to provide for a healthy mental state are:
                    1) Surround yourself with good people.
                    2) Silence the chaos in your head by praying or doing relaxing exercises.
                 </p>
                    
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Events


// import React, { useState } from "react";
// import { CarouselItem } from "./CarouselItem";

// const Events = () => {

  
//   return (
//     <div className="EventsContainer">
//     <div className="Events">
       
//     </div>
//     </div>
//   );
// };

// export default Events
