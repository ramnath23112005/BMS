import React from 'react'
// import image1 from '../assets/Tran.png'
import { useRef, } from "react";
import { motion, useScroll,useMotionValueEvent,useInView } from "framer-motion";




const Team = () => {
  const ref = useRef(null);
  const container = useRef(null)
  const isInView=useInView(ref,{
    // root: container,
    margin:"0px -70% 0px -50%"});

  // const { scrollXProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"]
  // });

//   useMotionValueEvent(scrollXProgress, "change", (latest) => {
   
//     console.log('team',latest)
//      //   const previous = scrollY.getPrevious();
// })
// if(isInView){console.log(ref);}
console.log(isInView);



const horizontalAnimation = {
  noFocus: { opacity: 0.8 }, 
  focus: {opacity: 1,scaleY:1.3, scaleX:1.3, zIndex:21}, 
  vp: {margin:"0px -70% 0px -48%"}, 
  duration: {duration:0.1},
  amount: "0.5"
}

  return (
    <div className='Team' >
        <div className='teamHeading'>Meet the Team</div>
        <div className='teamCarousel' >
            <div  className='teamMember_dummy'>
                
            </div>
            <div  className='teamMember_dummy'>
                
            </div>
            <motion.div  className='teamMember'
              ref={ref} 
              variants={horizontalAnimation}
              initial= 'noFocus'
              whileInView='focus'
              viewport={horizontalAnimation.vp}
              transition={horizontalAnimation.duration}
              amount={'amount'}>
              
                {/* <img src={image1} alt="" /> */}
                A
            </motion.div>
            <motion.div className='teamMember'
              ref={ref}
              variants={horizontalAnimation}
              initial= 'noFocus'
              whileInView='focus'
              viewport={horizontalAnimation.vp}
              transition={horizontalAnimation.duration}
              amount={'amount'}
              >B
            </motion.div>
            <motion.div className='teamMember'
              ref={ref} variants={horizontalAnimation}
              initial= 'noFocus'
              whileInView='focus'
              viewport={horizontalAnimation.vp}
              transition={horizontalAnimation.duration}>
                C
            </motion.div>
            <motion.div className='teamMember'
              ref={ref} variants={horizontalAnimation}
              initial= 'noFocus'
              whileInView='focus'
              viewport={horizontalAnimation.vp}
              transition={horizontalAnimation.duration}>
                D
            </motion.div>
            <motion.div className='teamMember' 
              ref={ref} variants={horizontalAnimation}
              initial= 'noFocus'
              whileInView='focus'
              viewport={horizontalAnimation.vp}
              transition={horizontalAnimation.duration}
            >
              E
            </motion.div>
            <motion.div className='teamMember' 
              ref={ref}
              variants={horizontalAnimation}
              initial= 'noFocus'
              whileInView='focus'
              viewport={horizontalAnimation.vp}
              transition={horizontalAnimation.duration}
            >
              F***
            </motion.div>
            <motion.div className='teamMember' 
              ref={ref}
              variants={horizontalAnimation}
              initial= 'noFocus'
              whileInView='focus'
              viewport={horizontalAnimation.vp}
              transition={horizontalAnimation.duration}>
                F
            </motion.div>
            <motion.div className='teamMember'   
              ref={ref} variants={horizontalAnimation}
              initial= 'noFocus'
              whileInView='focus'
              viewport={horizontalAnimation.vp}
              transition={horizontalAnimation.duration}>
                G
            </motion.div>
            <motion.div className='teamMember' 
              ref={ref}
              variants={horizontalAnimation}
              initial= 'noFocus'
              whileInView='focus'
              viewport={horizontalAnimation.vp}
              transition={horizontalAnimation.duration}>
                H
            </motion.div>
            <div  className='teamMember_dummy'>
                
            </div>
            <div  className='teamMember_dummy'>
                
            </div>
            <div  className='teamMember_dummy'>
                
            </div>
            
        </div>
    </div>
  )
}

export default Team