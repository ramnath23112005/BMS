import React, {useRef} from 'react'
// import bibo from '../assets/bibo.png'
import { EventsData2223, EventsData2324, EventsData2425 } from '../data/events.data';

const EventModal = ({onClose, EventName}) => {
    const modalRef = useRef();

    const closeModal=(e)=>{
        if(modalRef.current === e.target){
            onClose();
        }
    }

  return (
    <div ref={modalRef} onClick={closeModal} className='EventModal'>
        <div className='EventDiv'>
            <button onClick={onClose} className='modalCloseBtn'>X</button>
            
                {EventsData2425 && EventsData2425.map((event, index)=>{
                    if(event.class === EventName)
                    return(
                        <div key={index} className='AboutEvent'>
                            <div className='eventPosterFlex'>
                                {event.photos.map((img, i)=>{return(
                                    <img key={i} src={img} alt="" className='EventPoster'/>
                                )})}
                            </div>
                            
                            <h2>{event.name}</h2>
                            <p>{event.description}</p>
                        </div>
                    )
                    return null;
                })}

                {EventsData2324 && EventsData2324.map((event, index)=>{
                    if(event.class === EventName)
                    return(
                        <div key={index} className='AboutEvent'>
                            <div className='eventPosterFlex'>
                                {event.photos.map((img, i)=>{return(
                                    <img key={i} src={img} alt="" className='EventPoster'/>
                                )})}
                            </div>
                            
                            <h2>{event.name}</h2>
                            <p>{event.description}</p>
                        </div>
                    )
                    return null;
                })}

                {EventsData2223 && EventsData2223.map((event, index)=>{
                    if(event.class === EventName)
                    return(
                        <div key={index} className='AboutEvent'>
                            <div className='eventPosterFlex'>
                                {event.photos.map((img, i)=>{return(
                                    <img key={i} src={img} alt="" className='EventPoster'/>
                                )})}
                            </div>
                            
                            <h2>{event.name}</h2>
                            <p>{event.description}</p>
                        </div>
                    )
                    return null;
                })}    
        </div>
    </div>
  )
}

export default EventModal