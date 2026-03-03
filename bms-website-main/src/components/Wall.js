import React, { useState } from 'react'
import card1 from '../assets/wall/card1.png'
import card2 from '../assets/wall/card2.png'
import card3 from '../assets/wall/card3.png'
import card4 from '../assets/wall/card4.png'
import card5 from '../assets/wall/card5.png'
import card6 from '../assets/wall/card6.png'

const Wall = () => {

    const [style, setStyle] = useState();

    // if(scrollvar>500){
        
    // }

  return (
    <div className='Wall'>
        <div className='wallTextDiv'>
            <div className='wallText' 
            style={{animation: 'scale-in linear forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}
            >
                Community Wall
            </div>
            {/* <div className='wallCardsDiv'> */}
                    
                    {/* <div className='wallCards six'  style={{animation: 'slide-in-six 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}>
                    <img src={card6}/>

                    </div> */}

                    <div className='wallCards un' style={{animation: 'slide-in-un 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}>
                      <img src={card1}/>
                      {/* <div className='wallCardsContent'>
                        <img src={}/>
                        <div className='cardName'>Mayank</div>
                      </div> */}
                    </div>
                    <div className='wallCards deux'  style={{animation: 'slide-in-deux 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}>
                      <img src={card2}/>
                    </div>
                    <div className='wallCards trois'  style={{animation: 'slide-in-trois 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}>
                    <img src={card3}/>

                    </div>
                    <div className='wallCards quatre'  style={{animation: 'slide-in-quatre 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}>
                    <img src={card4}/>

                    </div>
                    <div className='wallCards cinq'  style={{animation: 'slide-in-cinq 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}>
                    <img src={card5}/>

                    </div>
            </div>
        {/* </div> */}

        <div className='wallTextDiv_mobile'>
            <div className='wallText' 
            style={{animation: 'scale-in linear forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}
            >
                Community Wall
            </div>
            <div className='wallCardsDiv'>
                    <div className='wallCards six'  style={{animation: 'slide-in-six 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}>
                    <img src={card1}/>

                    </div>
                    <div className='wallCards un' style={{animation: 'slide-in-un 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}>
                      <img src={card2}/>
                      {/* <div className='wallCardsContent'>
                        <img src={}/>
                        <div className='cardName'>Mayank</div>
                      </div> */}
                    </div>
                    <div className='wallCards deux'  style={{animation: 'slide-in-deux 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}>
                      <img src={card3}/>
                    </div>
                    <div className='wallCards trois'  style={{animation: 'slide-in-trois 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}>
                    <img src={card4}/>

                    </div>
                    <div className='wallCards quatre'  style={{animation: 'slide-in-quatre 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}>
                    <img src={card5}/>

                    </div>
                    <div className='wallCards cinq'  style={{animation: 'slide-in-cinq 0.5s forwards', animationTimeline: 'view()', animationRangeStart:'cover', animationRangeEnd:'contain'}}>
                    <img src={card6}/>

                    </div>
            </div>
            </div>
    </div>
  )
}

export default Wall