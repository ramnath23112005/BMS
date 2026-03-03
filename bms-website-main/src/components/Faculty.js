import React, { useEffect, useState } from 'react'
import maam from '../assets/maam.jpg'
import { motion } from "framer-motion"
import shivam from '../assets/shivam.jpeg'
import gurusha from '../assets/gurusha.jpeg'
import nikita from '../assets/nikita.jpeg'


const Faculty = ({ scrollvar }) => {

  console.log(scrollvar);
  // const [startfade,setstartfade]=useState(false);

  useEffect(() => {

    // if(scrollvar>250){
    //   setstartfade(true);
    // }

    if (scrollvar > 330) {
      // setstartfade(true);
    }


  }, [scrollvar])

  const fadeAnimation = {
    initial: { opacity: 0.4, scale: 0.8, },
    visible: {
      opacity: 1,
      scale: 1,
    },
    transition: { duration: 0.8, type: "easeInOut" }
  }

  return (
    <div className='FacultyContainer'>
      <div className='Faculty'>
        {/* <div className='teamHeading'>Meet Our Faculty Coordinator</div> */}
        <div className='facultyContent'>
          {/* <motion.div className='facultyImgDiv' variants={fadeAnimation}
                initial='initial'
                animate={startfade?'visible':''}
                >

                  <img src={maam} className='facultyImg'/>
                </motion.div> */}
          <div className='facultyImgDiv'
            style={{ animation: 'faculty-scalein linear forwards', animationTimeline: 'view()', animationRangeStart: 'contain', animationRangeEnd: 'contain 92%' }}
          >
            <img src={maam} className='facultyImg' />
          </div>

          <div className='FacultyMobile'>
            <div className='facultyLayerContent' style={{ animation: 'faculty-parallax linear forwards', animationTimeline: 'view()', animationRangeStart: 'contain', animationRangeEnd: 'contain 92%' }}>
              <div className='facultyHeading'>
                Meet Our Faculty Coordinator
              </div>
              <div className='facultyName'>Prof. Rubeena Vohra</div>
              <div className='facultyText'>
                <p style={{ marginTop: 0 }}>Professionally, I am an Assistant Professor in the ECE Department of BVCOE. During my educational journey from schooling to B.Tech (batch topper), M.Tech (Gold Medalist) and then Ph.D (Remote Sensing), I have always valued myself which I think, is one necessary tip to keep up a balanced mindset.</p>
                <p> In every phase of life, we encounter challenges, overcome obstacles, and jump past hurdles before enjoying the victory. What we must not forget is to set realistic goals to stay on track. Realistic goals are attained if and only if we have a healthy mindset. Mental health plays an important role in all of our lives and with the aim to help engineers, my students and I built the Blissful Minds Society. </p>
                <p>Our society aims to educate students on how to take good care of their minds by hosting various stress relieving sessions.
                  Few tips that I wish to provide for a healthy mental state are:
                  1) Surround yourself with good people.
                  2) Silence the chaos in your head by praying or doing relaxing exercises.
                  {/* 3) Break up the monotony.
                    4) Get help when you need, seek help. It is a measure of strength not weakness.*/}</p>

              </div>
            </div>
          </div>
        </div>

        <div className='foundersContent'>

          <div className='founderHeading'>meet</div>
          <div className='founderImgDiv shivam'><img className='founderImg' src={shivam}></img> </div>
          <div className='founderHeading'>founders</div>
          <div className='founderImgDiv'><img className='founderImg' src={gurusha}></img> </div>
          <div className='founderHeading'>our</div>
          <div className='founderImgDiv'><img className='founderImg' src={nikita}></img> </div>

        </div>

        <div className='foundersContentMobile'>

          <div className='founderHeading'>meet our founders</div>
          <div className='founderScrollMobile'>
            <div className='founderImgDiv'><img className='founderImg' src={gurusha}></img> </div>
            <div className='founderImgDiv shivam'><img className='founderImg' src={shivam}></img> </div>
            <div className='founderImgDiv'><img className='founderImg' src={nikita}></img> </div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default Faculty