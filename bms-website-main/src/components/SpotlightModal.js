import React, { useRef } from 'react'
import bloom from '../assets/events/bloom.png'
import { Link } from 'react-router-dom';

const SpotlightModal = ({onClose}) => {

    const modalRef = useRef();

    const closeModal=(e)=>{
        if(modalRef.current === e.target){
            onClose();
        }
    }

  return (
    <div ref={modalRef} onClick={closeModal} className='SpotlightModal'>
        <div className='modalBloomDiv'>
            <div className='spotlightHead'>Spotlight</div>
            <button onClick={onClose} className='modalCloseBtn'>X</button>
            <div className='modalBloom'>
                <Link to='https://bit.ly/4ac25AV' target='_blank'>
                    <img src={bloom} className='bloomPoster'/>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SpotlightModal