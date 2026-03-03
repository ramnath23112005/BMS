import React from 'react'
import footerbg from '../assets/footer/footerbg.png'
import footerbgm from '../assets/footer/footerbg_m.png'
import ig from '../assets/footer/ig.png'
import linkedin from '../assets/footer/linkedin.png'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Footer = ({ contact_ref }) => {
  return (
    <div className='footerContainer' >
      <div className='Footer' ref={contact_ref}>
        <div className='footerjoinUs'>

          <div className='joinUs'>
            <h1>Request a Support Group!</h1>
            {/* <div>Be a part of a community that cares! Join Blissful Minds Society today and help us in creating a community that aims at ending stigma and fostering acceptance around mental health and well-being.</div> */}
            <div>Be a part of a community that cares! Join Blissful Minds Society today and help us in creating a community that aims at ending stigma and fostering acceptance around mental health and well-being.</div>
            {/* <a href='mailto:blissfulminds.bvcoe@gmail.com'> */}
            <Link to='/supportgroup'><button className='askQuesBtn'>ask a question</button></Link>
            {/* </a> */}
          </div>

          <div></div>
        </div>

        <div className='footerContent'>
          <div className='footerCopyright' style={{ textAlign: 'left' }}>

            <div className='footerContact'>Contact Us</div>
            <div className='footerLinks'>
              {/* <Link to='https://www.instagram.com/blissfulminds_bvcoe/' target='_blank'><img src={ig} className='footerIcons'/></Link> */}
              {/* <Link to='https://www.instagram.com/p/C48WDEcSKzm/' target='_blank'><img src={ig} className='footerIcons'/></Link> */}
              <Link to='https://www.linkedin.com/company/blissful-minds-society/' target='_blank'><img src={linkedin} className='footerIcons' /></Link>
              <div ><a style={{}} href='https://www.instagram.com/blissfulminds_bvcoe/' target='_blank'><img src={ig} className='footerIcons' /></a></div>
            </div>
            {/* <img src={logo} className='footerLogo'/> */}
            <div>© 2024 Blissful Minds Society. All Rights Reserved</div>
          </div>


          <div className='footerCredits'>
            <div>Developed & Designed by :</div>
            <div style={{ cursor: 'pointer', textDecoration: 'underline' }} className='footerCreditsNames'>
              <div ><a style={{ color: 'white' }} href='https://www.linkedin.com/in/mg-mayankgautam/' target='_blank'>Mayank Gautam</a></div>
              <div ><a style={{ color: 'white' }} href='https://www.linkedin.com/in/manshapreet/' target='_blank'>Manshapreet</a></div>
              <div ><a style={{ color: 'white' }} href='https://www.linkedin.com/in/tusharmittal0109/' target='_blank'>Tushar Mittal</a></div>

            </div>
          </div>
          <div className='footerBMS'><img className='footerbgdesk' src={footerbg} /><img className='footerbgmobile' src={footerbg} /></div>
        </div>

        <div className='footerContent_mobile'>
          {/* <div className='footerAnchors'>
              <div>Home</div>
              <div>About</div>
              <div>Contact Us</div>
              <div>Support Groups</div>
              <div>Events</div>
          </div> */}
          <div className='footerContact'>Contact Us</div>
          <div className='footerLinks'>
            {/* <Link to='https://www.instagram.com/blissfulminds_bvcoe/' target='_blank'><img src={ig} className='footerIcons'/></Link> */}
            <Link to='https://www.instagram.com/p/C48WDEcSKzm/' target='_blank'><img src={ig} className='footerIcons' /></Link>
            <Link to='https://www.linkedin.com/company/blissful-minds-society/' target='_blank'><img src={linkedin} className='footerIcons' /></Link>
          </div>
          <div className='footerCopyright'>
            <div>© 2024 Blissful Minds Society. All Rights Reserved</div>
            <div style={{ fontSize: '' }}>Developed & Designed by
              <a style={{ color: 'white' }} href='https://www.linkedin.com/in/mg-mayankgautam/' target='_blank'> Mayank</a> ,
              <a style={{ color: 'white' }} href='https://www.linkedin.com/in/manshapreet/' target='_blank'> Mansha</a> &
              <a style={{ color: 'white' }} href='https://www.linkedin.com/in/tusharmittal0109/' target='_blank'> Tushar</a>
            </div>
          </div>
          <div className='footerBMS'><img className='' src={footerbgm} /></div>
        </div>
      </div>
    </div>
  )
}

export default Footer