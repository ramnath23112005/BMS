import React, {useRef} from 'react'
// import bibo from '../assets/bibo.png'
import { EventsData2223, EventsData2324 } from '../data/events.data';

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
            
                {EventsData2324&& EventsData2324.map((event)=>{
                    if(event.class==EventName)
                    return(
                        <div className='AboutEvent'>
                            <div className='eventPosterFlex'>
                                {event.photos.map((img)=>{return(
                                    <img src={img} className='EventPoster'/>
                                )})}
                            </div>
                            
                            <h2>{event.name}</h2>
                            <p>{event.description}</p>
                        </div>
                )})}

                {EventsData2223&& EventsData2223.map((event)=>{
                    if(event.class==EventName)
                    return(
                        <div className='AboutEvent'>
                            <div className='eventPosterFlex'>
                                {event.photos.map((img)=>{return(
                                    <img src={img} className='EventPoster'/>
                                )})}
                            </div>
                            
                            <h2>{event.name}</h2>
                            <p>{event.description}</p>
                        </div>
                )})}    
        </div>
    </div>
  )
}

export default EventModal