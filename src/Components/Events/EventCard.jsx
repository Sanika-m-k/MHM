import React from 'react'
import { Link } from 'react-router-dom'
import './EventCard.css'
import eventPhoto from '../../assests/CarouselImages/mh1.jpg'

const EventCard = (props) => {
    const productLink = `/photos?event=${props.name}`;
  return (
    <div className='main'>


<div class="event-container">
    <img src={props.img} alt="Event Image" class="event-image" />
    
    <div class="event-name">
        {props.name}
    </div>

    <div class="event-details">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
    </div>
	

</div>
<div className='btn'><a href={`/${props.name}`}class="view-images-btn">View Images</a></div>

    </div>
  )
}

export default EventCard
