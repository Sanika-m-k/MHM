import React from 'react';
import './Timeline.css'; // We'll define the styling here

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-content">

           
            <h3>{event.name}</h3>
  <div className="circular-image">
    <img src={event.image}  alt={event.name}  />
  </div>
          </div>
          <div className="timeline-time">
            <span>{event.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
