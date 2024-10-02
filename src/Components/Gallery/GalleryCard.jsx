import React from 'react'
import "./Gallery.css"
import { Link } from 'react-router-dom';
// import event from "../../assests/images/event.jpg";

const EventCard = (props) => {
  const productLink = `/photos?event=${props.event}`;

  return (
    <>
  
    <Link to={productLink}>
  <div class="card">
    <div class="wrapper">
      {/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" alt="Mythrill" class="cover-image" /> */}
      <img src={props.ibg} alt="Mythrill" class="cover-image" />
    </div>
    {/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" alt="Mythrill" class="title" /> */}
    <img src={props.iname} alt="Mythrill" class="title" />
    {/* <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" alt="Mythrill" class="character" /> */}
    <img src={props.iimg} alt="Mythrill" class="character" />
  </div>
</Link>
  
    </>
  )
}

export default EventCard
